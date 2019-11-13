// var or const 
let itemsInCart =0;

function addAnItemToTheCart(qty, user) { 
  //inside function

    itemsInCart +=  qty;
    console.log(`Add ${qty} item(s), There are now: 
    ${itemsInCart}.`);
}



addAnItemToTheCart(1, name);
addAnItemToTheCart(2, name);
// ^this line executes
//ouutside fuction
console.log (itemsInCart);