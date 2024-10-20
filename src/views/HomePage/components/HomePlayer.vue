<script setup>
import handImg from '@/assets/img/home_page/2hand.png'
import { onMounted, ref } from 'vue'
import videoOne from '@/assets/img/home_page/train.mp4'
import videoTwo from '@/assets/img/home_page/IG-stories.mp4'
import { useRoute } from 'vue-router'

const videos = [videoOne, videoTwo]
let currentVideoIndex = ref(0)
const videoPlayer = ref(null)
const route = useRoute()

const playVideo = (index) => {
  if (index < videos.length && videoPlayer.value) {
    videoPlayer.value.src = videos[index]
    videoPlayer.value.load()
  }
}

const changePlay = () => {
  if (videoPlayer.value && route.name === 'Home') {
    videoPlayer.value.play()

    // Установите таймер для переключения видео через 3 секунды
    setTimeout(() => {      
      if (currentVideoIndex.value === videos.length - 1) {
        currentVideoIndex.value = 0
      } else {
        currentVideoIndex.value++
      }

      playVideo(currentVideoIndex.value)
    }, 3000) // 3000 миллисекунд = 3 секунды
  }
}

onMounted(() => {  
  if (videoPlayer.value && route.name === 'Home') {
    playVideo(currentVideoIndex.value)
  }
})
</script>

<template>
  <div class="hero__player">
    <img class="hero__img" :src="handImg" aria-disabled />
    <video class="hero__video" ref="videoPlayer" autoplay muted @canplay="changePlay"></video>
  </div>
</template>

<style scoped>
.hero__player {
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  width: 52%;
  background-position: -29%;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 800px;
  position: relative;
}

.hero__img {
  z-index: 0;
  position: absolute;
  right: 0.35%;
  width: 93%;
  object-fit: cover;
  flex-grow: 0;
  flex-shrink: 0;
}

.hero__video {
  width: 39%;
  object-fit: cover;
  position: absolute;
  z-index: 9;
  top: 8.5%;
  right: 10.95%;
  border-radius: 20px;
}
</style>
