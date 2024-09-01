<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue'
import TextBlock from '@/components/Layout/DownloadsForm/TextBlock.vue'

import { useAlbumStore } from '@/stores/albumStore'

import { useForm } from 'vee-validate'

const albumStore = useAlbumStore()

const { meta, handleSubmit } = useForm({
  
})

const onSubmit = handleSubmit(() => {
  console.log(albumStore.newALbum.tracks);
})

const updateTrackText = ({ trackId, text }) => {
  const track = albumStore.newALbum.tracks.find(track => track.id === trackId);
  if (track) {
    track.trackText = text;
  }
  console.log('Updated track text:', trackId, text);
}
</script>

<template>
  <FormDownloads @submit.prevent="onSubmit">
    <div class="tracks" v-for="track in albumStore.newALbum.tracks" :key="track.id">
      <TextBlock :name="`trackText_${track.id}`"
        :trackName="track.trackName"
        :trackId="track.id"
        @updateTrackText="updateTrackText"/>
    </div>
  </FormDownloads>
</template>

<style scoped></style>
