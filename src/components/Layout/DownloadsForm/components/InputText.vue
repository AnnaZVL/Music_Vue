<script setup>
import TultipBase from '@/components/Layout/UI/Tultip/TultipBase.vue'

import { useField } from 'vee-validate'

const props = defineProps(['title', 'name', 'placeholder'])

const { value } = useField(props.name)
</script>

<template>
    <label class="form-step__label" :for="name">
        <p>{{ title }}</p>
        <input 
        class="form-step__input" 
        type="text" 
        :id="name" 
        :placeholder="placeholder" 
        v-model="value"
        />
        <TultipBase/>          
    </label>
</template>

<style scoped>
</style>