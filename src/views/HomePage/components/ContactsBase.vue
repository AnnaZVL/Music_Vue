<script setup>
import IconVK from '@/components/Layout/UI/SVG/IconVK.vue'
import IconWA from '@/components/Layout/UI/SVG/IconWA.vue'
import IconTG from '@/components/Layout/UI/SVG/IconTG.vue'
import IconMail from '@/components/Layout/UI/SVG/IconMail.vue'
</script>

<template>
  <div class="contacts">
    <div class="contacts__inner">
      <div class="contacts__hidden">
        <a class="contacts__link" href="https://vk.com/" aria-label="Перейти в VK" target="_blank">
          <IconVK class="contacts__icon"/>
        </a>
        <a
          class="contacts__link"
          href="https://wa.me/"
          aria-label="Перейти в Ватсап"
          target="_blank"
        >
          <IconWA class="contacts__icon"/>
        </a>
        <a class="contacts__link" href="mailtto:" aria-label="Перейти в почту" target="_blank">
          <IconMail class="contacts__icon"/>
        </a>
      </div>
      <a
        class="contacts__link"
        href="https://t.me/"
        aria-label="Перейти в Телеграмм"
        target="_blank"
      >
        <IconTG class="contacts__icon" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.contacts {
  padding: 15px;
  width: max-content;
}

.contacts__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  position: relative;
  width: max-content;
}

.contacts__link {
  display: block;
  cursor: pointer;
}

.contacts__icon {
  width: 60px;
  height: 60px;
  transition: fill 0.3s ease-in-out;
}

.contacts__link > .contacts__icon {
  fill: var(--color-white);
  width: 60px;
  height: 60px;
}

.contacts__link:hover > .contacts__icon {
  fill: var(--color-blue);
}

.contacts__hidden {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: max-content;
  height: 100%;
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;

  transition:
    opacity 0.3s ease-out,
    visibility 0.3s ease-out,
    transform 0.3s ease-out;
}

.contacts:hover .contacts__hidden {
  opacity: 1;
  visibility: visible;
  transform: translateX(35%) translateY(-50%);
}
</style>
