const addToDb = id => {
    // console.log(id);
    const setSecond = {};

    const setId = setSecond[id]
//    console.log(setId);
   if(setId){
    setSecond[id] = setId;
   }
   else{
    setSecond[id] = 1;
   }
    localStorage.setItem('setSeconds', JSON.stringify(setSecond))
}
const storedDb = () => {
    // let shoppingCart = {};
    // const getId = JSON.parse(localStorage.getItem('shopping-cart'))
    // if(getId){
    //     shoppingCart = getId;
    // }
    // return shoppingCart;
    let setSecond = {};
    const getId = localStorage.getItem('setSeconds');
    if (getId) {
        setSecond = JSON.parse(getId);
    }
    return setSecond;
}


export { addToDb, storedDb };