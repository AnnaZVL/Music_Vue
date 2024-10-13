<script setup>
import { useUserStore } from '@/stores/userStore';

import { getImagePath } from '@/helpers/imgPath'

const userStore = useUserStore()
</script>

<template>
    <div class="user">
        <img class="user__avatar" :src="getImagePath(userStore.currentUser.img)" alt="Аватар">
        <span class="user__name">{{ userStore.currentUser.name }}</span>
    </div>
</template>

<style scoped>
.user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.user__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--color-blue);
    background-color: var(--color-gray);
}

.user__name {
    font-size: 14px;    
    color: var(--color-white);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100px;
}

.user__name::first-letter {
    text-transform: uppercase;
}
</style>