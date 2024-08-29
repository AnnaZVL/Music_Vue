<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue'
import SelectBase from '@/components/Layout/UI/Select/SelectBase.vue'
import TultipBase from '@/components/Layout/UI/Tultip/TultipBase.vue'
import InputFile from '@/components/Layout/DownloadsForm/InputFile.vue'

import { genre } from '@/constants/downloads'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'

const formData = ref({
    img: ''
})
const { meta, handleSubmit } = useForm({
    validationSchema: yup.object({
    name: yup
      .string()
    })
})
const onSubmit = handleSubmit((values) => {  
  
  if (meta.value.valid) { 
    console.log('values', values.name, formData.value.img);
  }
})

const updateFile = (file) => {
  formData.value.img = file // Обновляем поле file в объекте formData
}
</script>

<template>
    <FormDownloads title="Выберите жанр" @submit.prevent="onSubmit">
      <SelectBase :optionsList="genre" id="genre"> </SelectBase>
      <div class="form-step__box">
        <h6 class="form-step__title">Обложка</h6>
        <TultipBase></TultipBase>
      </div>
      <InputFile @updateFile="updateFile"></InputFile>
      <input type="text" name="name">
    </FormDownloads>
</template>

<style scoped>
.form-step__box {
   position: relative;
   min-width: 30%;
}

.form-step__box > .tultip {
    right: 30%;
}

.form-step__title {
    font-size: 24px;
}
</style>