<script setup>
import Choices from 'choices.js'
import { onMounted, watch } from 'vue'

const props = defineProps(['modelValue', 'optionsList', 'id', 'className']);
const emits = defineEmits(['update:modelValue']);

onMounted(() => {
  const selectElement = document.getElementById(`${props.id}`)
  if (selectElement) {
    // Инициализируем Choices
    const choices = new Choices(selectElement, {
      searchEnabled: false,
      allowHTML: true
    })

    // Добавляем опции из props в Choices
    props.optionsList.forEach((option) => {
      choices.setChoices([{ value: option.value, label: option.name }], 'value', 'label', false)
    })

        // Установка текущего значения в select
        if (props.modelValue) {
      choices.setChoiceByValue(props.modelValue)
    }

    // Слушаем изменения в select и выводим выбранное значение
    selectElement.addEventListener('change', (event) => {
      const selectedValue = event.target.value
      emits('update:modelValue', selectedValue)
    })
  }
})
// Следим за изменением modelValue и обновляем select
watch(() => props.modelValue, (newValue) => {
  const selectElement = document.getElementById(props.id)
  if (selectElement) {
    selectElement.value = newValue
  }
})
</script>

<template>
  <select :class="className" :name="id" :id="id" :value="modelValue"></select>
</template>

<style scoped></style>
