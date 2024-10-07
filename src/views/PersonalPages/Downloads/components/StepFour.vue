<script setup>
import StepSection from './StepSection.vue';
import FormStepFourTrack from '@/components/Layout/DownloadsForm/FormStepFourTrack.vue';
import FormStepFourAlbum from '@/components/Layout/DownloadsForm/FormStepFourAlbum.vue';

import { useStateStore } from '@/stores/stateStore';

const store = useStateStore()

</script>

<template>
  <StepSection title="Важная информация">
    <FormStepFourTrack v-if="store.typeDownload === 'track'"/>
    
    <FormStepFourAlbum v-else />   
  </StepSection>
  
</template>

<style scoped></style>