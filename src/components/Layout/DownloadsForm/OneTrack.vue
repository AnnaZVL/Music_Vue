<script setup>
import InputAudio from '@/components/Layout/DownloadsForm/InputAudio.vue'
import InputFile from '@/components/Layout/DownloadsForm/InputFile.vue'
import InputText from '@/components/Layout/DownloadsForm/InputText.vue'

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import generateRandomId from '@/helpers/randomId'

defineProps(['track'])
const emits = defineEmits(['updateTrack', 'addNewTrack', 'continueAdded'])
const formData = ref({
  id: generateRandomId(),
  audio: '',
  img: ''
})

const { meta, handleSubmit } = useForm({
  validationSchema: yup.object({
    trckName: yup.string(),
    trackSinger: yup.string(),
    autorMusik: yup.string(),
    autorText: yup.string(),
    trackIsrc: yup.string(),
    trackUpc: yup.string()
  })
})
const updateFileAudio = (file) => {
  formData.value.audio = file
}

const updateFileImg = (file) => {
  formData.value.img = URL.createObjectURL(file)
}

const onSubmit = handleSubmit((values) => {
  const newTrack = {...values, ...formData.value }
  if (meta.value.valid) {
    emits('updateTrack', newTrack)
    emits('addNewTrack')
    console.log('one track', newTrack)
  }
})

const continueAdded = handleSubmit((values) => {
  const newTrack = { ...values, ...formData.value }

  emits('continueAdded', newTrack)
})
</script>

<template>
  <form class="form-step__track" @submit.prevent="onSubmit">
    <div class="form-step__track-top">
      <div class="form-step__content">
        <InputAudio @updateFile="updateFileAudio" />
        <span class="upload-singl-text">Загрузите WAV файл</span>
      </div>
      <div class="form-step__content">
        <InputFile @updateFile="updateFileImg" />
        <span class="upload-singl-text">Загрузите Обложку трека</span>
      </div>
    </div>
    <div class="form-step__wrapper">
      <InputText name="trackName" title="Название трека" placeholder="Название" />
      <InputText name="trackSinger" title="Исполнитель" placeholder="ФИО" />
      <InputText name="autorMusik" title="Автор музыки" placeholder="ФИО" />
      <InputText name="autorText" title="Автор слов" placeholder="ФИО" />
      <InputText name="trackIsrc" title="IRSC" />
      <InputText name="trackUpc" title="UPC" />
    </div>
    <div class="form-step__wrapper">
      <button class="add-track__btn btn" type="submit">Еще трек</button>
      <button class="add-track__btn btn" type="button" @click="continueAdded">Продолжить</button>
    </div>
  </form>
</template>

<style scoped>
.form-step__track {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(83, 95, 246, 0.4);
  position: relative;
  z-index: -1;
}

.form-step__track-top {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  position: relative;
  z-index: -1;
}

.form-step__content {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.add-track__btn {
  padding: 10px 20px;
  border: 1px solid var(--color-blue);
  border-radius: 10px;
  outline: none;
  width: 300px;
  align-self: center;
  color: var(--color-white);
  position: relative;
  z-index: 100;
  transition:
    color 0.3s ease-in-out,
    border 0.3s ease-in-out;
}

.add-track__btn:hover {
  color: var(--color-second);
  border-color: var(--color-second);
}
</style>
