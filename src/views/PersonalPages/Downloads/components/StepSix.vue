<script setup>
import StepSection from './StepSection.vue';
import FormPaymentTrack from '@/components/Layout/DownloadsForm/FormPaymentTrack.vue';
import FormPaymentAlbum from '@/components/Layout/DownloadsForm/FormPaymentAlbum.vue';

import { useStateStore } from '@/stores/stateStore';

const store = useStateStore()

</script>

<template>
  <StepSection title="Подведем итог">
    <FormPaymentTrack v-if="store.typeDownload === 'track'"/>
    
    <FormPaymentAlbum v-else />   
  </StepSection>  
</template>

<style scoped></style>