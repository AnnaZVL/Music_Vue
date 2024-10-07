<script setup>
defineProps({ list: Array, activeIndex: Number, showMenu: Boolean })

const emit = defineEmits(['activeItem'])

const handleItemClick = (index) => {
  emit('activeItem', index)
}
</script>

<template>
  <ul class="aside-menu" :class="{ visible: showMenu }">
    <li
      class="aside-menu__item"
      :class="{ 'active-route': activeIndex === item.id, disabled: item.disabled }"
      @click="handleItemClick(item.id)"
      v-for="item in list"
      :key="item.id"
    >
      <router-link class="btn aside-menu__link" :to="item.path">
        <component :is="item.icon" class="aside-menu__icon" />
        <span>{{ item.text }}</span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.aside-menu {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  transform: translateY(-100%);
  border-bottom: 1px solid rgba(83, 95, 246, 0.4);
  opacity: 0;
  visibility: hidden;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
}

.aside-menu.visible {
  transform: translateY(5%);
  opacity: 1;
  visibility: visible;
}

.aside-menu__title {
  padding: 0 0 25px 15px;
  font-size: 24px;
  color: var(--color-second);
  text-transform: uppercase;
}

.aside-menu__item {
  padding: 10px;
  position: relative;
  width: 100%;
  border-bottom: 1px solid transparent;
  transition: border 0.5s ease-in-out;
}

.aside-menu__item::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: var(--color-second);
  background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(242, 144, 105, 0.5) 150%);
  opacity: 0;
  visibility: hidden;
}

.aside-menu__item.active-route {
  border-color: var(--color-second);
}

.aside-menu__item.active-route::after {
  opacity: 1;
  visibility: visible;
}

.aside-menu__item.disabled {
  filter: brightness(50%);
  cursor: not-allowed;
}

.aside-menu__item.disabled a {
  cursor: not-allowed;
}

.aside-menu__link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  color: var(--color-white);
  text-transform: uppercase;
}

.aside-menu__icon {
  width: 40px;
  height: 40px; 
  fill: var(--color-white);
  transition: fill 0.3s ease-in-out;
}
</style>
