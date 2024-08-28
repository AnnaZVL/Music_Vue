<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { inject } from 'vue'

import InputLogin from './InputLogin.vue'

import isPassword from '@/validation/password'

import { useUserStore } from '@/stores/userStore'

const { meta, handleSubmit } = useForm({
  validationSchema: yup.object({
    emailLogin: yup
      .string()
      .email('Не правильный формат почты')
      .required('Поле обязательно для заполнения'),
    passwordLogin: yup
      .string()
      .required('Поле обязательно для заполнения')
      .min(6, 'Минимум 6 символов')
      .test('is-valid-password', 'Пароль должен содержать допустимые символы', isPassword),
    rePasswordLogin: yup
      .string()
      .required('Поле обязательно для заполнения')
      .oneOf([yup.ref('passwordLogin')], 'Пароли не совпадают')
  })
})

const store = useUserStore()
const closeModal = inject('sign')


const onSubmit = handleSubmit((values) => {
  const newUser = { login: values.emailLogin, password: values.passwordLogin }

  if (meta.value.valid) {

    store.addNewUser(newUser)
    closeModal()
  } 
})
</script>

<template>
  <form class="modal__form form" @submit.prevent="onSubmit">
    <InputLogin
      title="Ваш логин (адрес электронной почты)"
      name="emailLogin"
      placeholder="Введите почту"
      type="email"
    ></InputLogin>
    <InputLogin
      title="Пароль"
      name="passwordLogin"
      placeholder="Пароль"
      type="password"
    ></InputLogin>
    <InputLogin
      title="Повторите пароль"
      name="rePasswordLogin"
      placeholder="Пароль"
      type="password"
    ></InputLogin>
    <button class="btn form__btn" type="submit" :disabled="!meta.valid">
      Зарегистрироваться
    </button>
  </form>
</template>

<style></style>
