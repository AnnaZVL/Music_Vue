<script setup>
import { ref } from 'vue';

const emit = defineEmits(['updateFile'])

const selectedFile = ref(null)
const onFileChange = (event) => {
  const files = event.target.files
  if (files.length > 0) {
    emit('updateFile', files[0]) 
    selectedFile.value = files[0]        
  }
}
</script>

<template>    
    <div class="upload-singl-box" >
        <div class="form-step__inner" v-if="!selectedFile">
            <input class="form-step__file" id="audio" type="file" accept="audio/wav" @change="onFileChange">
            <label class="form-step__label" for="audio">
                <span>+</span>
            </label>
        </div>
        <div class="upload-singl-info" v-else>
            <span class="upload-singl-text">Файл успешно загружен</span>
            <span class="upload-singl-text upload-singl-name">{{ selectedFile.name }}</span>
        </div>
    </div>    
</template>

<style >
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

.form-step__label span {    
    font-size: 36px;
    color: var(--color-white);
    transition: color 0.3s ease-in-out;
}

.form-step__inner:hover > label > span {
    color: var(--color-second);
}

.form-step__inner:hover {
    border-color: var(--color-second);
}
</style>