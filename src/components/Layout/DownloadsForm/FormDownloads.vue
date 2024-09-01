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
  justify-items: center;
  gap: 30px 20px;
  width: 100%;   
  position: relative;
  z-index: -1;
}

.upload-singl-box {
    display: flex;
    gap: 40px;
    width: 100%;
}

.upload-singl-text {
    font-size: 24px;
}

.upload-singl-info {
    display: flex;
    flex-direction: column;
    gap: 20px;   
}

.form-step__file {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    outline: none;
}

.form-step__inner {
    margin-bottom: 10px;
    width: 150px;
    height: 150px;    
    border: 1px solid var(--color-blue);
    border-radius: 15px;
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border 0.3s ease-in-out;
}

.form-step__inner > .form-step__label {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.form-step__inner:hover > label > span {
    color: var(--color-second);
}

.form-step__inner:hover {
    border-color: var(--color-second);
}

.form-step__inner img {
    width: 90%;
    height: 90%;    
}

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

.form-step__label span {    
    font-size: 36px;
    color: var(--color-white);
    transition: color 0.3s ease-in-out;
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

input[type='date'] {
    padding-right: 40px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;    
}

input[type='date']::placeholder {
    color: var(--color-white);
    font-size: 18px;    
    opacity: 0.6;
}

input[type='date']::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 40px;
    z-index: 3;
    transform: translateY(-50%);
    pointer-events: none;
    background-image: url(@/assets/img/icons/icon_calendar.svg);
    width: 20px;
    height: 20px;
}

.form-step__textarea {    
    padding: 20px 10px;
    background-color: transparent;    
    color: var(--color-white);
    outline: none;
    border: 1px solid var(--color-blue);
    width: 100%;
    font-size: 24px;
}

.form-step__label--area {
    grid-column: span 2;
}

.tracks {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    position: relative;
    z-index: 0;
}
</style>