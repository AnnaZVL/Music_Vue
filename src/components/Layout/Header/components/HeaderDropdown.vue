<script setup>
import NeoButtons from '@/components/Layout/UI/Buttons/NeoButtons.vue'

import { ref } from 'vue'
import { menu } from '@/constants/headerPersonal'

const showDrop = ref(false)
const dropdown = ref(null)

const toggleDropdown = () => {
  showDrop.value = !showDrop.value
  if (showDrop.value) {
    document.addEventListener('click', handleDocumentClick)
  } else {
    document.removeEventListener('click', handleDocumentClick)
  }
}

const handleDocumentClick = (event) => {  
  if (!dropdown.value.contains(event.target)) {
    toggleDropdown()
  }
}
</script>

<template >
  <div ref="dropdown">
    <NeoButtons id="download" text="Загрузить" @click="toggleDropdown"></NeoButtons>
    <transition>
      <ul class="drop__list" v-if="showDrop">        
        <li
          class="drop__item"
          v-for="(item, index) in menu"
          :key="index"
          @click.stop="toggleDropdown"
          :class="{ disabled: item.disabled }"
        >
        <router-link :to="item.path">
          <component :is="item.icon" class="drop__icon" />
          <span class="drop__text">{{ item.text }}</span>
        </router-link>
        </li>
      </ul>
    </transition>
  </div>
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
  min-height: 100px;
  background-color: var(--color-drop);
  border-radius: 20px;
  transition:
    transform 0.3s ease-in-out,
    visibility 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

.drop__item a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}

.drop__item.disabled a {
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
