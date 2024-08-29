<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import { register } from 'swiper/element/bundle'

import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'
import CardEvent from './CardEvent.vue'
import WinnerBox from './WinnerBox.vue'

register()
defineProps(['events'])
</script>

<template>
  <SectionPersonal class="" title="Завершенные события">
    <template #body>      
        <swiper-container
          class="oldEvent__cards swiper"
          :slides-per-view="2"
          :slides-per-group="1"
          :space-between="20"
          navigation="true"
        >
          <swiper-slide class="swiper-slide" v-for="event in events" :key="event.id">
            <CardEvent :event="event" :isRegistered="false">
              <template #winner>
                <WinnerBox :winner="event.winner" />
              </template>
            </CardEvent>
          </swiper-slide>
        </swiper-container>
      
    </template>
  </SectionPersonal>
</template>

<style scoped>
.oldEvent__cards {
  position: relative;
  width: 850px;
  height: 800px;
}

.swiper-slide {
  height: inherit;
}
</style>
