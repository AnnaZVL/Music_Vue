<script setup>
defineProps(['title'])
</script>

<template>
  <div class="step__section">
    <h2 class="step__section--title">{{ title }}</h2>
    <div class="step__section--box">
      <slot></slot>
    </div>    
  </div>
</template>

<style scoped>
.step__section {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;    
}

.step__section--title {
    font-weight: bold;
    font-size: 36px;
}

.step__section--box {
    display: flex;
    flex-direction: column;
    gap: 40px;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
</style>
