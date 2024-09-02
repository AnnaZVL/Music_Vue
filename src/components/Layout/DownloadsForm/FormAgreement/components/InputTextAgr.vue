<script setup>
import { useField } from 'vee-validate'

const props = defineProps(['title', 'name', 'type', 'placeholder'])

const { value, errorMessage } = useField(props.name)
</script>

<template>
  <label class="form__label" :for="name">
    {{ title }}
    <input
      :type="type"
      :id="name"
      :placeholder="placeholder"
      v-model="value"
      :class="{ 'is-error': errorMessage }"
    />
    <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
  </label>
</template>

<style>
.form__label {
  margin-bottom: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  width: 100%;
  font-size: 16px;
}

.form__label input {
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
  border: 1px solid var(--color-white);
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}

.form__label input:focus,
.form__label input:active {
  border: 1px solid var(--color-blue);
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}

.form__label input::placeholder {
  color: var(--color-gray);
  opacity: 0.7;
}

.form__label input:focus::placeholder {
  opacity: 0;
}

.error {
  position: absolute;
  bottom: -19px;
  left: 10px;
  font-size: 12px;
  color: var(--color-second);
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
}

.form__label input.is-error {
  border-color: var(--color-second);
}

.form__label input[type='date']::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 20px;
  z-index: 3;
  transform: translateY(-50%);
  pointer-events: none;
  background-image: url(@/assets/img/icons/icon_calendar.svg);
  width: 20px;
  height: 20px;
}
</style>
