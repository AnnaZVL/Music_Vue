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
    path: { name: 'Hero' },    
  },
  {
    id: 1,
    text: 'События',
    icon: IconCalendar,
    path: { name: 'Events' },    
  },
  {
    id: 2,
    text: 'Мой профиль',
    icon: IconUser,
    path: { name: 'Profile' },    
  },
  {
    id: 3,
    text: 'Сообщения',
    icon: IconComment,
    path: '',    
  }
]

export const destribMenu = [
  {
    id: 20,
    text: 'Мой каталог',
    icon: IconDisribut,
    path: { name: 'Catalog' },    
  },
  {
    id: 21,
    text: 'Статистика',
    icon: IconStatic,
    path: { name: 'Statistics' },     
  },
  {
    id: 22,
    text: 'Мультиссылка',
    icon: IconLink,
    path: { name: 'Multilink'},    
  },
  {
    id: 23,
    text: 'Поддержка',
    icon: IconSupport,
    path: '',    
  }
]

export const marketplaseMenu = [
  {
    id: 30,
    text: 'Финансы',
    icon: IconFinanse,
    path: { name: 'Finance' },    
  },
  {
    id: 31,
    text: 'Партнерка',
    icon: IconPartner,
    path: '',     
  },
  {
    id: 32,
    text: 'Обучение',
    icon: IconEducation,
    path: { name: 'Education' },     
  },
  {
    id: 33,
    text: 'Информация',
    icon: IconInfo,
    path: '',    
  },
]