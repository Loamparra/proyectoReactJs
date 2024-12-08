const products = [
    {
        id: "1",
        name: "Converse",
        price: 75000,
        category: "urban",
        img: "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/1/6/169953C_0.jpg",
        stock: 20,
        description: "Material de lona, color Negro, botita",
    },
    {
        id: "2",
        name: "Adidas",
        price: 120000,
        category: "sport",
        img:"https://newsport.vte xassets.com/arquivos/ids/19375592/IE0527-A.jpg?v=638614925202030000",
        stock: 8,
        description: "Material de tela, color Gris",
    },
    {
        id: "3",
        name: "John Foos",
        price: 87000,
        category: "urban",
        img: "https://woker.vtexassets.com/arquivos/ids/402206-800-800?v=638325407929200000&width=800&height=800&aspect=true",
        stock: 4,
        description: "Material de tela, color Negro",
    },
    {
        id: "4",
        name: "Nike",
        price: 120000,
        category: "sport",
        img: "https://http2.mlstatic.com/D_956232-MLA74797313903_022024-O.jpg",
        stock: 0,
        description: "Material tela, color Negro",
    },
    {
        id: "5",
        name: "Adidas",
        price: 87000,
        category: "urban",
        img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/421756b633a84c3580a4ae8901801435_9366/Zapatillas_adidas_Grand_Court_Cloudfoam_Comfort_Negro_GW9196_01_00_standard.jpg",
        stock: 4,
        description: "Material de cuero, color Negro",
    },
    {
        id: "6",
        name: "Jaguar",
        price: 120000,
        category: "sport",
        img: "data:image/jpeg;base64,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",
        stock: 0,
        description: "Material tela, color negro, blanco, rosa y celeste",
    },
    {
        id: "7",
        name: "Jaguar",
        price: 87000,
        category: "urban",
        img: "https://http2.mlstatic.com/D_NQ_NP_634021-MLA72265967924_102023-O.webp",
        stock: 4,
        description: "Material de tela, color Negro, con plataforma",
    },
    {
        id: "8",
        name: "Puma",
        price: 120000,
        category: "sport",
        img: "https://http2.mlstatic.com/D_NQ_NP_730014-MLA76679519584_062024-O.webp",
        stock: 0,
        description: "Material tela, color Blanco y Azul",
    },
];

export const totalProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500);
    });
};

export const totalProductsCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1500);
    });
}

export const totalProductId = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 1500);
    });
};
