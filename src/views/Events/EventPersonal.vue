<script setup>
import NewEvents from './components/NewEvents.vue'
import OldEvents from './components/OldEvents.vue'

import { eventNewList, eventOldList } from '@/constants/eventsPersonal'
</script>

<template>
  <NewEvents :events="eventNewList" />

  <OldEvents class="personal-section" :events="eventOldList" />
</template>

<style scoped></style>
