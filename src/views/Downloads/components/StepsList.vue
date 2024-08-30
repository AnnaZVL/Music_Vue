<script setup>
import { stepsList } from '@/constants/downloads';

import { useStateStore } from '@/stores/stateStore';

const stateStore = useStateStore()

import { inject } from 'vue';

const {  activeStep, addStep } =  inject('stepChange')

</script>

<template>   
    
    <ul class="steps__list">
        <li class="steps__item" 
        v-for="step in stepsList" 
        :key="step.id" 
        :class="{ active: step.id <= +activeStep, disabled: !stateStore.typeDownload.length}" 
        @click="addStep(step.id)">
            <span class="steps__item--text">{{ step.name }}</span>
        </li>        
    </ul>
</template>

<style scoped>
.steps__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.steps__item {
    padding: 10px 0 15px 0;
    position: relative;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    flex: 1;
    text-align: right;
    cursor: pointer;
    transition: border 0.3s ease-in-out;
}

.steps__item::before {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 10px;
    height: 10px;
    transform: translateX(-50%);
    background-color: transparent;
    border-radius: 50%;
    transition: background 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.steps__item.disabled {
    cursor: not-allowed;
}

.steps__item--text {
    margin-right: auto;
    display: inline-block;
    color: var(--color-white);
    font-size: 18px;
    transition: color 0.3s ease-in-out;
}

.steps__item.active {
    border-bottom-color: var(--color-second);
}

.steps__item.active::before {
    background-color: var(--color-second);
    transform: translateX(0);
}

</style>