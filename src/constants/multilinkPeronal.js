export const searchOptions = [
    { id: 0, name: 'По исполнителю', value: 'autor' },
    { id: 1, name: 'По названию', value: 'name' },
    { id: 2, name: 'По просмотрам', value: 'status' },
]

export const trackList = [
    {
        id: 0,
        img: new URL('@/assets/img/personal_page/albums/Kancler.webp', import.meta.url).href,
        title: 'Some title',
        autor: 'Djon Smit',
        views: 7,
        linkСlicks: 2
    },
    {
        id: 1,
        img: new URL('@/assets/img/personal_page/albums/Miller.jpg', import.meta.url).href,
        title: 'Secondtrack',
        autor: 'Alex Coen',
        views: 10,
        linkСlicks: 5
    }

]