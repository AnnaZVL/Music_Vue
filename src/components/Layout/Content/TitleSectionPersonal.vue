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

@media (max-width: 768px) {
  .personal-section__title {
        font-size: 32px;
    }
}

@media (max-width: 562px) {
  .personal-section__title {
    margin-bottom: 15px;
  }
  
  .personal-section__title span {
        display: none;
    }
}
</style>
