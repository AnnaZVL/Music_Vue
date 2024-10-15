<script setup>
import IconSearch from '@/components/Layout/UI/SVG/IconSearch.vue';

import { rezaltList } from '@/constants/financePage';
import { computed } from 'vue';

const rezalt = computed(() => {
    rezaltList.map(item => {
        if (item.sum < 0) {
            item.znak = true
        }
    })
    return rezaltList
})
</script>

<template>
  <div class="rezalt">
    <label class="search" for="finance-search">
      <input class="input" id="finance-search" type="text" />
      <IconSearch class="icon"/>     
    </label>
    <h4 class="rezalt__title">Все выплаты</h4>
    <div class="rezalt__table">
      <div class="table__row table__header">
        <span class="table__item">Дата</span>
        <span class="table__item">Примечание</span>
        <span class="table__item">Сумма</span>
        <span class="table__item">Баланс</span>
      </div>
      <div class="table__row" v-for="row in rezalt" :key="row.id" >
        <span class="table__item">{{ row.date }}</span>
        <span class="table__item">{{ row.descr }}</span>
        <span class="table__item table__item--count" :class="{expenditure: row.znak}">{{ row.sum }}</span>
        <span class="table__item table__item--count">{{ row.balance }}</span>
      </div>      
    </div>
  </div>
</template>

<style scoped>
.rezalt {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;    
}

.search {
    margin-left: auto;
    position: relative;    
}

.input {
    padding: 10px;
    background-color: transparent;    
    color: var(--color-white);
    outline: none;
    border: 1px solid var(--color-blue);
    font-size: 18px;
    width: 250px;
}

.icon {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    fill: var(--color-white);
}

.rezalt__title {
    font-size: 24px;
}

.rezalt__table {    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-top: 1px solid var(--color-blue);
    width: 100%;
    overflow: hidden auto;
    max-height: 200px;
}

.table__row {
    padding: 15px 10px;
    display: grid;
    grid-template-columns: 100px auto 100px 100px;
    gap: 10px;   
    width: 100%;
    border-bottom: 1px solid var(--color-blue);
}

.table__header .table__item {
    font-weight: bold;
    color: var(--color-white);
}

.table__item--count {
    padding-right: 20px;
    position: relative;
    color: var(--color-green);
    width: max-content;
}

.table__item--count:nth-child(+2n) {
    color: var(--color-white);
}

.table__item--count::before {
    content: '₽';
    position: absolute;
    right: 0px;    
}

.table__item--count.expenditure {
    color: var(--color-second);
}
</style>
