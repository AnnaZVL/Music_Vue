<script setup>
import FormLogin from './components/FormLogin.vue'
import FormSign from './components/FormSign.vue'

import { ref } from 'vue'

const isFront = ref(true)
</script>

<template>
  <div class="modal__top">
    <button class="btn modal__btn" :class="{ active: isFront }" @click="isFront = true">
      Вход
    </button>
    <button class="btn modal__btn" :class="{ active: !isFront }" @click="isFront = false">
      Регистрация
    </button>
  </div>
  <div class="modal__wrap">
    <div class="modal__inner" :class="{ active: !isFront }">
      <div class="card-front">
        <div class="center-wrap">
          <FormSign></FormSign>
        </div>
      </div>

      <div class="card-back">
        <div class="center-wrap">
          <FormLogin></FormLogin>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal__top {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal__btn {
  padding: 15px 20px;
  color: var(--color-white);
  border-bottom: 4px solid transparent;
  font-size: 32px;
  transition: color 0.3s ease-in-out;
}

.modal__btn.active {
  color: var(--color-second);
  border-color: var(--color-second);
}

.modal__wrap {
  position: relative;
  max-width: 100%;
  height: 500px;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}

.modal__inner {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-out;
}

.card-front,
.card-back {
  padding: 10px;
  height: 100%;
  background-color: #2a2b38;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  right: 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}

.modal__inner.active {
  transform: rotateY(180deg);
}

.center-wrap {
  position: absolute;
  top: 10px;
  left: 25px;
  right: 75px;
  z-index: 20;
  display: block;
}

.form {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.form__btn {
  margin-top: 10px;
  padding: 10px 15px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  color: var(--color-white);
  border: 1px solid var(--color-white);
  background: transparent;
  transition:
    border 0.3s ease-in-out,
    color 0.3s ease-in-out,
    background 0.3s ease-in-out;
}

.form__btn:hover {
  border-color: transparent;
  background-color: var(--color-white);
  color: var(--color-bg);
}

.form__btn:disabled {
  filter: brightness(50%);
  cursor: not-allowed;
}
</style>
