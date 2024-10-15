<script setup>
import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'
import SelectBase from '@/components/Layout/UI/Select/SelectBase.vue'

import { searchOptions } from '@/constants/multilinkPeronal'
import MultilinkCard from './components/MultilinkCard.vue'

import { trackList } from '@/constants/multilinkPeronal'
</script>

<template>
  <SectionPersonal class="multilink" title="Мультиссылки" :isUser="true">
    <template #body>
      <SelectBase
        className="multilink__filter"
        :optionsList="searchOptions"
        id="multilink-filter"
      />
      <div class="multilink__list">
        <div class="multilink__list--header">
          <span class="multilink__list--title">Трек</span>
          <div class="multilink__list--box">
            <span class="multilink__list--title">Просмотры</span>
            <span class="multilink__list--title">Переходы</span>
            <span class="multilink__list--title">Действия</span>
          </div>
        </div>
        <div class="multilink__cards">
          <MultilinkCard v-for="item in trackList" :key="item.id" :item="item" />
        </div>
      </div>
    </template>
  </SectionPersonal>
</template>

<style>
.multilink .choices {
  max-width: 300px;
}

.multilink__list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-height: 700px;
}

.multilink__list--header {
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.multilink__list--box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: nowrap;
  flex-basis: 50%;
}

.multilink__list--title {
  font-size: 18px;
  font-weight: 500;
}

.multilink__cards {
    display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
    overflow-y: auto;
}

@media (max-width: 768px) {
    .multilink__list--header {
        display: none;
    }
}
</style>
