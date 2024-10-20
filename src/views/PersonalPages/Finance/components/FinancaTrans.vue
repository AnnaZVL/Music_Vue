<script setup>
import SelectBase from '@/components/Layout/UI/Select/SelectBase.vue'
import IconCard from '@/components/Layout/UI/SVG/IconCard.vue'
import FinanceCard from './FinanceCard.vue'

import { selectOptions, cardsTrans } from '@/constants/financePage'
import { ref } from 'vue'

const currentType = ref(selectOptions[0])
defineEmits('update:modelValue', currentType.value)
</script>

<template>
  <div class="finance__payment">
    <div class="finance__payment--top">
      <p class="finance__payment--text">Способ оплаты</p>
      <SelectBase
        className="finance__filter"
        :optionsList="selectOptions"
        v-model="currentType"
        id="payment"        
      />
    </div>
    <div class="finance__payment--card">
      <IconCard />
      <span>{{ currentType.name }}</span>
    </div>
  </div>

  <ul class="finance__list">
    <FinanceCard
      v-for="card in cardsTrans"
      :key="card.id"
      :title="card.title"
      :descr="card.descr"
      :count="card.count"
      :cash="card.cash"
      :isBtn="card.isBtn"
    />
  </ul>
</template>

<style scoped>
.finance__payment {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.finance__payment--top {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.finance__payment--card {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--color-blue);
  width: 200px;
}

.finance__payment--card svg {
  fill: var(--color-white);
  width: 30px;
  height: 30px;
}

.finance__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.finance__list .card:nth-child(3) {
  grid-column: span 2;
}
</style>
