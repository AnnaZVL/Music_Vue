<script setup>
import NeoButtons from '@/components/Layout/UI/Buttons/NeoButtons.vue'
import BaseLogo from '@/components/Layout/UI/SVG/BaseLogo.vue'
import MenuHome from './components/MenuHome.vue'
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__left">
        <router-link class="header__logo logo" to="/">
          <BaseLogo class="logo__icon" />
        </router-link>
        <MenuHome />
      </div>
      <div class="header__right">
        <router-link to="/personal">
          <NeoButtons class="header__link link" text="Личный кабинет" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 0 0;
  width: 100%;
  position: relative;
  z-index: 1;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.header__logo {
  cursor: pointer;
  width: 100px;
  height: 80px;
}

.logo__icon {
  fill: var(--color-blue);
  transition: fill 0.3s ease-in-out;
}

.header__logo:hover > .logo__icon {
  fill: #727bf6;
}

.header__left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}

.header__right {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  position: relative;
}
</style>
