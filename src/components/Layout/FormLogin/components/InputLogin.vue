<script setup>
import IconPasswordHidden from '@/components/Layout/UI/SVG/IconPasswordHidden.vue'
import IconPasswordShowed from '@/components/Layout/UI/SVG/IconPasswordShowed.vue'

import { useField } from 'vee-validate'
import { ref } from 'vue'

const props = defineProps(['title', 'type', 'name', 'placeholder'])

const onVisible = ref(false)

const { value, errorMessage } = useField(props.name)

// Смена иконки в поле пароля
const changeVisible = () => {
  onVisible.value = !onVisible.value
}
</script>

<template>
  <label class="label" :for="name">
    {{ title }}
    <input
      class="input"
      :type="type === 'password' && onVisible ? 'text' : type"
      :placeholder="placeholder"
      :id="name"
      autocomplete="off"
      v-model="value"
      :class="{ 'is-error': errorMessage }"
    />
    <div class="icon" v-if="type === 'password'">
      <IconPasswordHidden
        v-if="!onVisible"
        @click="changeVisible"
        title="Раскрыть"
        alt="Раскрыть"
      ></IconPasswordHidden>
      <IconPasswordShowed
        v-else
        @click="changeVisible"
        title="Спрятать"
        alt="Спрятать"
      ></IconPasswordShowed>
    </div>
    <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
  </label>
</template>

<style scoped>
input[type='password']::-ms-reveal,
input[type='password']::-ms-clear {
  display: none;
}

.label {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  width: 100%;
  font-size: 18px;
}

.input {
  padding: 13px 20px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: var(--color-gray);
  background-color: var(--color-bg);
  border: none;
  transition: all 0.2s linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  transition: border 0.3s ease-in-out;
}

.input.is-error {
  border-color: var(--color-second);
}

.input:focus,
.input:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}

.input::placeholder {
  color: var(--color-gray);
  opacity: 0.7;
  transition: all 0.2s linear;
}

.error {
  position: absolute;
  bottom: -25px;
  left: 10px;
  font-size: 12px;
  color: var(--color-second);
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
}

.icon {
  padding: 7px;
  position: absolute;
  right: 13px;
  bottom: 2px;
  width: 20px;
  box-sizing: content-box;
  cursor: pointer;
}
</style>
