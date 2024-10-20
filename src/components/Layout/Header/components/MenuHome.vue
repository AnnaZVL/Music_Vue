<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

const toggleMenu = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <button class="header__burger btn burger" :class="{ open: isVisible }" @click="toggleMenu">
    <span class="burger__line"></span>
    <span class="burger__line"></span>
    <span class="burger__line"></span>
  </button>
  <transition name="menu">
    <nav class="header__nav" v-if="isVisible" :class="{ open: isVisible }">
      <ul class="header__menu menu">
        <li class="menu__item">
          <a href="#" class="menu__link">Дистрибуция </a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Продвижение </a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Кейсы </a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Отзывы </a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Блог </a>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<style scoped>
.menu-enter-active {
  transition: all 0.3s ease-out;
}

.menu-leave-active {
  transition: all 0.5s ease-out;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateY(-50%) scale(0.8);;
  opacity: 0;
}

.burger {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 35px;
  height: 30px;
}

.burger__line {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--color-white);
  opacity: 0.5;
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.burger__line:nth-child(2) {
  width: 80%;
}

.burger.open .burger__line:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
  opacity: 1;
}

.burger.open .burger__line:nth-child(2) {
  display: none;
}

.burger.open .burger__line:nth-child(3) {
  transform: translateY(-17px) rotate(-45deg);
  opacity: 1;
}

.menu {
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 15px;
}

.menu__link {
  padding: 15px;
  position: relative;
  text-transform: uppercase;
  color: var(--color-white);
  border-bottom: 1px solid transparent;
  transition: border 0.5s ease-in-out;
}

.menu__link::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  background: rgb(242, 144, 105);
  background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(242, 144, 105, 0.5) 150%);
}

.menu__link:hover {
  border-color: var(--color-second);
}

.menu__link:hover::after {
  opacity: 1;
  visibility: visible;
}


@media (max-width: 1024px) {
  .header__nav {
    padding-top: 50px;
    position: absolute;
    inset: 0;
    z-index: 1000;
    background-color: var(--color-bg);
    height: 100vh;
  }

  .menu {
    flex-direction: column;
    gap: 25px;
  }

  .menu__item {
    width: 100%;
    text-align: center;
  }

  .munu__link {
    display: block;
    width: 100%;
  }
}
</style>
