<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue';
import OneTrack from '@/components/Layout/DownloadsForm/OneTrack.vue'

import { useAlbumStore } from '@/stores/albumStore'
import { useStateStore } from '@/stores/stateStore'

import { useForm } from 'vee-validate'
import router from '@/router'

const tracks = []
const albumStore = useAlbumStore();
const stateStore = useStateStore();

const { meta, handleSubmit } = useForm()

const onSubmit = handleSubmit(() => {    
  if (meta.value.valid) {   
    albumStore.addAlbum({tracks}) 
  }
  router.push({name: 'step4', params: {
    type: `${stateStore.typeDownload}`
  }}) 
})

const addTrack = (track) => {
  tracks.value.push(track)
  console.log('tracks', tracks);
}
</script>

<template>
  <FormDownloads title="Загрузите данные для каждого трека" @submit.prevent="onSubmit">
    <div class="tracks">    
      <OneTrack @update-track="addTrack"/>
    </div>   
  </FormDownloads>
</template>

<style scoped>
.tracks {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  position: relative;
  z-index: 0;
}
</style>
