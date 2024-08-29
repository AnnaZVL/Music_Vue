<script setup>
import StepSection from './StepSection.vue';

import { useStateStore } from '@/stores/stateStore';

const store = useStateStore()

</script>

<template>
  <StepSection title="Информация о релизе">
    <div v-if="store.typeDownload === 'track'">Track 3</div>  
    <div v-else>ALBUM 3</div>    
  </StepSection>
</template>

<style scoped></style>