<script setup>
import FilterCatalog from './components/FilterCatalog.vue'
import ListCatalog from './components/ListCatalog.vue'

import { filterOptions, listCatalog } from '@/constants/catalogPage'
</script>

<template>
  <section class="catalog">
    <div class="catalog__header">
      <h5 class="catalog__title">Мой каталог</h5>
      <span class="catalog__header--text">Статистика</span>

      <FilterCatalog :filterOptions="filterOptions"></FilterCatalog>
    </div>
    <ListCatalog :list="listCatalog"></ListCatalog>
  </section>
</template>

<style>
.catalog {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}

.catalog__header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
}

.catalog__header > .choices {
  height: 50px;
}

.catalog__title {
  font-size: 28px;
  flex-shrink: 1;
  flex-basis: 40%;
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
