const addToDb = id => {
    const setSecond = {};

    const setId = setSecond[id]
   if(setId){
    setSecond[id] = setId;
   }
   else{
    setSecond[id] = 1;
   }
    localStorage.setItem('setSeconds', JSON.stringify(setSecond))
}
const storedDb = () => {
    let setSecond = {};
    const getId = localStorage.getItem('setSeconds');
    if (getId) {
        setSecond = JSON.parse(getId);
    }
    return setSecond;
}


export { addToDb, storedDb };