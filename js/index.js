// var or const 
let itemsInCart =0;

function addAnItemToTheCart(qty) { 
  //inside function

    itemsInCart +=  qty;
    console.log(`Add ${qty} item(s), There are now: 
    ${itemsInCart}.`);
}



addAnItemToTheCart(1);
addAnItemToTheCart(2);
// ^this line executes
//ouutside fuction
console.log (itemsInCart);