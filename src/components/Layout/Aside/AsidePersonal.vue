<script setup>
import AsideList from './components/AsideList.vue'

import { topMenu, secondMenu } from '@/constants/asideBase'

import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

defineProps(['showAside'])

const showMenu = ref(true)
const activeIndex = ref(0)
const route = useRoute()

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

// Функция для поиска индекса по текущему пути
const findActiveIndexByRoute = () => {
  const currentPath = route.path
  const asideList = [...topMenu, ...secondMenu]
  const foundIndex = asideList.findIndex((item) => item.path === currentPath)
  activeIndex.value = foundIndex !== -1 ? foundIndex : 0
}

// Следим за изменением маршрута и обновляем activeIndex
watch(route, () => {
  findActiveIndexByRoute()
})

// Обновляем activeIndex при монтировании компонента
onMounted(() => {
  findActiveIndexByRoute()
})

const setActiveItem = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <aside class="aside" :class="{ hidden: !showAside }">
    <div class="aside__inner">
      <div class="aside__box">
        <AsideList
          :list="topMenu"
          :activeIndex="activeIndex"
          @activeItem="setActiveItem"
          :showMenu="true"
        ></AsideList>
      </div>
      <div class="aside__box">
        <h4 class="aside-menu__title">Дистрибуция</h4>
        <button
          class="btn box__close"
          :class="{ visible: showMenu }"
          id="closeBox"
          title="Свернуть подменю"
          @click="toggleMenu"
        ></button>

        <AsideList
          :list="secondMenu"
          :activeIndex="activeIndex"
          @activeItem="setActiveItem"
          :showMenu="showMenu"
        ></AsideList>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.aside {
  padding: 40px 20px;
  flex-shrink: 0;
  width: 300px;
  height: 100%;
  transform: translateX(0%);
  border-right: 2px solid var(--color-blue);
  opacity: 1;
  visibility: visible;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out,
    width 0.3s ease-in-out,
    border 0.3s ease-in-out;
}

.aside.hidden {
  padding: 40px 0;
  width: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-150%);
  border-right: none;
}

.aside__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  width: 100%;
}

.aside__box {
  position: relative;
  width: 100%;
}

.box__close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  border-left: 1px solid var(--color-white);
  border-bottom: 1px solid var(--color-white);
  transform: rotate(135deg);
  transition: transform 0.3s ease-in-out;
}

.box__close.visible {
  transform: rotate(-45deg);
}
</style>
