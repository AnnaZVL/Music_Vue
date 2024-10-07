<script setup>
import { additionallyLiast } from '@/constants/downloads'

const getImagePath = (imagePath) => {
  return new URL(imagePath, import.meta.url).href;
}
</script>

<template>
  <div class="additionally step__section--single step__section--box">
    <div class="additionally__card" v-for="item in additionallyLiast" :key="item.id">
      <img class="additionally__card--img" :src="getImagePath(item.path)" alt="" />
      <div class="additionally__card--body">
        <span class="additionally__card--price">{{ item.price }}</span>
        <span class="additionally__card--text">{{ item.descr }}</span>
      </div>
      <button class="btn additionally__card--btn">Добавить</button>
    </div>
  </div>
</template>

<style scoped>
.additionally {
  margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    
}
.additionally__card {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-radius: 20px;
    border: 2px solid transparent;
    background-color: var(--color-blue-r);
    transition: border 0.3s ease-in-out;
    height: 100%;
    min-height: 500px;
}

.additionally__card:hover {
    border-color: var(--color-second);
}

.additionally__card--img {
    height: 250px;
    border-radius: 20px;
}

.additionally__card--body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
}

.additionally__card--price {
    padding-right: 40px;
    position: relative;
    display: inline-block;
    font-size: 28px;
}

.additionally__card--price::after {
    content: '₽';    
    position: absolute;
    right: 10px;        
}

.additionally__card--text {
    font-size: 18px;
    text-align: center;
}

.additionally__card--btn {
    margin-top: auto;
    padding: 15px;
    border: 1px solid var(--color-blue);
    border-radius: 10px; 
    width: 80%;
    font-size: 18px;
    color: var(--color-white);
    transition: border 0.3s ease-in-out, color 0.3s ease-in-out;
}

.additionally__card--btn:hover {
    border-color: var(--color-second);
    color: var(--color-second);
}
</style>
