<script setup>
import IconTG from '@/components/Layout/UI/SVG/IconTG.vue'
import IconComment from '@/components/Layout/UI/SVG/IconComment.vue'
import IconStarEmpty from '@/components/Layout/UI/SVG/IconStarEmpty.vue'

import { getImagePath } from '@/helpers/imgPath'
import { ref } from 'vue'

const isActive = ref(false)

defineProps({
  title: String,
  descr: String,
  img: String,
  link: String
})

const changaActive = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <div class="education-card">
    <a class="education-card__link" :href="link" target="_blank">
      <img :src="getImagePath(img)" alt="" class="education-card__img" />
    </a>
    <div class="education-card__body">
      <h4 class="education-card__title">{{ title }}</h4>
      <p class="education-card__descr">
        {{ descr }}
      </p>

      <div class="education-card__actions">
        <a class="education-card__show" :href="link" target="_blank"> Смотреть </a>
        <div class="education-card__icons">
          <button class="btn education-card__btn">
            <IconTG class="education-card__icon education-card__icon--link" />
          </button>
          <button class="btn education-card__btn">
            <IconComment class="education-card__icon education-card__icon--link" />
          </button>
          <button
            class="btn education-card__btn"
            :class="{ active: isActive }"
            @click="changaActive"
          >
            <IconStarEmpty class="education-card__icon education-card__icon--link" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  position: relative;
  border-radius: 20px;
  background: radial-gradient(circle at bottom, var(--color-blue) -13%, var(--color-bg) 80%);
  height: 100%;
}

.education-card__link {
  display: block;
  width: 100%;
  max-height: 300px;
}

.education-card__img {
  height: 100%;
  border-radius: 20px 20px 0 0;
}

.education-card__body {
  padding: 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  height: 100%;
}

.education-card__title {
  font-size: 24px;
  color: var(--color-white);
}

.education-card__title::first-letter {
  text-transform: uppercase;
}

.education-card__actions {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.education-card__show {
  padding: 10px;
  border: 1px solid var(--color-blue);
  color: var(--color-white);
  border-radius: 10px;
  font-size: 13px;
  outline: none;
  transition:
    color 0.3s ease-in-out,
    border 0.3s ease-in-out;
}

.education-card__show:hover {
  color: var(--color-second);
  border-color: var(--color-second);
}

.education-card__icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.education-card__btn {
  transition: transform 0.3s ease-in-out;
}

.education-card__btn:hover {
  transform: scale(1.1);
}

.education-card__icon {
  width: 30px;
  height: 30px;
  fill: var(--color-white);
}

.education-card__btn.active > svg {
  fill: var(--color-second);
}
</style>
