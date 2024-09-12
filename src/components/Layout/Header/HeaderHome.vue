<script setup>
import NeoButtons from '@/components/Layout/UI/Buttons/NeoButtons.vue'
import BaseLogo from '@/components/Layout/UI/SVG/BaseLogo.vue'
import MenuHome from './components/MenuHome.vue';
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__left">
        <router-link class="header__logo logo" to="/">
        <BaseLogo class="logo__icon" />
      </router-link>
        <MenuHome/>
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.header__logo {
  cursor: pointer;
  width: 100px;
  height: 80px;
}

.logo__icon {
  fill: var(--color-blue);
  -webkit-transition: fill 0.3s ease-in-out;
  -o-transition: fill 0.3s ease-in-out;
  transition: fill 0.3s ease-in-out;
}

.header__logo:hover > .logo__icon {
  fill: #727bf6;
}

.header__left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  gap: 15px;
}

.header__right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  gap: 15px;
  position: relative;
}
</style>
