<script setup>
import UserInfo from '@/components/Layout/Header/UserInfo/UserInfo.vue'

defineProps({
  title: String,
  isUser: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="top">
    <h2 class="personal-section__title">{{ title }}</h2>
    <UserInfo v-if="isUser" />
  </div>
</template>

<style scoped>
.top {
  margin-bottom: 40px;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.personal-section__title {
  font-size: 42px;
  text-transform: uppercase;
  color: var(--color-second);
}

@media (max-width: 768px) {
  .top {
    flex-direction: column;
  }

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
