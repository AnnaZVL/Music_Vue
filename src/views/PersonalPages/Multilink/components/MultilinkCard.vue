<script setup>
import IconLink from '@/components/Layout/UI/SVG/IconLink.vue';
import IconStatic from '@/components/Layout/UI/SVG/IconStatic.vue';
import IconChange from '@/components/Layout/UI/SVG/IconChange.vue';
import IconDelete from '@/components/Layout/UI/SVG/IconDelete.vue';

import { getImagePath } from '@/helpers/imgPath';

defineProps({item: Object})
</script>

<template>
  <div class="card">
    <div class="card__info">
      <img
        class="card__img"
        :src="getImagePath(item.img)"
        alt="Обложка песни"
      />
      <div class="card__content">
        <h5 class="card__name">{{ item.title }}</h5>
        <span class="card__autor">{{ item.autor }}</span>
      </div>
    </div>
    <div class="box">
      <span class="card__text">{{ item.views }}</span>
      <span class="card__text">{{ item.linkСlicks }}</span>
      <div class="card__actions">
        <div class="card__buttons">
            <button class="btn card__btn" title="Ссылка">
              <IconLink class="card__icon"/>            
          </button>
          <button class="btn card__btn" title="Статистика">
            <IconStatic class="card__icon"/>            
          </button>
        </div>
        <div class="card__buttons">
          <button class="btn card__btn" title="Редактировать">
            <IconChange class="card__icon"/>            
          </button>
          <button class="btn card__btn" title="Удалить">
            <IconDelete class="card__icon"/>            
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;    
    border-radius: 20px;
    border: 1px solid var(--color-blue);     
}

.card__info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    flex-basis: 48%;    
}

.card__img {
    width: 100px;
    height: 100px;
}

.card__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
}

.card__name {
    font-size: 24px;
    font-weight: 500;
}

.card__autor {
    font-size: 18px;
}

.card__text {
    font-size: 18px;
}

.box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px; 
    flex-wrap: nowrap;
    flex-basis: 50%;
}

.card__actions {    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;   
}

.card__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
}

.card__btn {
    padding: 7px;   
    border: 1px solid transparent;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border 0.3s ease-in-out;
}

.card__icon {
    width: 25px;
    height: 25px;
    fill: var(--color-white);
}

.card__btn:hover {
    border-color: var(--color-white);
}

@media (max-width: 562px) {
    .card {
        flex-direction: column;
        align-items: flex-start;
    }

    .box {
        width: 100%;
    }

    .card__actions {
        flex-direction: row;
        width: 100%;
    }

    .card__text {
        display: none;
    }
}
</style>
