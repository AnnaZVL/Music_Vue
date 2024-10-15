<script setup>
import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'
import FinancaTrans from './components/FinancaTrans.vue'
import FinanceReport from './components/FinanceReport.vue'
import SectionMenu from '@/components/Layout/Content/SectionMenu.vue'

import { menu } from '@/constants/financePage'
import { ref, computed } from 'vue'

const sectionList = [FinancaTrans, FinanceReport]
const isActive = ref(0)
const currentSection = ref(0)

const section = computed(() => {
  return sectionList.find((item, index) => currentSection.value === index)
})

const changaActive = (id) => {
  isActive.value = id
  currentSection.value = id  
}
</script>

<template>
  <SectionPersonal class="finance" title="Финансы" :isUser="true">
    <template #body>
      <div class="finance__wrapper">

        <SectionMenu :menu="menu" @toggle-menu="changaActive"/>
        
        <div class="finance__inner">
          <component :is="section"></component>
        </div>
      </div>
    </template>
  </SectionPersonal>
</template>

<style scoped>
.finance {
  border-color: transparent;
}

.finance__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.finance .menu {
  justify-content: flex-start;
  gap: 30px;
}
</style>
