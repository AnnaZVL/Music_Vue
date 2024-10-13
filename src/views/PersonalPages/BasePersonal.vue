<script setup>
import { ref } from 'vue'
import AsidePersonal from '@/components/Layout/Aside/AsidePersonal.vue'

const showAside = ref(true)

const toggleAside = () => {
  showAside.value = !showAside.value
}
</script>

<template>
  <main class="main-personal">
    <div class="container">
      <div class="main-personal__container">
        <button
          class="btn aside-personal__close"
          :class="{ show: showAside }"
          title="Свернуть меню"
          @click="toggleAside"
        ></button>
        <AsidePersonal :showAside="showAside"></AsidePersonal>
        <article class="personal-content">
          <router-view></router-view>
        </article>
      </div>
    </div>
  </main>
</template>

<style>
.main-personal {
  width: 100%;
  height: 100%;
}

.main-personal__container {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  position: relative;
  width: 100%;
  height: 100%;
}

.aside-personal__close {
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 10;
  width: 20px;
  height: 20px;
  border-left: 1px solid var(--color-white);
  border-bottom: 1px solid var(--color-white);
  transform: rotate(-135deg);
  transition: transform 0.3s ease-in-out;
}

.aside-personal__close.show {
  transform: rotate(45deg);
}

.personal-content {
  margin-bottom: 40px;
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
}

.personal-section__subtitle {
  font-size: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.personal-section__subtitle::first-letter {
  text-transform: uppercase;
}

@media (max-width: 992px) {
  .main-personal__container {
    margin-top: 0;
    flex-direction: column;
    overflow: hidden;
  }

  .personal-content {
    width: auto;
  }
  
  .aside-personal__close {
    display: none;
  }
}

@media (max-width: 562px) {
  .main-personal__container {
    padding: 0;
  }

  .personal-content {
    padding: 10px 5px;
  }

  .personal-section__subtitle {
    font-size: 28px;
  }
}
</style>
