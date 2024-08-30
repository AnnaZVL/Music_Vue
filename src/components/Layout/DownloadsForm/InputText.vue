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
.form-step__label {
    position: relative;
    z-index: -1;
    display: flex;
    gap: 10px;
    opacity: 0.8;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.form-step__label > p {
    position: absolute;
    top: -10px;
    left: 20px;
    opacity: 0.8;
}

.form-step__input {
    padding: 20px 10px;
    background-color: transparent;    
    color: var(--color-white);
    outline: none;
    border: 1px solid var(--color-blue);
    width: 100%;
    font-size: 24px;
}

.form-step__input::placeholder {
    color: var(--color-white);
    font-size: 18px;    
    opacity: 0.6;
}
</style>