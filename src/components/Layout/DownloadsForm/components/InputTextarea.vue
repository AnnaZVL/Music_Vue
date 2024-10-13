<script setup>
import { useField } from 'vee-validate'

const props = defineProps(['title', 'name'])

const { value } = useField(props.name)
</script>

<template>
  <label class="form-step__label form-step__label--area" :for="name">
    <p>{{ title }}</p>
    <textarea class="form-step__textarea" :id="name" rows="10" v-model="value"></textarea>
  </label>
</template>

<style scoped></style>
