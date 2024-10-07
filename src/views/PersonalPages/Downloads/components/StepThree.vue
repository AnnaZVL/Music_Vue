<script setup>
import StepSection from './StepSection.vue';
import FormStepThreeTrack from '@/components/Layout/DownloadsForm/FormStepThreeTrack.vue';
import FormStepThreeAlbum from '@/components/Layout/DownloadsForm/FormStepThreeAlbum.vue';

import { useStateStore } from '@/stores/stateStore';
import { computed } from 'vue';

const store = useStateStore()

const titleSection = computed(() => store.typeDownload === 'track' ? 'Нужны аудио' : 'Загрузите данные для каждого трека' )
</script>

<template>
  <StepSection :title="titleSection">
    <FormStepThreeTrack v-if="store.typeDownload === 'track'"/>
    
    <FormStepThreeAlbum v-else />   
  </StepSection>
  
</template>

<style scoped></style>