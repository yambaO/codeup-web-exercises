"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// const analyzeColor = (input) => {
//     if (typeof input === "string"){
//         if (input === "red") {
//             return `Strawberries are ${input}`
//         } else if (input === "blue") {
//             return `The sky is ${input}`;
//         } else if (input === "green") {
//             return `Apple are ${input}`;
//         }
//         else{
//             return `I don't know anything about ${input}`;
//         }
//        }
//      else {
//         return "This is not a string";
//     }
// }
// console.log(analyzeColor("red"));
// console.log(analyzeColor('green'));
// console.log(analyzeColor('blue'));
// console.log(analyzeColor(1));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(`${randomColor} is the color generated`);
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

const analyzeColor = (input) => {
    if (typeof input === "string") {
        switch (input) {
            case"red":
                return `Strawberries are ${input}`;
                break;
            case"green":
                return `Apple are  ${input}`;
                break;
            case"blue":
                return `The sky is ${input}`;
                break;
            default:
                return `I don't know anything about ${input}`;
                break;
        }
    } else {
        return "This is not a string";
    }
}
console.log(analyzeColor("red"));
console.log(analyzeColor('green'));
console.log(analyzeColor('blue'));
console.log(analyzeColor(1));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let alertColor = (analyzeColor(prompt('Please enter a color')));
alert(alertColor);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

const calculateTotal = (luckyNumber, totalAmount) => {
    if (luckyNumber === 0) {
        return totalAmount;
    } else if (luckyNumber === 1) {
        return totalAmount - (totalAmount * 10 / 100);

    } else if (luckyNumber === 2) {
        return totalAmount - (totalAmount * 25 / 100);

    } else if (luckyNumber === 3) {
        return totalAmount - (totalAmount * 35 / 100);

    } else if (luckyNumber === 4) {
        return totalAmount - (totalAmount * 50 / 100);

    } else if (luckyNumber === 5) {
        return 0;

    }

}

console.log(calculateTotal(0, 100))
console.log(calculateTotal(1, 100))
console.log(calculateTotal(2, 100))
console.log(calculateTotal(3, 100))
console.log(calculateTotal(4, 100))
console.log(calculateTotal(5, 100))

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);
let priceBeforeDiscount = parseFloat(prompt('Please enter the price before discount?'));
alert(`Your lucky number was : ${luckyNumber} ,  your price before discount was: $${priceBeforeDiscount}  and the price after discount is : $${calculateTotal(luckyNumber, priceBeforeDiscount)}`);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

const checkNumber = (promptUser) =>{
    if (promptUser % 2 === 0 && promptUser < 0) {
        alert(` Number ${promptUser} is even`)
        alert(`${promptUser} plus 100 is equal to ${promptUser + 100} `)
        alert(`Number ${promptUser} is negative`)
    } else if (promptUser % 2 === 0 && promptUser >= 0) {
        alert(`Number ${promptUser} is even`)
        alert(`${promptUser} plus 100 is equal to ${promptUser + 100} `)
        alert(`Number ${promptUser} is positive`)
    } else if (promptUser % 3 === 0 && promptUser < 0) {
        alert(`Number ${promptUser} is odd`)
        alert(`${promptUser} plus 100 is equal to ${promptUser + 100} `)
        alert(`Number ${promptUser} is negative`)
    } else if (promptUser % 3 === 0 && promptUser > 0) {
        alert(`Number ${promptUser} is odd`)
        alert(`${promptUser} plus 100 is equal to ${promptUser + 100} `)
        alert(`Number ${promptUser} is positive`)
    } else {
        alert(` You enter an incorrect input`)
    }
}
let userPromptNumber = confirm("would you like to enter a number ? ");
if (userPromptNumber) {
    let enterNumber = parseFloat(prompt("Enter a number"))
    checkNumber(enterNumber);
}
else{
    let cancelAction = "You cancelled !!"
    alert(cancelAction);
}
