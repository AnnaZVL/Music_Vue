import IconDisribut from '@/components/Layout/UI/SVG/IconDisribut.vue'
import IconMinus from '@/components/Layout/UI/SVG/IconMinus.vue'
import IconLink from '@/components/Layout/UI/SVG/IconLink.vue'

export const menu = [
  {
    text: 'Релиз на дистрибуцию',
    icon: IconDisribut,
    disabled: false,
    path: {name: 'Downloads'}
  },
  {
    text: 'Минус на продажу',
    icon: IconMinus,
    disabled: true,
    path: ''
  },
  {
    text: 'Сделать мультиссылку',
    icon: IconLink,
    disabled: true,
    path: ''
  }
]
