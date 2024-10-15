export const menu = ['Транзакции', 'Отчеты']

export const selectOptions = [
    { id: 0, name: 'Онлайн касса', value: 'online' },
    { id: 1, name: 'Наличные', value: 'cash' },
    { id: 2, name: 'По СБП', value: 'sbp' },
    ]

export const cardsTrans = [
    { id: 0,
        title: 'Дистрибуция',
        cash: 125632,
        descr: 'Все транзакции',
        isBtn: false
    },
    { id: 1,
        title: 'Партнерка',
        cash: 300,
        descr: 'Все транзакции',
        isBtn: false
    },
    { id: 2,
        title: 'Доступный баланс',
        cash: 3120,
        descr: 'Все транзакции',
        isBtn: true
    },
    { id: 3,
        title: 'Прослушиваний',
        count: 1300,        
        isBtn: false
    },
    { id: 4,
        title: 'Загружено треков',
        count: 300,        
        isBtn: false
    },
    { id: 5,
        title: 'Лайков',
        count: 20,       
        isBtn: false
    },
]

export const rezaltList = [
    {id: 0,
        date:'15.09.2024',
        descr: 'Вывод средств одобрен',
        sum: -10050,
        balance: 100
    },
    {id: 1,
        date:'20.09.2024',
        descr: 'Роялти за трек 2',
        sum: 1200,
        balance: 1300
    },
    {id: 2,
        date:'21.09.2024',
        descr: 'Роялти за трек 1',
        sum: 500,
        balance: 1800
    },
]