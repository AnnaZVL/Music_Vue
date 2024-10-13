<script setup>
import NeoButtons from '@/components/Layout/UI/Buttons/NeoButtons.vue'
import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'
</script>

<template>
  <SectionPersonal class="news" title="новости">
    <template #body>
      <div class="new__top">
        <img
          class="news__img"
          src="/src/assets/img/personal_page/albums/Kancler.webp"
          alt="Обложка новости"
        />
        <h4 class="personal-section__subtitle">
          Заголовок новости специально сделан длинным, что бы показать окончание строки
        </h4>
      </div>

      <div class="news__body">
        <p class="news__descr personal-section__descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est voluptatibus labore
          ipsa, reiciendis sit dolor quia excepturi accusamus. Iusto, quasi cupiditate! Ex, fugit
          sapiente atque quis quod amet! Eos odit rerum ratione ullam optio veniam mollitia
          asperiores provident sunt blanditiis quibusdam, magni beatae totam atque sint nesciunt
          explicabo repellendus.
        </p>
        <div class="news__bottom">
          <time datetime="2024-05-24">24 мая 2024</time>
          <NeoButtons text="Подробнее"></NeoButtons>
        </div>
      </div>
    </template>
  </SectionPersonal>
</template>

<style scoped>
.news {
  display: grid;
  gap: 30px;
  background-color: rgba(var(--color-blue-r), 0.2);
}

.new__top {
  display: grid;
  grid-template-columns: 100px 1fr;
  width: 100%;
  gap: 40px;
}

.news__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 25px;
}

.news__img {
  border-radius: 20px;
}

.news__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
}

@media (max-width: 562px) {
  .news {
    gap: 15px;
  }

  .new__top {
    grid-template-columns: 1fr;    
  }

  .news__img {
  height: 250px;
}

}
</style>
