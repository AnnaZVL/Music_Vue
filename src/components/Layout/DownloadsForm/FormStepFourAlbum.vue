<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue'
import TextBlock from '@/components/Layout/DownloadsForm/TextBlock.vue'

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
<!-- <div class="step__section--single step__section--box">
  
  
      <div class="additionally__card">
          <img
              class="additionally__card--img"
              src="{% static 'main/img/personal_page/Eosella.jpg' %}"
              alt=""
          />
          <div class="additionally__card--body">
              <span class="additionally__card--price">1000</span>
              <span class="additionally__card--text"
                  >Придумаем отличное описание Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ad, voluptatem.</span
              >
          </div>
          <button class="btn additionally__card--btn">Добавить</button>
      </div>
      <div class="additionally__card">
          <img
              class="additionally__card--img"
              src="{% static 'main/img/personal_page/Eosella.jpg' %}"
              alt=""
          />
          <div class="additionally__card--body">
              <span class="additionally__card--price">2000</span>
              <span class="additionally__card--text">Нарисуем красивую обложку</span>
          </div>
          <button class="btn additionally__card--btn">Добавить</button>
      </div>
  </div>
</div> -->
<style scoped></style>
