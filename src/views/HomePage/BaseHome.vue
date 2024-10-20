<script setup>
import ContactsBase from './components/ContactsBase.vue'
import HomePlayer from './components/HomePlayer.vue'
import BubbleBase from '@/views/HomePage/components/BubbleBase.vue'
import SevicesCard from './components/SevicesCard.vue'
import BannerBase from './components/BannerBase.vue'
import QuestionsBase from './components/QuestionsBase.vue'

import { servicesList, questionsList } from '@/constants/homePage'
</script>

<template>
  <main class="main">
    <section class="hero" id="hero">
      <BubbleBase />
      <div class="hero__container container">
        <div class="hero__content">
          <h1 class="hero__title">Эксперты в&nbsp;продвижении музыки</h1>
          <span class="hero__descr"
            >Обеспечиваем прозрачный, индивидуальный и&nbsp;комфортный подход к продвижению
            и&nbsp;рекламе Ваших релизов.</span
          >
          <span class="hero__descr hero__descr--strong"
            >Мы&nbsp;не&nbsp;используем накрутку, только настоящий результат.</span
          >
          <a class="hero__link" href="#" aria-label="Связаться с нами">Связаться с нами</a>
          <ContactsBase></ContactsBase>
        </div>
        <HomePlayer />
      </div>
    </section>
    <section class="services">
      <div class="container">
        <div class="services__container">
          <SevicesCard v-for="item in servicesList" :key="item.id" :item="item" />
        </div>
      </div>
    </section>
    <BannerBase />
    <QuestionsBase :questionsList="questionsList" />
  </main>
</template>

<style scoped>
.main {
  margin-top: 40px;
  height: 100%;
  width: 100%;
  flex: 1;
}

.hero {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero__container {
  position: relative;
  display: flex;  
  justify-content: space-between;
  height: 100%;
}

.hero__content {
  flex-grow: 1;
  flex-shrink: 1;
  z-index: 10;
  width: 48%;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  gap: 20px;
}

.hero__title {
  font-weight: bold;
  font-size: 4rem;
  line-height: 110%;
}

.hero__descr {
  font-size: 1.4rem;
}

.hero__descr--strong {
  margin-bottom: 40px;
  font-weight: bold;
}

.hero__link {
  padding: 22px 44px;
  margin: 0;
  margin-bottom: 50px;
  border: none;
  font-weight: 700;
  outline: none;
  color: var(--color_white);
  border-radius: 15px;
  background: rgb(244, 31, 4);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(9%, rgba(244, 31, 4, 1)),
    to(rgba(242, 144, 105, 1))
  );
  background: -o-linear-gradient(left, rgba(244, 31, 4, 1) 9%, rgba(242, 144, 105, 1) 100%);
  background: linear-gradient(90deg, rgba(244, 31, 4, 1) 9%, rgba(242, 144, 105, 1) 100%);
  cursor: pointer;
  -webkit-transition:
    background 0.5s ease-in-out,
    -webkit-transform 0.3s ease-in-out;
  transition:
    background 0.5s ease-in-out,
    -webkit-transform 0.3s ease-in-out;
  -o-transition:
    transform 0.3s ease-in-out,
    background 0.5s ease-in-out;
  transition:
    transform 0.3s ease-in-out,
    background 0.5s ease-in-out;
  transition:
    transform 0.3s ease-in-out,
    background 0.5s ease-in-out,
    -webkit-transform 0.3s ease-in-out;
}

.hero__link:focus-visible {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.hero__link:hover {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(9%, rgba(242, 144, 105, 1)),
    to(rgba(244, 31, 4, 1))
  );
  background: -o-linear-gradient(left, rgba(242, 144, 105, 1) 9%, rgba(244, 31, 4, 1) 100%);
  background: linear-gradient(90deg, rgba(242, 144, 105, 1) 9%, rgba(244, 31, 4, 1) 100%);
}

.services {
  margin: 100px 0 100px 0;
}

.services__container {
  padding: 0 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .hero__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .hero__content {
    position: static;
    align-items: center;
    width: 100%;
    z-index: -1;
  }

  .hero__title,
  .hero__descr,
  .hero__descr--strong {
    text-align: center;
  }

  .hero__player {
    margin: 0;
    width: 100%;
    z-index: -1;
  }

  .contacts {
    align-self: flex-start;
  }

  .services {
    margin-top: 200px;
  }

  .services__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 562px) {
  .services {
    margin-top: 0px;
  }
}

@media (max-width: 562px) {
  .hero__title {
        font-size: 3.5rem;          
        word-break: break-word;
    }

    .hero__descr {
        font-size: 1rem;
    }

    .services__container {
        grid-template-columns: 1fr;
    }   
}
</style>
