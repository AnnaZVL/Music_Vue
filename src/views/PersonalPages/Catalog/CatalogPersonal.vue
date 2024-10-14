<script setup>
import ListCatalog from './components/ListCatalog.vue'
import SelectBase from '@/components/Layout/UI/Select/SelectBase.vue'
import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'

import { filterOptions, listCatalog } from '@/constants/catalogPage'
</script>

<template>
  <SectionPersonal class="catalog" title="Мой каталог">
    <template #body>
      <div class="catalog__header">
        <span class="catalog__header--text">Статистика</span>

        <SelectBase
          className="catalog__filter"
          :optionsList="filterOptions"
          id="filter"
        ></SelectBase>
      </div>
      <ListCatalog :list="listCatalog"></ListCatalog>
    </template>
  </SectionPersonal>
</template>

<style scoped>
.catalog {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.catalog__header {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
}

.catalog__header > .choices {
  
  height: 50px;
}

.catalog__header--text {
  font-size: 24px;
  font-weight: 500;
}

.catalog__header + .choices {
  margin-left: auto;
  flex-basis: 40%;
  min-width: 150px;
  width: 100%;
  height: 50px;
}
</style>
