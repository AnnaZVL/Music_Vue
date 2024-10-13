<script setup>
import { profileMenu } from '@/constants/profilePage'
import { ref } from 'vue'

const isActive = ref(0)

const toggleActivItem = (id) => {
  isActive.value = id;  
}
</script>

<template>
  <ul class="profile__menu">
    <li
      class="profile__item"
      v-for="item in profileMenu"
      :key="item.id"
      :class="{ active: isActive === item.id }"
      @click="toggleActivItem(item.id)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<style scoped>
.profile__menu {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
}

.profile__item {
  padding: 5px;
  position: relative;
  font-size: 18px;
  cursor: pointer;
}

.profile__item::after {
  content: '';
  width: 0%;
  height: 1px;
  position: absolute;
  bottom: 0px;
  left: 0;
  background-color: var(--color-second);
  transition: width 0.3s ease-in-out;
}

.profile__item:hover:after {
  width: 100%;
}

.profile__item.active {
  color: var(--color-second);
}

.profile__item.active:after {
  width: 100%;
}
</style>
