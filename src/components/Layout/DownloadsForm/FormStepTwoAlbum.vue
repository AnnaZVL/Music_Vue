<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue'
import SelectBase from '@/components/Layout/UI/Select/SelectBase.vue'
import TultipBase from '@/components/Layout/UI/Tultip/TultipBase.vue'
import InputFile from '@/components/Layout/DownloadsForm/components/InputFile.vue'
import InputText from '@/components/Layout/DownloadsForm/components/InputText.vue'
import InputDate from '@/components/Layout/DownloadsForm/components/InputDate.vue'

import { genre } from '@/constants/downloads'

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'

import { useAlbumStore } from '@/stores/albumStore'
import { useStateStore } from '@/stores/stateStore'

const formData = ref({
  genre: '',
  img: ''
});

const albumStore = useAlbumStore()
const stateStore = useStateStore();

const { meta, handleSubmit } = useForm({
  validationSchema: yup.object({
    albumName: yup.string(),
    albumSinger: yup.string(),
    albumDate: yup.string(),
    albumDateTik: yup.string(),
  })
})

const onSubmit = handleSubmit((values) => {
  console.log('step 2 album');
  const newAlbum = {...values, ...formData.value};

  if (meta.value.valid) {
    albumStore.addAlbum(newAlbum)
    stateStore.changeStep(3)
  }
})

// Добавляем картинку
const updateFile = (file) => {
  formData.value.img = URL.createObjectURL(file)
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
      <InputText name="albumSinger" title="Исполнитель" placeholder="Имя исполнителя" />
      <InputText name="albumName" title="Название альбома" placeholder="Название" />
      <InputDate name="albumDate" title="Дата основного релиза"/>
      <InputDate name="albumDateTik" title="Дата выхода в Tik Tok"/>
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
