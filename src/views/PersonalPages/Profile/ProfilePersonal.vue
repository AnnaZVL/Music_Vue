<script setup>
import SectionPersonal from '@/components/Layout/Content/SectionPersonal.vue'
import InfoItem from '@/components/Layout/Content/InfoItem.vue'
import ProfileCard from './components/ProfileCard.vue'
import SectionMenu from '@/components/Layout/Content/SectionMenu.vue'

import { profileInfo, profileCards, profileMenu } from '@/constants/profilePage'

import { getImagePath } from '@/helpers/imgPath'

import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'

const isActive = ref(0)
const userStore = useUserStore()

const changaActive = (id) => {  isActive.value = id
   
}
</script>

<template>
  <SectionPersonal class="profile" :isUser="true" title="Мой профиль">
    <template #body>
      <div class="profile__top">
        <div class="profile__img">
          <img :src="getImagePath(userStore.currentUser.img)" alt="Личное фото" />
        </div>
        <div class="profile__body">
          <h4 class="profile__name">{{ userStore.currentUser.name }}</h4>
          <ul class="profile__info">
            <InfoItem
              v-for="item in profileInfo"
              :key="item.id"
              :count="item.count"
              :text="item.text"
            />
          </ul>
        </div>        
      </div>

      <SectionMenu :menu="profileMenu" @toggle-menu="changaActive" />

      <div class="profile__cards">
        <ProfileCard
          v-for="card in profileCards"
          :key="card.id"
          :title="card.title"
          :text="card.text"
          :icon="card.icon"
          :type="card.type"
          :isDisabled="card.isDisabled"
        />
      </div>
    </template>
  </SectionPersonal>
</template>

<style scoped>
.profile__top {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  width: 100%;
}

.profile__img img {
  border-radius: 20px;
  width: 150px;
  height: 150px;
}

.profile__body {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.profile__name {
  padding-right: 30px;
  position: relative;
  font-size: 28px;
  width: max-content;
}

.profile__name::before {
  content: '✔';
  padding: 2px;
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: var(--color-blue);
  color: var(--color-white);
  font-size: 14px;
}

.profile__info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.profile__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px 20px;
  width: 100%;
}

@media (max-width: 768px) {
    .profile__top {
        flex-direction: column;
    }
}
</style>
