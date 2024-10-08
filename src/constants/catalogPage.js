export const filterOptions = [
  { id: 1, name: 'По исполнителю', value: 'autor' },
  { id: 2, name: 'По названию', value: 'name' },
  { id: 3, name: 'По статусу', value: 'status' }
]

export const listCatalog = [
  {
    id: 0,
    img: new URL('@/assets/img/personal_page/albums/Miller.jpg', import.meta.url).href,
    title: 'Название трека',
    singer: 'Имя исполнителя',
    date: '2024-08-25',
    status: 'pending',
    link: false
  },
  {
    id: 1,
    img: new URL('@/assets/img/personal_page/albums/Miller.jpg', import.meta.url).href,
    title: 'Название трека',
    singer: 'Имя исполнителя',
    date: '2024-08-25',
    status: 'loaded',
    link: true
  }
]
