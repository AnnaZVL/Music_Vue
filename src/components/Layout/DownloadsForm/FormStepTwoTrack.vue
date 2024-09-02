<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue'
import SelectBase from '@/components/Layout/UI/Select/SelectBase.vue'
import TultipBase from '@/components/Layout/UI/Tultip/TultipBase.vue'
import InputFile from '@/components/Layout/DownloadsForm/InputFile.vue'
import InputText from '@/components/Layout/DownloadsForm/InputText.vue'
import InputDate from '@/components/Layout/DownloadsForm/InputDate.vue'

import { genre } from '@/constants/downloads'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'

import { useTrackStore } from '@/stores/trackStore'
import { useStateStore } from '@/stores/stateStore'
import router from '@/router'

const formData = ref({
  genre: '',
  img: ''
})

const trackStore = useTrackStore()
const stateStore = useStateStore()

const { meta, handleSubmit } = useForm({
  validationSchema: yup.object({
    trackName: yup.string(),
    trackSinger: yup.string(),
    trackDate: yup.string(),
    trackDateTik: yup.string()
  })
})
const onSubmit = handleSubmit((values) => {
  const newTrack = { ...values, ...formData.value }

  if (meta.value.valid) {
    console.log('step2')
    trackStore.addTrack(newTrack)
    router.push({
      name: 'step3',
      params: {
        type: `${stateStore.typeDownload}`
      }
    })
  }
})

const updateFile = (file) => {
  formData.value.img = URL.createObjectURL(file) // Обновляем поле file в объекте formData
}
</script>

<template>
  <FormDownloads title="Выберите жанр" @submit.prevent="onSubmit">
    <SelectBase v-model="formData.genre" :optionsList="genre" id="genre"> </SelectBase>
    <div class="form-step__box">
      <h6 class="form-step__title">Обложка</h6>
      <TultipBase></TultipBase>
    </div>
    <InputFile @updateFile="updateFile"></InputFile>
    <div class="form-step__wrapper">
      <InputText name="trackSinger" title="Исполнитель" placeholder="Имя исполнителя" />
      <InputText name="trackName" title="Название трека" placeholder="Название" />
      <InputDate name="trackDate" title="Дата основного релиза" />
      <InputDate name="trackDateTik" title="Дата выхода в Tik Tok" />
    </div>
  </FormDownloads>
</template>

<style scoped>
.form-step__box {
  position: relative;
  min-width: 30%;
}

.form-step__box > .tultip {
  right: 60%;
}
</style>
