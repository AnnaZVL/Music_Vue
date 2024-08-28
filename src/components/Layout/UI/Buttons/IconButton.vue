<script setup>
import { ref } from 'vue'
const props = defineProps(['isLike'])
const isActive = ref(props.isLike)
</script>

<template>
  <button class="btn event-card__btn" :class="{ like: isActive }" @click="isActive = !isActive">
    <slot name="icon"></slot>
  </button>
</template>

<style>
.event-card__btn {
  transition: transform 0.3s ease-in-out;
}

.event-card__btn:hover {
  transform: scale(1.1);
}

.event-card__btn svg {
  width: 30px;
  height: 30px;
  fill: var(--color-gray);
}

.event-card__btn.like > .event-card__icon--like {
  fill: var(--color-second);
}
</style>
