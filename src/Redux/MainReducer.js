const addOrder = 'ADD-ORDER'
const delOrder = 'DEL-ORDER'

const MainInitial = {
    SalesHits:
    {
        SalesHitsData:
            [
                { heading: 'Игровые Наушнки', cost:`${5000}р`, img: 'https://avatars.mds.yandex.net/i?id=2df74f5b71423e38f23130d92851966f0570bcde-8438571-images-thumbs&n=13', id: 1 },
                { heading: 'Игровая Мышка', cost: `${4000}р`, img: 'https://avatars.mds.yandex.net/i?id=6c87d8ac4d5379ed81e542684695d7352c131d7c-4414558-images-thumbs&n=13', id: 2 },
                { heading: 'Компьютер', cost:`${200000}р`, img: 'https://avatars.mds.yandex.net/i?id=a85d49cb736fcd7e80822d0d71d79df23eaf2a53-9065739-images-thumbs&n=13', id: 3 },
                { heading: 'Монитор', cost:`${30000}р`, img: 'https://avatars.mds.yandex.net/i?id=67ffa318b7e633049101f4c4b6a242650bc416a2-7612965-images-thumbs&n=13', id: 4 },
                { heading: 'Видеокарта', cost: `${50000}р`, img: 'https://avatars.mds.yandex.net/i?id=2bd4a26fa7e35a5b71ac4dbfdc54385e0cd730ec-8179254-images-thumbs&n=13', id: 5 },
                { heading: 'Игровой Стол', cost:`${25000}р`, img: 'https://avatars.mds.yandex.net/i?id=97333768f668fdce344b228f94898e3c4e289787-6997554-images-thumbs&n=13', id: 6 },
                { heading: 'Коврик', cost: `${3000}р`, img: 'https://avatars.mds.yandex.net/i?id=cf9b10b2479195b2af04cc43026c4ad9018a5cb3-8155455-images-thumbs&n=13', id: 7 },
                { heading: 'Клавиатура', cost:`${10000}р`, img: 'https://avatars.mds.yandex.net/i?id=4d15428feee04634acd4bbce84e8510d455c232c-5856111-images-thumbs&n=13', id: 8 },
                { heading: 'Процессор', cost: `${20000}р`, img: 'https://avatars.mds.yandex.net/i?id=f6113085e2ed6d3a42391a6c3cc213454a0f51dc-4502909-images-thumbs&n=13', id: 9 },
                { heading: 'Материнская Плата', cost: `${15000}р`, img: 'https://avatars.mds.yandex.net/i?id=abd5e8fb4a554495078ceec1a04be9e7f92a8d94-8492330-images-thumbs&n=13', id: 10 }
            ]    
    },
    OrdersPage:
    {
        OrdersPageData:
            [
                { heading: 'Игровые Наушнки', cost:`${5000}р`, img: 'https://avatars.mds.yandex.net/i?id=2df74f5b71423e38f23130d92851966f0570bcde-8438571-images-thumbs&n=13', id: 1, firstDate:'Заказ от 18 марта',secondDate:'Прибудет до 23 марта' },
                { heading: 'Игровая Мышка', cost: `${4000}р`, img: 'https://avatars.mds.yandex.net/i?id=6c87d8ac4d5379ed81e542684695d7352c131d7c-4414558-images-thumbs&n=13', id: 2, firstDate:'Заказ от 16 марта',secondDate:'Прибудет до 21 марта' },
                { heading: 'Компьютер', cost:`${200000}р`, img: 'https://avatars.mds.yandex.net/i?id=a85d49cb736fcd7e80822d0d71d79df23eaf2a53-9065739-images-thumbs&n=13', id: 3, firstDate:'Заказ от 20 марта',secondDate:'Прибудет до 27 марта' }
            ]
    }
}

export const addOrderActionCreator = (name, cost, Image) => {
    let id = MainInitial.OrdersPage.OrdersPageData.length + 1
    let action = {
        type: addOrder,
        heading:name,
        cost: cost,
        img: Image,
        id: id
    }
    return action
}
export const delOrderActionCreator = (id) => {
    let action = {
        type: delOrder,
        id:id
    }
    return action
}
const MainReducer = (state = MainInitial,action) => {
    switch (action.type) {
        case addOrder:
            let newOrder = {
                heading: action.heading,
                cost: action.cost,
                img: action.img,
                id: action.id,
                firstDate: 'Заказ от 18 марта',
                secondDate: 'Прибудет до 23 марта'
            }
            state.OrdersPage.OrdersPageData.push(newOrder)
            return state
        case delOrder:
            state.OrdersPage.OrdersPageData.forEach(item => {
                if (item.id === action.id) {
                    state.OrdersPage.OrdersPageData.splice(item, 1)
                }
            })
            return state
        default:return state
    }
}

export default MainReducer