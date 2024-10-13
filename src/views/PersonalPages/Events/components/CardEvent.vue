<script setup>
import IconTextButton from '@/components/Layout/UI/Buttons/IconTextButton.vue'
import IconButton from '@/components/Layout/UI/Buttons/IconButton.vue'
import IconComment from '@/components/Layout/UI/SVG/IconComment.vue'
import IconLike from '@/components/Layout/UI/SVG/IconLike.vue'
import IconLink from '@/components/Layout/UI/SVG/IconLink.vue'
import IconPrize from '@/components/Layout/UI/SVG/IconPrize.vue'
import IconRegister from '@/components/Layout/UI/SVG/IconRegister.vue'

defineProps({
  event: Object,
  isRegistered: {
    type: Boolean,
    default: true
  }
})

const getImagePath = (imagePath) => {
  return new URL(imagePath, import.meta.url).href;
}
</script>

<template>
  <div class="event-card">
    <IconTextButton v-if="isRegistered">
      <template #icon><IconRegister /></template>
      <template #text>Регистрация</template>
    </IconTextButton>

    <a class="event-card__link" href="#">
      <img :src="getImagePath(event.path)" alt="" class="event-card__img" />
    </a>
    <div class="event-card__body">
      <div class="event-card__top">
        <h4 class="event-card__title">{{ event.name }}</h4>
        <p class="event-card__descr">
          {{ event.descr }}
        </p>
      </div>
      <div class="event-card__bottom">
        <slot name="winner" />
        <div class="event-card__ations">
          <div class="event-card__price">
            <IconPrize class="event-card__prize"></IconPrize>
            <span>{{ event.prize }}</span>
          </div>
          <div class="event-card__icons">
            <IconButton :isLike="event.like">
              <template #icon>
                <IconLike class="event-card__icon--like" />
              </template>
            </IconButton>

            <IconButton>
              <template #icon>
                <IconComment />
              </template>
            </IconButton>

            <IconButton>
              <template #icon>
                <IconLink class="event-card__icon--link" />
              </template>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  position: relative;
  border-radius: 20px;
  background: radial-gradient(circle at bottom, var(--color-blue) -13%, var(--color-bg) 80%);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.event-card__link {
  display: block;
  width: 100%;
  max-height: 400px;
}

.event-card__img {
  border-radius: 20px 20px 0 0;
  height: 100%;
}

.event-card__body {
  padding: 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  height: 100%;
  width: 100%;
}

.event-card__top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  width: 100%;
  height: 100%;
}

.event-card__bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
}

.event-card__title {
  font-size: 24px;
  color: var(--color-white);
}

.event-card__title::first-letter {
  text-transform: uppercase;
}

.event-card__ations {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.event-card__prize {
  width: 20px;
  height: 20px;
  fill: var(--color-second);
}

.event-card__price {
  padding: 10px 35px 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  color: var(--color-white);
  position: relative;
  border-radius: 10px;
  border: 1px solid var(--color-second);
}

.event-card__price::after {
  content: '₽';
  position: absolute;
  right: 10px;
}

.event-card__icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

@media (max-width: 768px) {
  .event-card__link {
        min-height: 300px;
    }
}

@media (max-width: 562px) {
.event-card__price {
        font-size: 16px;
    }
  }
</style>
