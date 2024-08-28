<script setup>
import Choices from 'choices.js'
import { onMounted } from 'vue'

const props = defineProps(['filterOptions'])

onMounted(() => {
  const selectElement = document.getElementById('filter')
  if (selectElement) {
    // Инициализируем Choices
    const choices = new Choices(selectElement, {
      searchEnabled: false,
      allowHTML: true
    })

    // Добавляем опции из props в Choices
    props.filterOptions.forEach((option) => {
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
  <select class="catalog__filter" name="filter" id="filter"></select>
</template>

<style scoped></style>
