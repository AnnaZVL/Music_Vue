<script setup>
import StepSection from './StepSection.vue';
import FormStepThreeTrack from '@/components/Layout/DownloadsForm/FormStepThreeTrack.vue';
import FormStepThreeAlbum from '@/components/Layout/DownloadsForm/FormStepThreeAlbum.vue';

import { useStateStore } from '@/stores/stateStore';

const store = useStateStore()

</script>

<template>
  <StepSection title="Нужны аудио">
    <FormStepThreeTrack v-if="store.typeDownload === 'track'"/>
    
    <FormStepThreeAlbum v-else />   
  </StepSection>
  
</template>

<style scoped></style>