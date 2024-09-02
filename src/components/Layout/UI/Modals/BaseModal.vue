<script setup>
import { onMounted, onUnmounted, provide } from 'vue'

const emits = defineEmits(['closeModal'])

const closeModal = () => {
  emits('closeModal')
}

provide('sign', closeModal)
onMounted(() => {
  document.body.classList.add('scroll-stop')
})

onUnmounted(() => {
  document.body.classList.remove('scroll-stop')
})
</script>

<template>
  <div class="modal">
    <div class="modal__wrapper" @click="closeModal"></div>
    <div class="modal__body" @click.stop>
      <button class="btn modal__close" @click="closeModal">
        <span class="modal__close--line"></span>
        <span class="modal__close--line"></span>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.modal__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
}

.modal__body {
  padding: 40px 20px;
  min-width: 30%;
  background-color: var(--color-bg);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.modal__close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
}

.modal__close:hover {
  transform: rotate(90deg);
}

.modal__close--line {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-white);
}

.modal__close--line:first-child {
  transform: translate(2px, 1px) rotate(45deg);
}

.modal__close--line:last-child {
  transform: translate(2px, -1px) rotate(-45deg);
}
</style>

