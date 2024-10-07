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
            <span class="upload-singl-subtext">{{ selectedFile.name }}</span>
        </div>
    </div>    
</template>

<style >

</style>