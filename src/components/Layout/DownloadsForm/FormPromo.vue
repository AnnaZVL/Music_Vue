<script setup>
import { useForm } from 'vee-validate'

import { useTrackStore } from '@/stores/trackStore'
import { useStateStore } from '@/stores/stateStore';
import { useAlbumStore } from '@/stores/albumStore';

const trackStore = useTrackStore();
const stateStore = useStateStore();
const albumStore = useAlbumStore();

const { meta, handleSubmit, defineField } = useForm()

const [promoCode] = defineField('promoCode')

const onSubmit = handleSubmit((values) => {
  console.log('Promo')
  if (meta.value.valid) {
    if (stateStore.typeDownload === 'track') {
      trackStore.addPromo(values.promoCode)
    } else {
      albumStore.addPromo(values.promoCode)
    }
  }
})
</script>

<template>
  <form class="promo__form" @submit.prevent="onSubmit">
    <label class="promo__label" for="promo">
      <input
        class="promo__input"
        v-model="promoCode"
        type="text"        
        placeholder="Введите промокод"
      />
    </label>
    <button class="btn promo__btn">Ввести</button>
  </form>
</template>

<style scoped>
.promo__form {
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-blue);
  border-radius: 10px;
  height: auto;
}

.promo__input {
  padding: 10px 15px;
  width: 100%;
  background-color: transparent;
  border: 1px solid transparent;
  outline: none;
  color: var(--color-white);
  font-size: 18px;
}

.promo__input::placeholder {
  font-size: 18px;
  opacity: 0.6;
}

.promo__btn {
  padding: 15px;
  border: 1px solid var(--color-blue);
  border-radius: 10px;
  color: var(--color-white);
  font-size: 20px;
  transition: color 0.3s ease-in-out;
}

.promo__btn:hover {
  color: var(--color-second);
}
</style>
