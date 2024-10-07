<script setup>
import StepsList from './components/StepsList.vue'
import StepOne from './components/StepOne.vue'
import StepTwo from './components/StepTwo.vue'
import StepThree from './components/StepThree.vue'
import StepFour from './components/StepFour.vue'
import StepFive from './components/StepFive.vue'
import StepPayment from './components/StepSix.vue'

import { computed } from 'vue'
import { useStateStore } from '@/stores/stateStore'

const stateStore = useStateStore()

const stepsComponents = [
  { step: 1, component: StepOne },
  { step: 2, component: StepTwo },
  { step: 3, component: StepThree },
  { step: 4, component: StepFour },
  { step: 5, component: StepFive },
  { step: 6, component: StepPayment }
]

const step = computed(() => {
  const currentComponent = stepsComponents.find((s) => s.step === stateStore.currentStep)
  return currentComponent ? currentComponent.component : null
})

// Изменение шага
const changeStep = (newStep) => {
  if (newStep <= stateStore.currentStep || newStep === stateStore.currentStep) {
    stateStore.changeStep(newStep);
  }
}
</script>

<template>
  <div class="download section__content">
    <div class="download__top">
      <StepsList @change-step="changeStep"></StepsList>
    </div>
    <component :is="step"></component>
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
