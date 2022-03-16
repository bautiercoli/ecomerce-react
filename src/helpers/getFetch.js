



export const combos = [
    {
        id: 'Kumara k552',
        title: 'Teclado Red Dragon Kumara K552',
        description:'rgb switch red', 
        img: 'https://http2.mlstatic.com/D_NQ_NP_974168-MLA32732835038_112019-O.webp',
        categoria:'Teclados',
        price: 6499,
        stock: 7
    },
    {
        id: 'Logitech g203',
        title: 'Mouse Logitech G203',
        description:'Consta de 6 botones, de los cuales dos son laterales', 
        img: 'https://www.venex.com.ar/products_images/1597440443_iil224907641025.png',
        categoria:'Mouses',
        price: 3200,
        stock: 18
    },
    {
        id:'mp redDragon',
        title: 'Mousepad Red Dragon',
        description:' 420mm x 880mm x 4mm negro/rojo', 
        img: 'https://http2.mlstatic.com/D_NQ_NP_707400-MLA40721875180_022020-O.webp',
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