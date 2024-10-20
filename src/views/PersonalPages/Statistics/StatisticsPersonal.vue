<script setup>
import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'
import FinanceCard from '../Finance/components/FinanceCard.vue'
import SelectBase from '@/components/Layout/UI/Select/SelectBase.vue'
import ChartStatistics from './components/ChartStatistics.vue'

import { statisticslist, filterPeriod } from '@/constants/statisticsPage'
import { filterOptions } from '@/constants/catalogPage'
import { ref } from 'vue'

const currentFilterTrack = ref(filterOptions[0])
const currentFilterPeriod = ref(filterPeriod[0])
</script>

<template>
  <SectionPersonal class="statistics" :isUser="true" title="Все релизы">
    <template #body>
      <ul class="statistics__list">
        <FinanceCard
          v-for="card in statisticslist"
          :key="card.id"
          :title="card.title"
          :count="card.count"
          :isBtn="card.isBtn"
        />
      </ul>
      <div class="statistics__filters">
        <div class="statistics__filters--left">
          <h4>{{ currentFilterTrack.name }}</h4>

          <SelectBase
            className="statistics__filter"
            :optionsList="filterOptions"
            id="filter-track"
            v-model="currentFilterTrack"
          />
        </div>
        <SelectBase
          className="statistics__filter"
          :optionsList="filterPeriod"
          id="filter-period"
          v-model="currentFilterPeriod"
        />
      </div>

      <ChartStatistics/>
    </template>
  </SectionPersonal>
</template>

<style>
.statistics__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.statistics__filters {
  padding: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
}

.statistics__filters--left {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 0 40%;
}

.statistics__filters > .choices {
  width: 250px;
  min-width: 30%;
}

@media (max-width: 562px) {
    .statistics__filters {
        flex-direction: column;
        align-items: flex-start;
    }

    .statistics__filters--left {
        width: 90%;
    }

    .statistics__filters > .choices {
        width: 90%;
    }
}
</style>
