<script setup>
import { questionsList } from '@/constants/downloads.js'
</script>

<template>
    <div class="questions">
        <div class="questions__item" v-for="(item, index) in questionsList" :key="index" >
            <h5 class="questions__title">{{ item.title }}</h5>
            <p class="dquestions__descr">{{ item.text }}</p>
        </div>        
    </div>
</template>

<style  scoped>
.questions {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 80%;
    gap: 60px;
    border-radius: 20px;
    border: 1px solid rgba(83, 95, 246, 0.4);
}

.questions__title {
    font-size: 28px;
    margin-bottom: 25px;
}
</style>