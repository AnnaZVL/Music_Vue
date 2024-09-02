<script setup>
import { ref } from 'vue'
import router from '@/router'

import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue'
import InputAudio from '@/components/Layout/DownloadsForm/InputAudio.vue'
import defaultFoto from '@/assets/img/personal_page/no-photo.jpg'

import { useTrackStore } from '@/stores/trackStore'
import { useStateStore } from '@/stores/stateStore'

const formData = ref({
  audio: ''
})

const isShow = ref(false)

const trackStore = useTrackStore()
const stateStore = useStateStore()

const onSubmit = () => {
  console.log('step3')
  trackStore.addTrack({ audio: formData.value.audio })
  router.push({
    name: 'step4',
    params: {
      type: `${stateStore.typeDownload}`
    }
  })
}

const updateFile = (file) => {
  formData.value.audio = file
  isShow.value = true
}
</script>

<template>
  <FormDownloads title="Загрузите WAV файл(ы)" @submit.prevent="onSubmit" :isDisabled="!isShow">
    <div class="upload-singl">
      <InputAudio @updateFile="updateFile" />
    </div>

    <transition name="rezalt">
      <div class="added-singl" v-if="isShow">
        <div class="added-singl__img">
          <img :src="trackStore.newTrack.img || defaultFoto" alt="" />
        </div>
        <div class="added-singl__content">
          <h5 class="added-singl__name">Трек: {{ trackStore.newTrack.trackName }}</h5>
          <span class="added-singl__autor">Автор: {{ trackStore.newTrack.trackSinger }}</span>
        </div>
      </div>
    </transition>
  </FormDownloads>
</template>

<style scoped>
.rezalt-active,
.rezalt-active {
  transition: opacity 0.3s ease-in-out;
}

.rezalt,
.rezalt-to {
  opacity: 1;
}

.upload-singl {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.added-singl {
  padding: 20px;
  gap: 30px;
  display: flex;
  gap: 30px;
  flex-shrink: 1;
  border-radius: 20px;
  border: 1px solid rgba(83, 95, 246, 0.4);
  width: 100%;
}

.added-singl__img {
  width: 150px;
  height: 150px;
  border: 1px solid var(--color-blue);
  border-radius: 15px;
}

.added-singl__img img {
  aspect-ratio: 1 / 1;
}
.added-singl__content {
  display: grid;
  gap: 20px;
  flex-basis: 300px;
}

.added-singl__name {
  font-size: 24px;
}
</style>
