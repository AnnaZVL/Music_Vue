<script setup>
import { ref } from 'vue'
import AsideList from './AsideList.vue'

const props = defineProps({ list: Array, title: String, isStatic: Boolean })
const showMenu = ref(props.isStatic)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div class="aside__box" :class="{ small: !showMenu }">
    <h4 class="aside-menu__title">{{ title }}</h4>
    <button
      class="btn box__close"
      :class="{ show: showMenu }"
      title="Свернуть подменю"
      @click="toggleMenu"
      v-if="!isStatic"
    ></button>

    <AsideList :list="list" :class="{ visible: showMenu }"></AsideList>
  </div>
</template>

<style scoped>
.aside__box {
  position: relative;
  width: 100%;
  height: 100%;
  transition: height 0.2s ease-in-out;
}

.aside__box.small {
  height: 60px;
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

.box__close.show {
  transform: rotate(-45deg);
}

.aside-menu__title {
  padding: 0 0 25px 15px;
  font-size: 24px;
  color: var(--color-second);
  text-transform: uppercase;
}

@media (max-width: 992px) {
  .box__close,
  .aside-menu__title {
    display: none;
  }

  .aside__box.small {
  height: auto;
}
}

@media (max-width: 562px) {
  .aside__box {
    width: auto;
  }
}
</style>
