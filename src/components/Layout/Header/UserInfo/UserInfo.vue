<script setup>
import IconComment from '@/components/Layout/UI/SVG/IconComment.vue';
import IconNotifi from '@/components/Layout/UI/SVG/IconNotifi.vue';

import { useUserStore } from '@/stores/userStore';
import { getImagePath } from '@/helpers/imgPath';

const userStore = useUserStore()
</script>

<template>
  <div class="user">
    <button class="user__btn btn">
        <IconComment class="user__icon"/>      
    </button>
    <button class="user__btn btn">+</button>
    <button class="user__btn btn">
        <IconNotifi class="user__icon"/>     
    </button>
    <div class="user__avatar">
      <img :src=getImagePath(userStore.currentUser.img) alt="" />
      <span class="user__check">300</span>
    </div>
  </div>
</template>

<style scoped>
.user {
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
}

.user__btn {
    font-size: 40px;
    color: var(--color-white);
    transition: transform 0.3s ease-in-out;
}

.user__btn:hover {
    transform: scale(1.1);
}

.user__icon {
    fill: var(--color-white);
    width: 30px;
    height: 30px;
}
.user__avatar {
    display: flex;
    gap: 7px;
    align-items: center;
}

.user__avatar img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
}

.user__check {
    padding-right: 15px;
    position: relative;
}

.user__check::before {
    content: '₽';
    position: absolute;
    right: 0px;    
}

@media (max-width: 768px) {
    .user {
        margin-left: 0;
    }
}
</style>
