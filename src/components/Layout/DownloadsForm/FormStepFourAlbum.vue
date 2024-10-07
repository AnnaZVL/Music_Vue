<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue'
import TextBlock from '@/components/Layout/DownloadsForm/components/TextBlock.vue'

import { useAlbumStore } from '@/stores/albumStore'
import { useStateStore } from '@/stores/stateStore'

import { useForm } from 'vee-validate'

const albumStore = useAlbumStore()
const stateStore = useStateStore()

const { meta, handleSubmit } = useForm({})

const onSubmit = handleSubmit(() => {
  console.log('step 4 album')
  if (meta.value.valid) {
    stateStore.changeStep(5) 
  }
})

// Добавляем текст песни в конкретный трек
const updateTrackText = ({ trackId, text }) => { 
    const track = albumStore.newALbum.tracks.find((track) => track.id === trackId)
    if (track) {
      track.trackText = text
    }    
}
</script>

<template>
  <FormDownloads @submit.prevent="onSubmit">
    <div class="tracks" v-for="track in albumStore.newALbum.tracks" :key="track.id">
      <TextBlock
        :name="`trackText_${track.id}`"
        :trackName="track.trackName"
        :trackId="track.id"
        @updateTrackText="updateTrackText"
      />
    </div>
  </FormDownloads>
</template>

<style scoped></style>
