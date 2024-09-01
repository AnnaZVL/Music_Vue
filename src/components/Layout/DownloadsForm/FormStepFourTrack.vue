<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue';
import InputText from '@/components/Layout/DownloadsForm/InputText.vue';
import InputTextarea from '@/components/Layout/DownloadsForm/InputTextarea.vue';

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import router from '@/router'

import { useTrackStore } from '@/stores/trackStore';
import { useStateStore } from '@/stores/stateStore'

const trackStore = useTrackStore();
const stateStore = useStateStore();

const { meta, handleSubmit } = useForm({
  validationSchema: yup.object({    
    autorMusik: yup.string(),
    autorText: yup.string(),
    trackIsrc: yup.string(),
    trackUpc: yup.string(),
    trackText: yup.string(),
  })
})

const onSubmit = handleSubmit((values) => {  
  if (meta.value.valid) {  
    trackStore.addTrack(values) 
    console.log('new track', values);
    router.push({name: 'step5', params: {
    type: `${stateStore.typeDownload}`
  }}) 
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
            <InputTextarea name="trackText" title="Текст песни"/>
        </div>
    </FormDownloads>
</template>

<style scoped>
</style>