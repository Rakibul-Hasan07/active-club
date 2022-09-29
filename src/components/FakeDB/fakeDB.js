const addToDb = id => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const storedDb = () => {
    // let shoppingCart = {};
    // const getId = JSON.parse(localStorage.getItem('shopping-cart'))
    // if(getId){
    //     shoppingCart = getId;
    // }
    // return shoppingCart;
    let shoppingCart = {};
    const getId = localStorage.getItem('shopping-cart');
    if (getId) {
        shoppingCart = JSON.parse(getId);
    }
    return shoppingCart;
}

export { addToDb, storedDb };