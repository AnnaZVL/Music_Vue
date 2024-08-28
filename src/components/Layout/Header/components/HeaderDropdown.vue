<script setup>
import NeoButtons from '@/components/Layout/UI/Buttons/NeoButtons.vue'

import { ref } from 'vue'
import { menu } from '@/constants/headerPersonal'

const showDrop = ref(false)
const toggleDropdown = () => {
  showDrop.value = !showDrop.value
}

const closeDropdown = () => {
  showDrop.value = false
}
</script>

<template ref="dropdown">
  <NeoButtons id="download" text="Загрузить" @click="toggleDropdown"></NeoButtons>
  <transition>
    <ul class="drop__list" v-if="showDrop">
      <li
        class="drop__item"
        v-for="(item, index) in menu"
        :key="index"
        @click.stop="closeDropdown"
        :class="{ disabled: item.disabled }"
      >
        <component :is="item.icon" class="drop__icon" />
        <span class="drop__text">{{ item.text }}</span>
      </li>
    </ul>
  </transition>
</template>

<style scoped>
.drop__list {
  padding: 25px;
  position: absolute;
  bottom: -120px;
  right: 100px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  min-width: 200px;
  width: max-content;
  min-height: 150px;
  background-color: rgba(var(--color-blue-r), 0.2);
  border-radius: 20px;
  transition:
    transform 0.3s ease-in-out,
    visibility 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

.drop__item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}

.drop__item.disabled {
  filter: brightness(50%);
  cursor: not-allowed;
}

.drop__icon {
  width: 20px;
  height: 20px;
  fill: var(--color-white);
  transition: fill 0.3s ease-in-out;
}

.drop__text {
  color: var(--color-white);
  transition: color 0.3s ease-in-out;
}

.drop__item:hover:not(:disabled) > .drop__text {
  color: var(--color-second);
}

.drop__item:hover:not(:disabled) > .drop__icon {
  fill: var(--color-second);
}
</style>
