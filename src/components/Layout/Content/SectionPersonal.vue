<script setup>
import SectionTitle from '@/components/Layout/Content/TitleSectionPersonal.vue'

defineProps({
  title: String,
  isUser: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="personal-section"> 
    <SectionTitle :isUser="isUser" :title="title"></SectionTitle>
    
    <slot name="body" />
  </section>
</template>

<style >
.personal-section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 1;
  border-radius: 20px;
  border: 1px solid rgba(83, 95, 246, 0.4);
}

@media (max-width: 562px) {
  .personal-section {
    padding: 10px;
  }  
}
</style>
