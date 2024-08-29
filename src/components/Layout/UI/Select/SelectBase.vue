<script setup>
import Choices from 'choices.js'
import { onMounted } from 'vue'

const props = defineProps(['optionsList', 'id', 'className'])

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

    // Слушаем изменения в select и выводим выбранное значение
    selectElement.addEventListener('change', (event) => {
      const selectedValue = event.target.value
      console.log(selectedValue)
    })
  }
})
</script>

<template>
  <select :class="className" :name="id" :id="id"></select>
</template>

<style scoped></style>
