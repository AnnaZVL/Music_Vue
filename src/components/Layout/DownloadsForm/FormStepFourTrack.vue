<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue';
import InputText from '@/components/Layout/DownloadsForm/InputText.vue';

import { useForm } from 'vee-validate'
import * as yup from 'yup'

const { meta, handleSubmit } = useForm({
  validationSchema: yup.object({    
    autorMusik: yup.string(),
    autorText: yup.string(),
    trackIsrc: yup.string(),
    trackUpc: yup.string(),
  })
})

const onSubmit = handleSubmit((values) => {  
  if (meta.value.valid) {   
    console.log('one track', values);
  }
})
</script>

<template>
    <FormDownloads @submit.prevent="onSubmit">
        <div class="form-step__wrapper"> 
            <InputText name="autorMusik" title="Автор музыки" placeholder="ФИО" />
            <InputText name="autorText" title="Автор слов" placeholder="ФИО" />
            <InputText name="trackIsrc" title="IRSC" />
            <InputText name="trackUpc" title="UPC"/>
        </div>
    </FormDownloads>
</template>

<style scoped>
</style>