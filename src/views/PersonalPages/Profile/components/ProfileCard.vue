<script setup>
defineProps({ title: String, text: String, icon: Object, type: String,  isDisabled: Boolean})
</script>

<template>
  <div class="profile-card">
    <div class="profile-card__img">
      <div class="profile-card__icon" :class="[type, { 'disabled': isDisabled }]">
       <component :is="icon"/>
      </div>
    </div>
    <div class="profile-card__content">
      <span class="profile-card__title">{{ title }}</span>
      <span class="profile-card__text">{{ text }}</span>
    </div>
  </div>                           
</template>

<style scoped>
.profile-card {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(var(--color-blue-r), 0.2);
  border-radius: 10px;  
}

.profile-card__img {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.profile-card__icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.profile-card__icon svg {
  position: relative;
  z-index: 100;
  width: 30px;
  height: 30px;
  fill: var(--color-white);
}

.hexagon {
  margin: 20px 0;
  width: 80px;
  height: 45px;
  background: var(--color-second);
}

.hexagon:before,
.hexagon:after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
}

.hexagon:before {
  top: -20px;
  border-bottom: 20px solid var(--color-second);
}

.hexagon:after {
  bottom: -20px;
  border-top: 20px solid var(--color-second);
}

.hexagon.disabled {
  background-color: var(--color-gray);
}

.hexagon.disabled:before {
  border-bottom-color: var(--color-gray);
}

.hexagon.disabled:after {
  border-top-color: var(--color-gray);
}

.circle::before {
  content: '';
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-white);
  border-radius: 100%;
  background-color: var(--color-blue);
}

.square::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-white);
  background-color: rgba(var(--color-blue-r), 0.2);
}

.circle.disabled::before,
.square.disabled::before {
  background-color: var(--color-gray);
  border-color: transparent;
}

.profile-card__content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
}

.profile-card__title {
  font-weight: 500;
  font-size: 24px;
}


</style>
