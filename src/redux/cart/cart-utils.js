export const addProductToCart = (cartProducts, clickedProduct) => {
    const alreadyAdded = cartProducts.find(product => 
        product.id === clickedProduct.id
    );

    if (alreadyAdded) {
        return (cartProducts.map(product =>
                (product.id === clickedProduct.id) ? 
                    {...product, quantity: product.quantity + 1} 
                    : product
        ));        
    } else {
        return [...cartProducts, {...clickedProduct, quantity: 1}];
    }
};

export const increaseQuantity = (cartProducts, payload) => {
         return cartProducts.map((product) => {
                    product.id === payload.id ? {...product, quantity: product.quantity + 1} : product
    });
};