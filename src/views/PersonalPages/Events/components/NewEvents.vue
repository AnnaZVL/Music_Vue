<script setup>
import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'
import CardEvent from './CardEvent.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps(['events'])

const cardsInRow = ref(0)

const calculateCardsInRow = () => {
  const eventContainer = document.querySelector('.events')
  if (eventContainer) {
    // Ширина родителя (контейнера с карточками)
    const containerWidth = eventContainer.clientWidth

    // Ширина одной карточки (300px + gap)
    let cardWidth = 300 + 20 // 20px - значение gap между карточками
    // Считаем, сколько карточек помещается в один ряд
    cardsInRow.value = Math.floor(containerWidth / cardWidth)
    if (window.innerWidth < 568) {
      console.log('object');
      cardWidth = 300
      cardsInRow.value = 1
    }
  }
}

let resizeObserver = new ResizeObserver(() => {
  calculateCardsInRow()
})

onMounted(() => {
  // Наблюдаем за изменениями размеров родительского элемента
  const eventContainer = document.querySelector('.events')
  if (eventContainer) {
    resizeObserver.observe(eventContainer)
  }
})

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<template>
  <SectionPersonal title="Новые события">
    <template #body>
      <div class="events">
        <CardEvent
          v-for="(event, index) in events"
          :key="event.id"
          :event="event"
          :class="{ hidden: index >= cardsInRow }"
        />
      </div>
    </template>
  </SectionPersonal>
</template>

<style scoped>
.events {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.hidden {
  display: none;
}
</style>
