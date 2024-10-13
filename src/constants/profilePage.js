import IconStar from "@/components/Layout/UI/SVG/IconStar.vue"
import IconAcceleration from "@/components/Layout/UI/SVG/IconAcceleration.vue"
import IconTaste from "@/components/Layout/UI/SVG/IconTaste.vue"
import IconBreak from "@/components/Layout/UI/SVG/IconBreak.vue"
import IconEvent from "@/components/Layout/UI/SVG/IconEvent.vue"
import IconAutor from "@/components/Layout/UI/SVG/IconAutor.vue"

export const profileInfo = [
    {
        id: 0,
        count: 0,
        text: 'подписчиков'
    },
    {
        id: 1,
        count: 3580,
        text: 'прослушиваний'
    },
    {
        id: 0,
        count: 10,
        text: 'лайков'
    },
]

export const profileMenu = [
    {
        id: 0,
        title: 'Достижения',        
    },
    {
        id: 1,
        title: 'Лента',        
    },
    {
        id: 2,
        title: 'Релизы',        
    },
    {
        id: 3,
        title: 'Продажа',        
    },
    {
        id: 4,
        title: 'Турниры',        
    },
    {
        id: 5,
        title: 'Обложки',        
    }
]

export const profileCards = [
    {
        id: 0,
        title: 'Звезду заметили',
        text: '500 прослушиваний',
        icon: IconStar,
        type: 'hexagon',
        isDisabled: false
    },
    {
        id: 1,
        title: 'Набираем обороты',
        text: '1000 прослушиваний',
        icon: IconAcceleration,
        type: 'circle',
        isDisabled: false
    },
    {
        id: 2,
        title: 'Вошли во вкус',
        text: '10000 прослушиваний',
        icon: IconTaste,
        type: 'square',
        isDisabled: false
    },
    {
        id: 3,
        title: 'Серьезный прорыв',
        text: '15000 прослушиваний',
        icon: IconBreak,
        type: 'square',
        isDisabled: true
    },
    {
        id: 4,
        title: 'Событийный',
        text: 'Участвовал в 5 событиях',
        icon: IconEvent,
        type: 'circle',
        isDisabled: true
    },
    {
        id: 5,
        title: 'Супер автор',
        text: 'Загрузил 5 песен на продажу',
        icon: IconAutor,
        type: 'hexagon',
        isDisabled: true
    },
]