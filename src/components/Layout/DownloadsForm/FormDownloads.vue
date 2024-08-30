<script setup>
import NeoButtons from '../UI/Buttons/NeoButtons.vue';
defineProps({
    title: String, 
    isDisabled: {
        default: false,        
    }});
</script>

<template>
    <form class="form-step" >
        <h6 class="form-step__title">{{ title }}</h6>
        <slot></slot>
        <NeoButtons class="form-step__btn" text="Далее" type="submit" :disabled="isDisabled"></NeoButtons>
    </form>
</template>

<style >
.form-step {
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;   
    width: 100%;
    border-radius: 20px;
    border: 1px solid rgba(83, 95, 246, 0.4);
    position: relative;
    z-index: 0;
}

.form-step__title {
    font-size: 24px;
}

.form-step > .choices {
    width: 300px;
}

.form-step .form-step__btn {
    padding: 20px 25px;
    margin-left: auto;
    margin-top: auto;
    font-size: 24px;
    max-height: 70px;
}

.form-step__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 20px;
  width: 100%;   
  position: relative;
  z-index: -1;
}

</style>