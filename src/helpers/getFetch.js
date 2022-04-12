



export const combos = [
    {
        id: 'Kumara k552',
        title: 'Teclado Red Dragon Kumara K552',
        description:'rgb switch red', 
        image: 'https://ibb.co/kS66kKv',
        categoria:'Teclados',
        price: 6499,
        stock: 7
    },
    {
        id: 'Logitech g203',
        title: 'Mouse Logitech G203',
        description:'Consta de 6 botones, de los cuales dos son laterales', 
        image: 'https://ibb.co/HP73120',
        categoria:'Mouses',
        price: 3200,
        stock: 18
    },
    {
        id:'mp redDragon',
        title: 'Mousepad Red Dragon',
        description:' 420mm x 880mm x 4mm negro/rojo', 
        image: 'https://ibb.co/xhC5zdb',
        categoria:'Componentes',
        price: 2699,
        stock: 15
    },
]

export const getFetch = new Promise((resolve, reject)=>{

    let url = 'vortix.com'

    if (url === 'vortix.com') {
        setTimeout(() => {
            resolve(combos)
        }, 2000);
    }else{
        reject('404 not found')
    }
    })

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(combos)
            }, 2000);
        })
    }
    export default getItem