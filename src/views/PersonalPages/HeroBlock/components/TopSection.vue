<script setup>
import 'swiper/css'
import 'swiper/css/pagination'
import { register } from 'swiper/element/bundle'
import { ref, onMounted, onBeforeUnmount } from 'vue'

import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'

import { swiperList } from '@/constants/heroBase'

register()

const getImagePath = (imagePath) => {
  return new URL(imagePath, import.meta.url).href
}

// Переменная для отслеживания количества слайдов
const slidesPerView = ref(2);

// Функция для обновления количества слайдов при изменении ширины экрана
const updateSlidesPerView = () => {
  if (window.innerWidth < 562) {
    slidesPerView.value = 1
  } else if (window.innerWidth > 1024) {
    slidesPerView.value = 3
  } else {
    slidesPerView.value = 2
  }  
};

// Когда компонент монтируется, устанавливаем обработчик изменения размера окна
onMounted(() => {
  updateSlidesPerView(); // Устанавливаем изначальное количество слайдов
  window.addEventListener('resize', updateSlidesPerView); // Следим за изменением размера
});

// Убираем обработчик при удалении компонента
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});
</script>

<template>
  <SectionPersonal class="top" title="Топ 10 исполнителей">
    <template #body>
      <swiper-container
        class="top__list swiper"
        :slides-per-view="slidesPerView"
        :slides-per-group="1"
        :space-between="20"
        pagination="true"
        loop="true"
      >
        <swiper-slide
          class="swiper-slide top__card"
          :class="{ first: autor.winner }"
          v-for="autor in swiperList"
          :key="autor.id"
        >
          <img class="top__img" :src="getImagePath(autor.path)" alt="" />
          <div class="top__content">
            <span class="top__name">{{ autor.name }}</span>
            <span class="top__rating">{{ autor.point }} баллов</span>
          </div>
        </swiper-slide>
      </swiper-container>
    </template>
  </SectionPersonal>
</template>

<style scoped>
.top {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.top__list {
  width: 830px;
  height: 200px;
}

.top__card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 15px;
  overflow: hidden;
}

.top__img {
  width: 100px;
  height: 100px;
  grid-row: 1 / 2;
  border-radius: 50%;
  border: 4px solid transparent;
}

.top__card.first .top__img {
  border-color: var(--color-second);
}

.top__content {
  display: grid;
  gap: 10px;
}

.top__name {
  font-size: 24px;
  font-weight: bold;
}

.top__card.first .top__name {
  color: var(--color-second);
}

.swiper .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: var(--color-white);
}

.swiper .swiper-pagination-bullet.swiper-pagination-bullet-active {
  transform: scale(1.5);
}

@media (max-width: 1200px) {
  .top__list {
    width: 600px;
  }
}

@media (max-width: 1024px) {
  .top__list {
    width: 550px;
  }
}

@media (max-width: 992px) {
.top__list {    
        width: 700px;
    }
  }
  @media (max-width: 768px) {
  .top__list {    
        width: 520px;
    } 

    .top__card {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 562px) {
    .top__list {    
        width: 280px;
    } 

    .swiper__buttons {
        display: none;
    }
  }
</style>
