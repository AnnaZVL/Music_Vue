export const eventNewList = [
  {
    id: 1,
    name: 'название события',
    path: new URL('@/assets/img/personal_page/albums/Kancler.webp', import.meta.url).href,
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorum.',
    prize: 2000,
    like: true
  },
  {
    id: 2,
    name: 'название события',
    path: new URL('@/assets/img/personal_page/albums/Miller.jpg', import.meta.url).href,
    descr: 'Lorem ipsum dolor sit amet consectetur.',
    prize: 1000
  }
]

export const eventOldList = [
  {
    id: 1,
    name: 'название события',
    path: new URL('@/assets/img/personal_page/albums/Kancler.webp', import.meta.url).href,
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorum.',
    prize: 2000,
    like: true,
    winner: {
      name: 'Имя победителя',
      single: 'название песни',
      path: new URL('@/assets/img/personal_page/albums/Miller.jpg', import.meta.url).href,
    }
  },
  {
    id: 2,
    name: 'название события',
    path: new URL('@/assets/img/personal_page/albums/Miller.jpg', import.meta.url).href,
    descr: 'Lorem ipsum dolor sit amet consectetur.',
    prize: 1000,
    winner: {
      name: 'Имя победителя',
      single: 'название песни',
      path: new URL('@/assets/img/personal_page/albums/Kancler.webp', import.meta.url).href,
    }
  },
  {
    id: 3,
    name: 'название события',
    path: new URL('@/assets/img/personal_page/albums/Miller.jpg', import.meta.url).href,
    descr: 'Lorem ipsum dolor sit amet consectetur.',
    prize: 1000,
    winner: {
      name: 'Имя победителя',
      single: 'название песни',
      path: new URL('@/assets/img/personal_page/albums/Kancler.webp', import.meta.url).href,
    }
  },
  {
    id: 4,
    name: 'название события',
    path: new URL('@/assets/img/personal_page/albums/Miller.jpg', import.meta.url).href,
    descr: 'Lorem ipsum dolor sit amet consectetur.',
    prize: 1000,
    winner: {
      name: 'Имя победителя',
      single: 'название песни',
      path: new URL('@/assets/img/personal_page/albums/Kancler.webp', import.meta.url).href,
    }
  }
]
