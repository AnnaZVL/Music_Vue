import { createRouter, createWebHistory } from 'vue-router'

import BaseHome from '@/views/HomePage/BaseHome.vue'
import BasePersonal from '@/views/BasePersonal.vue'
import HeroPersonal from '@/views/HeroBlock/HeroPersonal.vue'
import EventPersonal from '@/views/Events/EventPersonal.vue'
import CatalogPersonal from '@/views/Catalog/CatalogPersonal.vue'
import DownloadsBase from '@/views/Downloads/DownloadsBase.vue'
import StepOne from '@/views/Downloads/components/StepOne.vue'
import StepTwo from '@/views/Downloads/components/StepTwo.vue'
import StepThree from '@/views/Downloads/components/StepThree.vue'
import StepFour from '@/views/Downloads/components/StepFour.vue'
import StepFive from '@/views/Downloads/components/StepFive.vue'
import StepPayment from '@/views/Downloads/components/StepSix.vue'
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
          path: 'downloads',
          name: 'downloads',
          component: DownloadsBase,
          children: [
            {
              path: 'step1/:type',
              name: 'step1',
              component: StepOne,
              
            },
            {
              path: 'step2/:type',
              name: 'step2',
              component: StepTwo,              
            },
            {
              path: 'step3/:type',
              name: 'step3',
              component: StepThree,              
            },
            {
              path: 'step4/:type',
              name: 'step4',
              component: StepFour,              
            },
            {
              path: 'step5/:type',
              name: 'step5',
              component: StepFive,              
            },
            {
              path: 'step6/:type',
              name: 'payment6',
              component: StepPayment,              
            },
          ]
        }
      ]
    }
  ],
  linkActiveClass: 'active-route',
  linkExactActiveClass: 'active-route'
})

export default router
