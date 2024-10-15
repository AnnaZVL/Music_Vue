import { createRouter, createWebHistory } from 'vue-router'

import BaseHome from '@/views/HomePage/BaseHome.vue'
import BasePersonal from '@/views/PersonalPages/BasePersonal.vue'
import HeroPersonal from '@/views/PersonalPages/HeroBlock/HeroPersonal.vue'
import EventPersonal from '@/views/PersonalPages/Events/EventPersonal.vue'
import CatalogPersonal from '@/views/PersonalPages/Catalog/CatalogPersonal.vue'
import ProfilePersonal from '@/views/PersonalPages/Profile/ProfilePersonal.vue'
import EducationPersonal from '@/views/PersonalPages/Education/EducationPersonal.vue'
import FinancePersonal from '@/views/PersonalPages/Finance/FinancePersonal.vue'
import MultilinkPersonal from '@/views/PersonalPages/Multilink/MultilinkPersonal.vue'
import DownloadsBase from '@/views/PersonalPages/Downloads/DownloadsBase.vue'

import HeaderHome from '@/components/Layout/Header/HeaderHome.vue'
import HeaderPersonal from '@/components/Layout/Header/HeaderPersonal.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: BaseHome, header: HeaderHome },
    },
    {
      path: '/personal',
      name: 'personal',
      components: { default: BasePersonal, header: HeaderPersonal },
      children: [
        {
          path: '',
          name: 'Hero',
          component: HeroPersonal
        },
        {
          path: 'events',
          name: 'Events',
          component: EventPersonal
        },
        {
          path: 'catalog',
          name: 'Catalog',
          component: CatalogPersonal
        },
        {
          path: 'profile',
          name: 'Profile',
          component: ProfilePersonal,                  
        }, 
        {
          path: 'education',
          name: 'education',
          component: EducationPersonal,                  
        },
        {
          path: 'finance',
          name: 'finance',
          component: FinancePersonal,                  
        },
        {
          path: 'multilink',
          name: 'multilink',
          component: MultilinkPersonal,                  
        },
        {
          path: 'downloads',
          name: 'downloads',
          component: DownloadsBase,                  
        }
      ]
    }
  ],
  linkActiveClass: 'active-route',
  linkExactActiveClass: 'active-route'
})

export default router
