import { createRouter, createWebHistory } from 'vue-router'
import BasePersonal from '@/views/BasePersonal.vue'
import HeroPersonal from '@/views/HeroBlock/HeroPersonal.vue'
import EventPersonal from '@/views/Events/EventPersonal.vue'
import CatalogPersonal from '@/views/Catalog/CatalogPersonal.vue'
import DownloadsBase from '@/views/Downloads/DownloadsBase.vue'
import StepOne from '@/views/Downloads/components/StepOne.vue'
import StepTwo from '@/views/Downloads/components/StepTwo.vue'
import StepThree from '@/views/Downloads/components/StepThree.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: BasePersonal,
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
              path: '/step1/:type',
              name: 'step1',
              component: StepOne,
              
            },
            {
              path: '/step2/:type',
              name: 'step2',
              component: StepTwo,              
            },
            {
              path: '/step3/:type',
              name: 'step3',
              component: StepThree,              
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
