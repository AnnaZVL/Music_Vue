<script setup></script>

<template>
  <button class="btn event-card__reg">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </button>
</template>

<style>
.event-card__reg {
  padding: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  border-radius: 10px;
  box-shadow:
    0 0 5px var(--color-blue),
    0 0 40px var(--color-blue),
    0 0 10px var(--color-blue);
  background-color: var(--color-blue);
  color: var(--color-white);
  transition: box-shadow 0.3s ease-in-out;
}

.event-card__reg > svg {
  width: 25px;
  height: 25px;
  fill: var(--color-white);
}

.event-card__reg:hover {
  box-shadow:
    0 0 10px var(--color-blue),
    0 0 40px var(--color-blue),
    0 0 15px var(--color-blue);
}
</style>
