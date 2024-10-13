<script setup>
defineProps({count: Number, text: String})
</script>

<template>
  <li class="profile__info--item">
    <span class="profile__info--count">{{  count }}</span>
    <span class="profile__info--text">{{  text }}</span>
  </li>
</template>

<style scoped>
.profile__info--item {
    display: flex;
    align-items: center;    
    gap: 7px;
}

.profile__info--count {
    font-weight: bold;
}
</style>
