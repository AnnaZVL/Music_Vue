<script setup>
import { ref } from 'vue'
import NeoButtons from '../UI/Buttons/NeoButtons.vue'
import BaseLogo from '../UI/SVG/BaseLogo.vue'
import HeaderDropdown from './components/HeaderDropdown.vue'
import BaseModal from '@/components/Layout/UI/Modals/BaseModal.vue'
import LoginModal from '../FormLogin/LoginModal.vue'
import UserBox from './components/UserBox.vue'

import { useUserStore } from '@/stores/userStore'

const showModalLogin = ref(false)

const userStore = useUserStore();

const openModal = () => {
  if (userStore.isAuthorized) {
    userStore.logout(); // Выход из системы
  } else {
    showModalLogin.value = !showModalLogin.value
  }
}

const closeModal = () => {
  showModalLogin.value = !showModalLogin.value
}
</script>

<template>
  <header class="header-personal">
    <div class="header-personal__container header__container container">
      <router-link class="header__logo logo" to="/">
        <BaseLogo class="logo__icon" />
      </router-link>

      <div class="header__buttons">
        <UserBox v-if="userStore.isAuthorized"/>
        <HeaderDropdown />

        <NeoButtons id="sign" :text="userStore.isAuthorized ? 'Выйти' : 'Войти'" @click="openModal" />
      </div>
        <Teleport to="#wrapper">
          <BaseModal v-if="showModalLogin" @close-modal="closeModal">
            <LoginModal></LoginModal>          
          </BaseModal>
        </Teleport>      
    </div>
  </header>
  <transition> </transition>
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

.header-personal__container {
  padding: 20px 15px;
  position: relative;
}

.header__buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
</style>
