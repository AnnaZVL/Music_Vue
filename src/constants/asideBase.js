import IconCalendar from '@/components/Layout/UI/SVG/IconCalendar.vue'
import IconHome from '@/components/Layout//UI/SVG/IconHome.vue'
import IconUser from '@/components/Layout//UI/SVG/IconUser.vue'
import IconDisribut from '@/components/Layout//UI/SVG/IconDisribut.vue'
import IconStatic from '@/components/Layout//UI/SVG/IconStatic.vue'
import IconLink from '@/components/Layout//UI/SVG/IconLink.vue'
import IconSupport from '@/components/Layout//UI/SVG/IconSupport.vue'

export const topMenu = [
  {
    id: 0,
    text: 'Главная',
    icon: IconHome,
    path: {name: 'personal'},
    disabled: false
  },
  {
    id: 1,
    text: 'События',
    icon: IconCalendar,
    path: {name: 'Events'},
    disabled: false
  },
  {
    id: 2,
    text: 'Личный кабинет',
    icon: IconUser,
    path: '',
    disabled: true
  }
]

export const secondMenu = [
  {
    id: 20,
    text: 'Мой каталог',
    icon: IconDisribut,
    path: {name: 'Catalog'},
    disabled: false
  },
  {
    id: 21,
    text: 'Релиз на дистрибуцию',
    icon: IconStatic,
    path: { name: 'downloads'},
    disabled: false
  },
  {
    id: 22,
    text: 'Мультиссылка',
    icon: IconLink,
    path: '',
    disabled: true
  },
  {
    id: 23,
    text: 'Поддержка',
    icon: IconSupport,
    path: '',
    disabled: true
  }
]
