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
    console.log(files[0]);
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
    z-index: -1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.form-step__file {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    outline: none;
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

.form-step__inner img {
    width: 90%;
    height: 90%;    
}
</style>