const getItemFromLocalStorage=()=>{
    let storedItem = localStorage.getItem('cart')
    if (storedItem) {
        return JSON.parse(storedItem)
    }else{
        return [];
    }
}
const saveItemTolocalstorage=(cart)=>{
    let cartstringfied = JSON.stringify(cart)
    localStorage.setItem('cart',cartstringfied)
}
const addItemTolocalstorage=(itemname)=>{
    let cart = getItemFromLocalStorage();
    let alreadyHave = cart.find(item => item === itemname);
    if (!alreadyHave) {
        cart.push(itemname);
        saveItemTolocalstorage(cart)
    }
}
const removeItemFromLocalstorage=(itemname)=>{
    let cart =  getItemFromLocalStorage();
    let remauning = cart.filter(itamename => itamename !== itemname)
    saveItemTolocalstorage(remauning)
}

export {getItemFromLocalStorage,saveItemTolocalstorage,addItemTolocalstorage,removeItemFromLocalstorage}