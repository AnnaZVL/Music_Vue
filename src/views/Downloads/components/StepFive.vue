<script setup>
import StepSection from './StepSection.vue';
import FormStepFiveTrack from '@/components/Layout/DownloadsForm/FormStepFiveTrack.vue';
import FormStepThreeAlbum from '@/components/Layout/DownloadsForm/FormStepThreeAlbum.vue';

import { useStateStore } from '@/stores/stateStore';

const store = useStateStore()

</script>

<template>
  <StepSection title="Важная информация">
    <FormStepFiveTrack v-if="store.typeDownload === 'track'"/>
    
    <FormStepThreeAlbum v-else />   
  </StepSection>
  
</template>

<style scoped></style>