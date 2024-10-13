import IconCalendar from '@/components/Layout/UI/SVG/IconCalendar.vue'
import IconHome from '@/components/Layout//UI/SVG/IconHome.vue'
import IconUser from '@/components/Layout//UI/SVG/IconUser.vue'
import IconDisribut from '@/components/Layout//UI/SVG/IconDisribut.vue'
import IconStatic from '@/components/Layout//UI/SVG/IconStatic.vue'
import IconLink from '@/components/Layout//UI/SVG/IconLink.vue'
import IconSupport from '@/components/Layout//UI/SVG/IconSupport.vue'
import IconComment from '@/components/Layout/UI/SVG/IconComment.vue'
import IconFinanse from '@/components/Layout/UI/SVG/IconFinanse.vue'
import IconPartner from '@/components/Layout/UI/SVG/IconPartner.vue'
import IconEducation from '@/components/Layout/UI/SVG/IconEducation.vue'
import IconInfo from '@/components/Layout/UI/SVG/IconInfo.vue'

export const topMenu = [
  {
    id: 0,
    text: 'Главная',
    icon: IconHome,
    path: {name: 'Hero'},
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
    text: 'Мой профиль',
    icon: IconUser,
    path: '',
    disabled: false
  },
  {
    id: 3,
    text: 'Сообщения',
    icon: IconComment,
    path: '',
    disabled: false
  }
]

export const destribMenu = [
  {
    id: 20,
    text: 'Мой каталог',
    icon: IconDisribut,
    path: {name: 'Catalog'},
    disabled: false
  },
  {
    id: 21,
    text: 'Статистика',
    icon: IconStatic,
    path: '',    //{ name: 'downloads'},
    disabled: false
  },
  {
    id: 22,
    text: 'Мультиссылка',
    icon: IconLink,
    path: '',
    disabled: false
  },
  {
    id: 23,
    text: 'Поддержка',
    icon: IconSupport,
    path: '',
    disabled: true
  }
]

export const marketplaseMenu = [
  {
    id: 30,
    text: 'Финансы',
    icon: IconFinanse,
    path: '', //{name: 'Catalog'},
    disabled: false
  },
  {
    id: 31,
    text: 'Партнерка',
    icon: IconPartner,
    path: '', //{name: 'Catalog'},
    disabled: false
  },
  {
    id: 32,
    text: 'Обучение',
    icon: IconEducation,
    path: '', //{name: 'Catalog'},
    disabled: false
  },
  {
    id: 33,
    text: 'Информация',
    icon: IconInfo,
    path: '', //{name: 'Catalog'},
    disabled: false
  },
]