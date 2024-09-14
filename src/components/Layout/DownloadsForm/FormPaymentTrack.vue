<script setup>
import FormPromo from '@/components/Layout/DownloadsForm/FormPromo.vue'
import NeoButtons from '@/components/Layout/UI/Buttons/NeoButtons.vue'
import BaseModal from '@/components/Layout/UI/Modals/BaseModal.vue'
import FormAgreement from '../DownloadsForm/FormAgreement/FormAgreement.vue'
import defaultFoto from '@/assets/img/personal_page/no-photo.jpg'

import { useTrackStore } from '@/stores/trackStore';
import { useStateStore } from '@/stores/stateStore'

import { useForm } from 'vee-validate'
import { ref } from 'vue'
import * as yup from 'yup'

const trackStore = useTrackStore()
const stateStore = useStateStore()

const showModal = ref(false)
const isVisible = ref(false)
const isDisabled = ref(true)

const { meta, handleSubmit } = useForm({
  validationSchema: yup.object({
    
  })
})

const onSubmit = handleSubmit((values) => {
  if (meta.value.valid) {
    console.log('OK', values)
    stateStore.changeStep(1) 
  }
})

const openModal = () => {
  showModal.value = true
}

const successForm = (success) => {
 isDisabled.value = success
}
</script>

<template>
  <form class="step__section--box" @submit.prevent="onSubmit">
    <div class="payment__top">
      <div class="payment__body">
        <img class="payment__img" :src="trackStore.newTrack.img || defaultFoto" alt="" />
        <div class="payment__content">
          <h5 class="payment__name">
            Трек: {{ trackStore.newTrack.trackName || 'Название не известно' }}
          </h5>
          <span class="payment__autor"
            >Исполнитель: {{ trackStore.newTrack.trackSinger || 'Исполнитель не известен' }}</span
          >
        </div>
    </div>
    <FormPromo />
    </div>
      <div class="payment__result">
        <span class="payment__text">К оплате {{ trackStore.rezalt }}</span>
        <button class="payment__btn btn" type="button" @click="openModal">
          Подписать договор
        </button>
        <NeoButtons class="form-step__btn" text="Оплатить" type="submit" :disabled="isDisabled"></NeoButtons>
      </div>
      <p class="rezalt-message" v-if="isVisible">Что-то пошло не так. Попробуйте позже.</p>
    
  </form>
  <Teleport to="#wrapper">
    <BaseModal v-if="showModal" @close-modal="showModal = false">
      <FormAgreement @success-form="successForm"/>
    </BaseModal>
  </Teleport>
</template>

<style scoped>
.payment__top {
  display: flex;
  gap: 30px;
  border: 1px solid rgba(83, 95, 246, 0.4);
  border-radius: 20px;
}

.payment__body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-basis: 50%;
}

.payment__img {
  border-radius: 20px;
  width: 150px;
}

.payment__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.payment__name {
  font-size: 24px;
}

.payment__name--autor {
  font-size: 18px;
}

.payment__result {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  border: 1px solid rgba(83, 95, 246, 0.4);
  border-radius: 10px;
}

.payment__text {
  display: inline-block;
  padding-right: 10px;
  position: relative;
  font-size: 18px;
  flex-basis: 20%;
}

.payment__text::after {
  content: '₽';
  position: absolute;
  right: 10px;
}

.payment__btn {
  padding: 10px 20px;
  border: 1px solid var(--color-blue);
  border-radius: 10px;
  outline: none;
  color: var(--color-white);
  transition:
    color 0.3s ease-in-out,
    border 0.3s ease-in-out;
}

.payment__btn:hover {
  color: var(--color-second);
  border-color: var(--color-second);
}
</style>
