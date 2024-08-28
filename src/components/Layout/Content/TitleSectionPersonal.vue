<script setup></script>

<template>
  <h2 class="personal-section__title">
    <slot />
  </h2>
</template>

<style scoped>
.personal-section__title {
  margin-bottom: 40px;
  font-size: 42px;
  text-transform: uppercase;
  color: var(--color-second);
}
</style>
