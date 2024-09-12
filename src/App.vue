<script setup>
import BubbleBase from './views/HomePage/components/BubbleBase.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="wrapper" id="wrapper">
    <BubbleBase v-if="route.path === '/'"/>
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
