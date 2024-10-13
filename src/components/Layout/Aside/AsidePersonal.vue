<script setup>
import AsideBox from './components/AsideBox.vue'

import { topMenu, destribMenu, marketplaseMenu } from '@/constants/asideBase'

defineProps(['showAside'])
</script>

<template>
  <aside class="aside" :class="{ hidden: !showAside }">
    <div class="aside__inner">
      <AsideBox :list="topMenu" :isStatic="true"></AsideBox>
      <AsideBox :list="destribMenu" title="Дистрибуция"></AsideBox>
      <AsideBox :list="marketplaseMenu" title="Маркетплейс"></AsideBox>
    </div>
  </aside>
</template>

<style scoped>
.aside {
  padding: 40px 15px;
  flex-shrink: 0;
  width: 280px;
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

@media (max-width: 992px) {
  .aside {
    padding: 10px;
    width: 100%;
    border-right: none;        
    max-width: 100%;
  }
  
  .aside__inner {
    flex-direction: row;
    gap: 15px;
    overflow-x: scroll;
  }

  .aside__inner::-webkit-scrollbar {
    height: 8px;
  }
}

/* @media (max-width: 768px) {
  .aside {
    max-width: 730px;    
  }
} */

/* @media (max-width: 562px) {
  .aside {
    max-width: 530px;    
  }
} */
</style>
