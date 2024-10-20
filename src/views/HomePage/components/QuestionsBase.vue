<script setup>
import IconArrow from '@/components/Layout/UI/SVG/IconArrow.vue'
import { ref } from 'vue'
defineProps({ questionsList: Array })

const activeIndex = ref(null)

const beforeEnter = (el) => {
  el.style.height = '0'
}
const enter = (el) => {
  el.style.height = el.scrollHeight + 'px'
  el.style.opacity = '1'
}
const leave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  requestAnimationFrame(() => {
    el.style.height = '0'
    el.style.opacity = '0'
  })
}

const toggleShow = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const isActive = (index) => {
  return activeIndex.value === index
}
</script>

<template>
  <section class="questions">
    <div class="questions__container container">
      <h3 class="title">Часто задаваемые вопросы</h3>
      <div class="questions__list">
        <div
          class="questions__item"
          :class="{ open: isActive(item.id) }"
          v-for="item in questionsList"
          :key="item.id"
        >
          <h4 class="questions__item--header">
            <button class="questions__item--btn btn" @click="toggleShow(item.id)">
              <span>{{ item.title }}</span>
              <IconArrow class="questions__item--arrow" />
            </button>
          </h4>
          <transition name="body" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="questions__item--body" v-if="isActive(item.id)">
              {{ item.descr }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.questions {
  margin-bottom: 100px;
}

.questions__container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.title {
  font-size: 36px;
  font-weight: bold;
}

.questions__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  width: 100%;
}

.questions__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  overflow: hidden;
}

.questions__item--header {
  width: 100%;
}

.questions__item--btn {
  padding: 10px 10px 20px 10px;
  display: flex;
  gap: 25px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  background-color: transparent;
  color: var(--color-black);
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 1px solid var(--color-blue);
  transition: border 0.3s ease-in-out;
}

.questions__item--arrow {
  margin-right: 20px;
  width: 30px;
  height: 30px;
  margin-left: auto;
  transform: rotate(-90deg);
  fill: var(--color-blue);
  transition: transform 0.3s ease-in-out;
}

.questions__item.open .questions__item--btn {
  border-color: transparent;
}

.questions__item.open .questions__item--arrow {
  transform: rotate(90deg);
}

.questions__item--body {
  padding-left: 70px;
  max-width: 60%;
  height: 0;
  transition: height 0.3s ease-in-out;
}

@media (max-width: 562px) {
  .questions {
    margin-bottom: 50px;
  }

  .questions__item--btn {
    font-size: 18px;
  }

  .questions__item--body {
      padding-left: 15px;
      max-width: 90%;
  }
}
</style>
