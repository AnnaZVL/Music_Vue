<script setup>
import { useRoute } from 'vue-router'

defineProps({ list: Array })

const route = useRoute()
</script>

<template>
  <ul class="aside-menu" >
    <li
      class="aside-menu__item"
      :class="{ 'active-route': route.name === item.path.name, disabled: item.disabled }"
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
  width: 30px;
  height: 30px; 
  fill: var(--color-white);
  transition: fill 0.3s ease-in-out;
}

@media (max-width: 992px) {
  .aside-menu {
        padding-bottom: 10px;
        flex-direction: row;
        opacity: 1;
        visibility: visible;
        transform: translateY(0%);
        border-bottom: none;
        gap: 15px;
    }

    .aside-menu.visible {
        transform: translateX(0);
    } 

    .aside-menu__item {
        width: max-content;
    }

    .aside-menu__icon {
        width: 25px;
        height: 25px;
    }
}

@media (max-width: 768px) {
  .aside-menu__link {
        flex-direction: column;
        font-size: 12px;
    }
}

@media (max-width: 562px) {
  .aside-menu__link span {
        display: none;
    }

    
}
</style>
