<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue'
import InputText from './InputText.vue'

import { useForm } from 'vee-validate'
import * as yup from 'yup'

import { useTrackStore } from '@/stores/trackStore'
import { useStateStore } from '@/stores/stateStore'

const trackStore = useTrackStore()
const stateStore = useStateStore()

const { meta, handleSubmit } = useForm({
  validationSchema: yup.object({
    linkOne: yup.string(),
    linkTwo: yup.string(),
    linkThre: yup.string()
  })
})

const onSubmit = handleSubmit((values) => {
  console.log('step5 track')
  if (meta.value.valid) {
    trackStore.addTrack(values)
    trackStore.rezaltCheck() //Подсчет итоговой суммы
    stateStore.changeStep(6) 
  }
})
</script>

<template>
  <FormDownloads title="Ссылки на площадки" @submit.prevent="onSubmit">
    <InputText title="Ссылка на карточку исполнителя в" name="linkOne" />
    <InputText title="Ссылка на карточку исполнителя в" name="linkTwo" />
    <InputText title="Ссылка на карточку исполнителя в" name="linkThre" />
    <label class="form-step__checkbox checkbox" for="check">
      <input class="checkbox__input" id="check" type="checkbox" checked />
      <span class="checkbox__check"></span>
      <span class="checkbox__box"></span>
      <span class="checkbox__text"
        >Принимаю
        <a href="#">условия публичной Оферты</a>
      </span>
    </label>
  </FormDownloads>
</template>

<style scoped>
.form-step__checkbox {
  margin-bottom: 30px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
}

.checkbox__input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  cursor: pointer;
  outline: none;
}

.checkbox__text {
  vertical-align: middle;
  padding-left: 35px;
  font-size: 18px;
}

.checkbox__text > a {
  color: var(--color-second);
  text-decoration: underline;
}

.checkbox__check {
  position: absolute;
  left: 6px;
  z-index: 10;
  width: 10px;
  height: 10px;
  background: transparent;
  border: none;
}

.checkbox__check::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -1px;
}

.checkbox__box {
  content: '';
  padding: 10px;
  position: absolute;
  z-index: 1;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: transparent;
  border: 1px solid var(--color-white);
}

.checkbox__input:checked + .checkbox__check::before {
  content: '✔';
}
</style>
