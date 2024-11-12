const products = [
    {
        id: "1",
        name: "Converse",
        price: 70.000,
        category: "urbanas",
        img: "https://www.sportline.com.ar/chuck-taylor-all-star-core-ox-026015000157196/p?idsku=2220910&gad_source=1&gclid=Cj0KCQiA88a5BhDPARIsAFj595jIaC8nOhS6GTkWIGg2MtPnQY8sHLzJNov8ERf3rQ2-p5ID8hNGP28aAk5dEALw_wcB",
        stock: 20,
        description: "Material de lona, color Negro",
    },
    {
        id: "2",
        name: "Adidas",
        price: 120.000,
        category: "Sport",
        img: "https://articulo.mercadolibre.com.ar/MLA-1459320661-zapatillas-response-runner-adidas-sport-78-tienda-oficial-_JM?searchVariation=182134143860#polycard_client=search-nordic&searchVariation=182134143860&position=8&search_layout=grid&type=item&tracking_id=67499506-331c-4320-ab50-3c609c153962&gid=1&pid=1",
        stock: 8,
        description: "Material de tela, color Gris",
    },
    {
        id: "3",
        name: "John Foos",
        price: 87.000,
        category: "urbanas",
        img: "https://articulo.mercadolibre.com.ar/MLA-1361875113-zapatilla-de-media-cana-john-foos-164-flashback-negro-_JM?matt_tool=88962095&matt_word=&matt_source=google&matt_campaign_id=19540564276&matt_ad_group_id=146487984873&matt_match_type=&matt_network=g&matt_device=c&matt_creative=644319175173&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=272504210&matt_product_id=MLA1361875113-177013952417&matt_product_partition_id=1936341476311&matt_target_id=aud-1925157273100:pla-1936341476311&cq_src=google_ads&cq_cmp=19540564276&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=Cj0KCQiA88a5BhDPARIsAFj595jYH1XZOsu1QnjWmB8GlZMjKqEXa8K3ov_fPg49aTiyccbbH2mULrIaAplxEALw_wcB#&gid=1&pid=1",
        stock: 4,
        description: "Material de tela, color Negro",
    },
    {
        id: "4",
        name: "Nike",
        price: 120.000,
        category: "sport",
        img: "https://articulo.mercadolibre.com.ar/MLA-1940831358-calzado-para-hombre-nike-air-max-excee-moda-blanco-_JM?searchVariation=181993198976#polycard_client=search-nordic&searchVariation=181993198976&position=4&search_layout=grid&type=item&tracking_id=bc5b0f24-ddd4-42ff-8296-7ef3d77094dd&gid=1&pid=1",
        stock: 0,
        description: "Material tela, color Negro, Blanco y Azul",
    },
];

export const totalProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2500);
    });
};

export const totalProductsCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 2500);
    });
}

export const totalProductId = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 2500);
    });
};
