<script setup>
import SectionTitle from '@/components/Layout/Content/TitleSectionPersonal.vue'

defineProps(['title'])
</script>

<template>
  <section class="personal-section">
    <SectionTitle>{{ title }}</SectionTitle>
    <slot name="body" />
  </section>
</template>

<style scoped>
.personal-section {
  padding: 20px;
  flex-shrink: 1;
  border-radius: 20px;
  border: 1px solid rgba(83, 95, 246, 0.4);
}
</style>
