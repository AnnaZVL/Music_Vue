<script setup>
import StepsList from './components/StepsList.vue'
import StepOne from './components/StepOne.vue';
import StepTwo from './components/StepTwo.vue';
import StepThree from '@/views/Downloads/components/StepThree.vue'
import StepFour from '@/views/Downloads/components/StepFour.vue'
import StepFive from '@/views/Downloads/components/StepFive.vue'
import StepPayment from '@/views/Downloads/components/StepSix.vue'

import { computed } from 'vue';
import { useStateStore } from '@/stores/stateStore';

const stateStore = useStateStore();

const stepsComponents = [
  {step: 1, component: StepOne},
  {step: 2, component: StepTwo},
  {step: 3, component: StepThree},
  {step: 4, component: StepFour},
  {step: 5, component: StepFive},
  {step: 6, component: StepPayment},
]

const steps = computed(() => {
  const currentComponent = stepsComponents.find(step => step.step === stateStore.currentStep)
  
  return currentComponent.component
})
</script>

<template>
  <div class="download section__content">
    <div class="download__top">
      <StepsList ></StepsList>
    </div>
    <component :is="steps"></component>
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
