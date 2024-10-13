<script setup>
defineProps(['winner'])
</script>

<template>
  <div class="winner">
    <p class="winner__title">Победитель</p>
    <div class="winner__wrapper">
      <img class="winner__img" :src="winner.path" alt="" />
      <div class="winner__content">
        <span class="winner__name">{{ winner.name }}</span>
        <span class="winner__track">{{ winner.single }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.winner {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
}

.winner__title {
  font-size: 24px;
  color: var(--color-white);
}

.winner__wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 15px;
  overflow: hidden;
}

.winner__img {
  width: 100px;
  height: 100px;
  grid-row: 1 / 2;
  border-radius: 50%;
  border: 4px solid var(--color-second);
}

.winner__content {
  display: grid;
  gap: 10px;
}

.winner__name {
  font-size: 22px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .winner__wrapper {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 562px) {
  .winner-card__img {
    width: 60px;
    height: 60px;
  }
}
</style>
