<script setup>
import TultipBase from '@/components/Layout/UI/Tultip/TultipBase.vue'

import { useField } from 'vee-validate'
import { watch } from 'vue';

const props = defineProps({
  trackName: String,
  name: String,
  trackId: String,
})

const { value } = useField(props.name)
const emits = defineEmits(['updateTrackText'])

watch(value, (newValue) => {
  emits('updateTrackText', { trackId: props.trackId, text: newValue });
});

</script>

<template>
    <span class="upload-singl-text">Добавьте текст песни {{ trackName }}</span>

    <label class="form-step__label form-step__label--area" :for="trackId">
        <p>Текст песни</p>
        <textarea class="form-step__textarea" :id="trackId" rows="10"  v-model="value"></textarea>
       <TultipBase/>
    </label>
</template>

<style scoped>
</style>