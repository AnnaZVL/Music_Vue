<script setup>
import { ref } from 'vue';

defineProps({menu: Array})
const emits = defineEmits(['toggle-menu'])
const isActive = ref(0)

const toggleActivItem = (id) => {
    isActive.value = id
  emits('toggle-menu', isActive.value)
}
</script>

<template>
  <ul class="menu">
    <li
      class="item"
      v-for="(item, index) in menu"
      :key="index"
      :class="{ active: isActive === index }"
      @click="toggleActivItem(index)"
    >
      {{ item.title || item }}
    </li>
  </ul>
</template>

<style scoped>
.menu {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
}

.item {
  padding: 5px;
  position: relative;
  font-size: 18px;
  cursor: pointer;
}

.item::after {
  content: '';
  width: 0%;
  height: 1px;
  position: absolute;
  bottom: 0px;
  left: 0;
  background-color: var(--color-second);
  transition: width 0.3s ease-in-out;
}

.item:hover:after {
  width: 100%;
}

.item.active {
  color: var(--color-second);
}

.item.active:after {
  width: 100%;
}
</style>
