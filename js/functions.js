"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

const sayHello = (name) =>{
    let result = `Hello ${name};`;
    return result;
}


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Yamba");
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Yamba";
helloMessage = sayHello(myName);
console.log(helloMessage);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
console.log(`The generated random number is : ${random}`);
/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

const isTwo = (num) =>{
    let result = num === 2;
    return result;
}

let isTwocheck = isTwo(random);
console.log(`The result is : ${isTwocheck}`);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

const calculateTip = (tipPercentage, totalBill) =>{
    let amountToTip = tipPercentage * totalBill;
    return amountToTip;
}
let tip = calculateTip(0.20, 20);
console.log(`You received a tip of $${tip}`);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// const calculateTip = (tipPercentage, totalBill) =>{
//     totalBill = parseFloat(prompt('What is the total on the bill?'));
//     alert(`You entered $${totalBill}`);
//     tipPercentage = parseFloat(prompt("Please enter the tip percentage"));
//     alert(`You entered  percentage of : ${tipPercentage}`);
//     let amountTip = tipPercentage * totalBill;
//     return amountTip;
// }
// let tip = calculateTip(0.20, 20);
// alert(`You received a tip of $${tip}`);


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
const applyDiscount = (price, discountPercentage) => {
    let result = price * discountPercentage;
    return result;
}

let discount = applyDiscount(100, 0.2)
console.log(`You received a discount of $${discount}`);