<script setup>
defineProps({title: String, cash: Number, count: Number, descr: String, isBtn: Boolean})
</script>

<template>
  <div class="card">
    <div class="box">
      <span class="title">{{ title }}</span>
      <span class="count" v-if="count">{{ count }}</span>
      <span class="cash" v-else>{{ cash }}</span>
      <span class="descr">{{ descr }}</span>
    </div>
    <div class="buttons" v-if="isBtn">
      <button class="finance__btn btn finance__btn--red">Вывод средств</button>
      <button class="finance__btn btn finance__btn--green">Пополнить баланс</button>
    </div>
  </div>
</template>

<style scoped>
.card {
    padding: 10px;     
    display: flex;
    align-items: flex-start;   
    justify-content: space-between;  
    gap: 20px;
    background-color: rgba(var(--color-blue-r), 0.2);
    border-radius: 10px;    
}

.box {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.title {
    font-size: 24px;
    font-weight: 500;
}

.count, .cash {
    padding-right: 30px;
    position: relative;
    font-size: 32px;
    font-weight: 700;
    width: max-content;
}

.cash::before {
    content: '₽';
    position: absolute;
    right: 0px;    
}

.descr {
    color: var(--color-blue);
    font-size: 12px;
}

.buttons {
    display: flex;    
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;   
    height: 100%; 
}

.finance__btn {
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 10px;     
    font-size: 13px;
    width: 200px;
    outline: none;
    transition: color 0.3s ease-in-out, border 0.3s ease-in-out;
}

.finance__btn:hover {
    color: var(--color-white);
    border-color: var(--color-blue);
}

.finance__btn--red {
    border-color: var(--color-second);
    color: var(--color-second);
}

.finance__btn--green {
    border-color: var(--color-green);
    color: var(--color-green);
}

</style>
