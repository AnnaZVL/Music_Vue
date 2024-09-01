<script setup>
import { ref } from 'vue';

const emit = defineEmits(['updateFile'])

const imgPath = ref('')
const selectedFile = ref(null)
const onFileChange = (event) => {
  const files = event.target.files
  if (files.length > 0) {
    emit('updateFile', files[0]) 
    selectedFile.value = files[0]    
    imgPath.value = URL.createObjectURL(files[0])
  }
  }

</script>

<template>
    <div class="form-step__inner" >
        <div v-if="!selectedFile">
            <input class="form-step__file" type="file" accept="image/*" @change="onFileChange" />
            <label class="form-step__label" for="img">
            <span>+</span>
            </label>
        </div>
        <img :src="imgPath" alt="" v-else>
    </div>
</template>

<style  scoped>
</style>