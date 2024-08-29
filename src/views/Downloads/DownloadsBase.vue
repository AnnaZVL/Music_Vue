<script setup>
import StepsList from './components/StepsList.vue'

import { provide, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStateStore } from '@/stores/stateStore';

const store = useStateStore();

const activeStep = ref(1);
const router = useRouter()
const route = useRoute()

const addStep = (id) => {
    activeStep.value = id;
    router.push({name: `step${activeStep.value}`, params:{type: store.typeDownload}})    
}
provide('stepChange', { activeStep, addStep })

watch(
    () =>  route.name, 
  (newPath) => {   
    const currentStep = newPath.slice(-1)  
    activeStep.value = currentStep;
},
{ immediate: true }
)
</script>

<template>
  <div class="download section__content">
    <div class="download__top">
      <StepsList ></StepsList>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.download {
  padding: 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  flex: 1;
  transition: flex 0.3s ease-in-out;
  overflow: hidden;
}

.download__top {
  padding: 15px 0;
  width: 100%;
}
</style>
