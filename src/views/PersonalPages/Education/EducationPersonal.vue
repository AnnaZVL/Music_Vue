<script setup>
import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'
import EducationCard from './components/EducationCard.vue'

import { educationList } from '@/constants/educationPersonal'
</script>

<template>
  <SectionPersonal class="education" title="Обучение" :isUser="true">
    <template #body>
      <div class="education__list">
        <EducationCard
          v-for="card in educationList"
          :key="card.id"
          :title="card.title"
          :descr="card.descr"
          :img="card.img"
          :link="card.link"
        />
      </div>
    </template>
  </SectionPersonal>
</template>

<style scoped>
.education__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
