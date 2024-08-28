import { createRouter, createWebHistory } from 'vue-router'
import BasePersonal from '@/views/BasePersonal.vue'
import HeroPersonal from '@/views/HeroBlock/HeroPersonal.vue'
import EventPersonal from '@/views/Events/EventPersonal.vue'
import CatalogPersonal from '@/views/Catalog/CatalogPersonal.vue'

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
        }
      ]
    }
  ],
  linkActiveClass: 'active-route',
  linkExactActiveClass: 'active-route'
})

export default router