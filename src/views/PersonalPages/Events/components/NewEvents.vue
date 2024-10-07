<script setup>
import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'
import CardEvent from './CardEvent.vue'

defineProps(['events'])
</script>

<template>
  <SectionPersonal class="" title="Новые события">
    <template #body>
      <div class="events">
        <CardEvent v-for="event in events" :key="event.id" :event="event" />
      </div>
    </template>
  </SectionPersonal>
</template>

<style scoped>
.events {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
}
</style>
