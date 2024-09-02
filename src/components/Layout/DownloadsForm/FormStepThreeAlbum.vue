<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue';
import OneTrack from '@/components/Layout/DownloadsForm/OneTrack.vue'

import { useAlbumStore } from '@/stores/albumStore'
import { useStateStore } from '@/stores/stateStore'

import { useForm } from 'vee-validate'
import router from '@/router'
import { ref } from 'vue';

const tracks = ref([{}]);
const isShow = ref(true)
const albumStore = useAlbumStore();
const stateStore = useStateStore();

const { meta, handleSubmit } = useForm({})

const onSubmit = handleSubmit(() => {   
  console.log('step 3');
  if (meta.value.valid) {   
    albumStore.addAlbum({ tracks: tracks.value })
    router.push({name: 'step4', params: {
      type: `${stateStore.typeDownload}`
    }}) 
  }
})

// Записываем введенные данные в массив треков
const addTrack = (track, index) => {
  tracks.value[index] = track; // Обновляем трек по индексу
}

// Добавляем пустой объект, который будет использоваться для нового трека и блок ввода
const addNewTrack = () => {
  tracks.value.push({})  
}

//для кнопки Продилжить, что бы добавить трек, но не создавать новое поле
const continueAdded = (track, index) => {
  addTrack(track, index)
  isShow.value = false
}

</script>

<template>
  <FormDownloads @submit.prevent="onSubmit" :isDisabled="isShow">
    <div class="tracks">    
      <OneTrack 
        v-for="(track, index) in tracks" 
        :key="index" 
        :track="track"
        @update-track="(newTrack) => addTrack(newTrack, index)" 
        @addNewTrack="addNewTrack"
        @continue-added="(newTrack) => continueAdded(newTrack, index)"
      />      
    </div>   
  </FormDownloads>
</template>

<style scoped>
</style>
