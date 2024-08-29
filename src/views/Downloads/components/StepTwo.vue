<script setup>
import StepSection from './StepSection.vue'
import FormStepTwoTrack from '@/components/Layout/DownloadsForm/FormStepTwoTrack.vue'

import { useStateStore } from '@/stores/stateStore'

const store = useStateStore()
</script>

<template>
  <StepSection title="Информация о релизе">
    <FormStepTwoTrack v-if="store.typeDownload === 'track'"></FormStepTwoTrack>
    <div v-else>ALBUM 2</div>
    <!-- <form class="form-two form-step" action="POST" id="formTwo">
      
      <div class="form-step__wrapper">
        <label class="form-step__label" for="name">
          <p>Исполнитель</p>
          <input class="form-step__input" type="text" id="name" placeholder="Имя исполнителя" />
          <div class="tultip">
            <button class="tultip__btn" type="button">
              <svg class="tultip__icon">
                <use xlink:href="#tultip"></use>
              </svg>
            </button>
            <p class="tultip__content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus magni modi,
              adipisci cumque, minus nulla tenetur pariatur
            </p>
          </div>
        </label>

        <label class="form-step__label" for="title">
          <p>Название трека</p>
          <input class="form-step__input" type="text" id="title" placeholder="Название релиза" />
          <div class="tultip">
            <button class="tultip__btn" type="button">
              <svg class="tultip__icon">
                <use xlink:href="#tultip"></use>
              </svg>
            </button>
            <p class="tultip__content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus magni modi,
              adipisci cumque, minus nulla tenetur pariatur
            </p>
          </div>
        </label>

        <label class="form-step__label" for="date">
          <p>Дата основного релиза</p>
          <input class="form-step__input" type="date" id="date" placeholder="Дата" />
          <div class="tultip">
            <button class="tultip__btn" type="button">
              <svg class="tultip__icon">
                <use xlink:href="#tultip"></use>
              </svg>
            </button>
            <p class="tultip__content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus magni modi,
              adipisci cumque, minus nulla tenetur pariatur
            </p>
          </div>
        </label>
        <label class="form-step__label" for="data-tik">
          <p>Дата выхода в Tik Tok</p>
          <input class="form-step__input" type="date" id="data-tik" />
          <div class="tultip">
            <button class="tultip__btn" type="button">
              <svg class="tultip__icon">
                <use xlink:href="#tultip"></use>
              </svg>
            </button>
            <p class="tultip__content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus magni modi,
              adipisci cumque, minus nulla tenetur pariatur
            </p>
          </div>
        </label>
      </div>
    
    </form> -->
  </StepSection>
</template>

<style scoped>


</style>
