<script setup>
import { inject, ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import InputLogin from './InputLogin.vue'

import isPassword from '@/validation/password'
import { useUserStore } from '@/stores/userStore'

const { meta, handleSubmit } = useForm({
  validationSchema: yup.object({
    emailSign: yup
      .string()
      .email('Не правильный формат почты')
      .required('Поле обязательно для заполнения'),
    passwordSign: yup
      .string()
      .required('Поле обязательно для заполнения')
      .min(6, 'Минимум 6 символов')
      .test('is-valid-password', 'Пароль должен содержать допустимые символы', isPassword)
  })
})

const isShow = ref(false)
const store = useUserStore()
const closeModal = inject('sign')

const onSubmit = handleSubmit((values) => {
  isShow.value = false
  const user = { login: values.emailSign }
  if (meta.value.valid && store.successfulLogin(user)) { 
    closeModal()
  } else {
    isShow.value = true
  }
})
</script>

<template>
  <form class="modal__form form" @submit.prevent="onSubmit">
    <InputLogin
      title="Ваш логин (адрес электронной почты)"
      name="emailSign"
      placeholder="Введите почту"
      type="email"
    ></InputLogin>
    <InputLogin
      title="Пароль"
      name="passwordSign"
      placeholder="Пароль"
      type="password"
    ></InputLogin>

    <button class="btn form__btn" type="submit">Войти</button>
    <a href="#" class="form__link">Забыли пароль?</a>
    <p class="message" v-if="isShow">Такой пользователь не зарегистрирован</p>
  </form>
</template>

<style>
.message {
  font-size: 14px;
  color: var(--color-second);
}
</style>
