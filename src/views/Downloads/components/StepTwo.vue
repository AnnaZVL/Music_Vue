<script setup>
import StepSection from './StepSection.vue';
import FormStepTwoTrack from '@/components/Layout/DownloadsForm/FormStepTwoTrack.vue';
import FormStepTwoAlbum from '@/components/Layout/DownloadsForm/FormStepTwoAlbum.vue';

import { useStateStore } from '@/stores/stateStore'

const store = useStateStore()
</script>

<template>
  <StepSection title="Информация о релизе">
    <FormStepTwoTrack v-if="store.typeDownload === 'track'"></FormStepTwoTrack>
    <FormStepTwoAlbum v-else></FormStepTwoAlbum>     
  </StepSection>
</template>

<style scoped>


</style>
