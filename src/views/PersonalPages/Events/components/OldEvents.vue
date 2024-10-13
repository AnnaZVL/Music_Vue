<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import { register } from 'swiper/element/bundle'
import { onMounted, ref, onBeforeUnmount } from 'vue'

import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'
import CardEvent from './CardEvent.vue'
import WinnerBox from './WinnerBox.vue'
import IconArrow from '@/components/Layout/UI/SVG/IconArrow.vue'

const isNextDisabled = ref(false)
const isPrevDisabled = ref(true)
const slidesPerView = ref(2);

register()
defineProps(['events'])

  const updateSlidesPerView = () => {
  if (window.innerWidth < 768 ) {
    slidesPerView.value = 1
  }  else {
    slidesPerView.value = 2
  }    
};

onMounted(() => {
  const swiperEl = document.querySelector('swiper-container');
  const btnNext = document.getElementById('btnNext');
  const btnPrev = document.getElementById('btnPrev');

  
  if (swiperEl && swiperEl.swiper) {
    const updateButtons = () => {
      isPrevDisabled.value = swiperEl.swiper.isBeginning;
      isNextDisabled.value = swiperEl.swiper.isEnd;
    };

    updateSlidesPerView(); // Устанавливаем изначальное количество слайдов
  window.addEventListener('resize', updateSlidesPerView);
     // Первоначальная проверка
     updateButtons();

    // Обновление состояния кнопок при изменении слайда
    swiperEl.swiper.on('slideChange', updateButtons);

    btnNext.addEventListener('click', () => {
      swiperEl.swiper.slideNext();      
    });

    btnPrev.addEventListener('click', () => {
      swiperEl.swiper.slidePrev();
    });
  }
     // Удаление предустановленных элементов навигации
  const defaultNavButtons = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
  defaultNavButtons.forEach(btn => btn.remove());  // Удаляем встроенные кнопки
  
  
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});
</script>


<template>
  <SectionPersonal class="oldEvent" title="Завершенные события">
    <template #body>
      <swiper-container
        class="oldEvent__cards swiper"
        navigation="false"
        :slides-per-view="slidesPerView"
        :slides-per-group="1"
        :space-between="20"
      >
        <swiper-slide class="swiper-slide" v-for="event in events" :key="event.id">
          <CardEvent :event="event" :isRegistered="false">
            <template #winner>
              <WinnerBox :winner="event.winner" />
            </template>
          </CardEvent>
        </swiper-slide>
      </swiper-container>
    
      <div class="swiper-actions">
        <button class="swiper-btn swiper-btn--prev" id="btnPrev" :disabled="isPrevDisabled">
          <IconArrow/>
        </button>
        <button class="swiper-btn swiper-btn--next" id="btnNext" :disabled="isNextDisabled">
          <IconArrow/>
        </button>        
      </div>       
    </template> 
  </SectionPersonal>
</template>

<style >
.oldEvent {
  position: relative;
}

.oldEvent__cards {  
  width: 850px;
  height: 800px;
}

.swiper-slide {
  height: inherit;
}

.swiper-actions {
  position: absolute;
  top: 20px;
  right: 23px;
  z-index: 10;
  display: flex;
  gap: 30px;
}

.swiper-btn {
  padding: 5px;
  position: relative;
  z-index: 10;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-white);
  border-radius: 50%;
  background-color: transparent;
  transition: border 0.3s ease-in-out;
}

.swiper-btn--next {
  transform: rotate(180deg);
}

.swiper-btn:hover:not(:disabled) {
  border-color: var(--color-second);
}

.swiper-btn:disabled {
  filter: brightness(50%);
  cursor: not-allowed;
}

.swiper-btn svg {
  fill: var(--color-white);
  transition: border 0.3s ease-in-out;
}

.swiper-btn:hover:not(:disabled) svg{
  fill: var(--color-second);
}

.swiper > .swiper-button-next,
.swiper > .swiper-button-prev {
  display: none !important;
}

@media (max-width: 1200px) {
  .oldEvent__cards {    
        width: 700px;
    }

    .oldEvent .personal-section__title {
      max-width: 80%;
    }
}

@media (max-width: 1024px) {
  .oldEvent__cards {    
        width: 550px;
    }
}

@media (max-width: 992px) {
  .oldEvent__cards {    
        width: 700px;
    }
}

@media (max-width: 768px) {
  .oldEvent__cards {    
        width: 500px;
        height: 700px;
    }
}

@media (max-width: 562px) {
  .oldEvent__cards {    
        width: 280px;
    }

    .swiper__actions {
        display: none;
    }

}
</style>
