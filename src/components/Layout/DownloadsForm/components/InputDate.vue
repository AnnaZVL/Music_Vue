<script setup>
import { useField } from 'vee-validate'

const props = defineProps(['title', 'name'])

const { value } = useField(props.name)
</script>

<template>
  <label class="form-step__label" :for="name">
    <p>{{ title }}</p>
    <input class="form-step__input" type="date" :id="name" placeholder="Дата" v-model="value" />
  </label>
</template>

<style scoped></style>
