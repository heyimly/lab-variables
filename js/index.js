// String is a series of characters Quotes become characters
console.log(`im baby🥺`);
// Number is a number ... -> Can come in different forms (+)(-)(0.1)
console.log(3 + 5); // add
console.log(3 - 5); // subtract 
console.log(3 * 5); // multiply
console.log(3 / 5); // divide
console.log(3 % 5); //modulus
console.log(3 ** 5); //exponent/power

//syntax error
// logical error 

//Declaring variables, giving them starting values
let customerName= `George`;
let bitCoin = 0;  

console.log (`Hi ${customerName}, your balance is: 0 ${bitCoin}`);


bitCoin = bitCoin + 4; // Assigning a new value to a variable
//
console.log 

console.log (`Hi ${customerName}, your balance is: ${bitCoin}`);
bitCoin = bitCoin -1;


// Lab Assignment

//Variables can be defined with keywords: car, let, const,
// Variable name:
// -Don't use special chars (_and $ are possible though)
// - Don't start with a number
//- Use CamelCased Words to show seperation (uppercase firs tletters)
//- Do not capitalize first letter of variable name

// Variable Name: Don't Use special chars, make clear
let geoLocation =``;  // ✅ Camel cased, easy to read, no conflicts
let location=``      // ❌ Will conflict with the browser's url bar
let lctn=``;        //  ❌ Not Bad, but not super clear either
let l=`; `         //   ❌Terrible. Far, too short and non-descript