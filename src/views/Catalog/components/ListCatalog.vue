<script setup>
import IconChange from '@/components/Layout/UI/SVG/IconChange.vue'
import IconDelete from '@/components/Layout/UI/SVG/IconDelete.vue'
import IconLink from '@/components/Layout/UI/SVG/IconLink.vue'
import IconStatic from '@/components/Layout/UI/SVG/IconStatic.vue'

defineProps(['list'])
const statusList = {
  pending: 'ожидание',
  loaded: 'загружено'
}

const statusText = (status) => {
  return statusList[status]?.class
}
</script>

<template>
  <div class="catalog__list">
    <div class="catalog__item" v-for="item in list" :key="item.id">
      <div class="catalog__item--info">
        <img class="catalog__item--img" :src="item.img" alt="Обложка песни" />
        <div class="catalog__item--content">
          <h5 class="catalog__item--name">{{ item.title }}</h5>
          <span class="catalog__item--autor">{{ item.singer }}</span>
          <span class="catalog__item--date">{{ item.date }}</span>
        </div>

        <div class="catalog__item--inner">
          <div class="catalog__item--status">
            <span class="catalog__item--text" :class="item.status">{{
              statusText(item.status)
            }}</span>
          </div>
          <div class="catalog__item--box">
            <p class="catalog__item--descr">UPC</p>
            <p class="catalog__item--descr">IRSC</p>
          </div>
        </div>
      </div>
      <div class="catalog__item--actions">
        <button class="catalog__item--pay">Оплатить</button>
        <div class="catalog__item--buttons" v-if="item.link">
          <button class="btn catalog__item--btn" title="Ссылка">
            <IconLink class="catalog__item--icon" />
          </button>
          <button class="btn catalog__item--btn" title="Статистика">
            <IconStatic class="catalog__item--icon" />
          </button>
        </div>
        <div class="catalog__item--buttons">
          <button class="btn catalog__item--btn" title="Редактировать">
            <IconChange class="catalog__item--icon" />
          </button>
          <button class="btn catalog__item--btn" title="Удалить">
            <IconDelete class="catalog__item--icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog__list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}

.catalog__item {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid var(--color-blue);
  width: 100%;
}

.catalog__item--info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-basis: 60%;
}

.catalog__item--img {
  width: 100px;
  height: 100px;
}

.catalog__item--content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
}

.catalog__item--name {
  font-size: 24px;
  font-weight: 500;
}

.catalog__item--autor {
  font-size: 18px;
}

.catalog__item--inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  flex-basis: 30%;
}

.catalog__item--status {
  padding-left: 15px;
  position: relative;
}

.catalog__item--text {
  font-size: 18px;
}

.catalog__item--text::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.catalog__item--text.pending::before {
  background-color: var(--color-second);
}

.catalog__item--text.loaded::before {
  background-color: green;
}

.catalog__item--box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.catalog__item--descr {
  opacity: 0.4;
  font-size: 18px;
}

.catalog__item--actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-grow: 1;
}

.catalog__item--pay {
  padding: 15px;
  border-radius: 10px;
  border: 1px solid var(--color-blue);
  background-color: transparent;
  font-size: 18px;
  color: var(--color-white);
  transition:
    border 0.3s ease-in-out,
    color 0.3s ease-in-out;
}

.catalog__item--pay:hover {
  border-color: var(--color-second);
  color: var(--color-second);
}

.catalog__item--buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.catalog__item--btn {
  padding: 7px;
  border: 1px solid transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.3s ease-in-out;
}

.catalog__item--icon {
  width: 25px;
  height: 25px;
  fill: var(--color-white);
}

.catalog__item--btn:hover {
  border-color: var(--color-white);
}
</style>
