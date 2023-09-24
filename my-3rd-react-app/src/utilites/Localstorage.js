function getStroedItem() {
   let localStorageItem = localStorage.getItem('cart')
   if (localStorageItem) {
      return JSON.parse(localStorageItem);
   }else{
      return [];
   }
}
function AddtoLocalStorage(id) {
   const cart = getStroedItem();
   let alreadyHaveItem = cart.find(item=> item===id)
   if (!alreadyHaveItem) {
   cart.push(id)
   saveToLocalstorage(cart)
   }
}
function saveToLocalstorage(cart) {
   let cartstringfied = JSON.stringify(cart)
   localStorage.setItem('cart',cartstringfied)
}
function removeStroedItem(id) {
   const cart = getStroedItem();
   const remainingCart = cart.filter(idx=> idx !== id);
   saveToLocalstorage(remainingCart)
}
export {AddtoLocalStorage,getStroedItem,removeStroedItem}