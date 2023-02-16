"use strict";
/*
Prompt the user for an odd number between 1 and 50. Use a
loop and a break statement to continue prompting the user if they enter invalid input.
 */
// for (let i = 1; i <= 50; i++) {
//     let promptUserForNumber = parseFloat(prompt("Please enter a number between 1 and 50"));
//
//     if (promptUserForNumber % 2 !== 0) {
//         console.log(`Here is an odd number: ${promptUserForNumber}`);
//         break;
//     }
// }


/*
Use a loop and the continue statement to output all the odd numbers between 1 and 50,
except for the number the user entered.
 */

let promptUserForNumber = parseFloat(prompt("Please enter a number between 1 and 50"));

for (let i = 1; i <= 50; i++) {
    if (i === promptUserForNumber) {
        console.log(`Yikes! Skipping number: ${promptUserForNumber}`);
        continue;
    } else if (i % 2 !== 0) {
        console.log(`Here is an odd number: ${i}`);
    }
}

/*
Create a while loop that uses console.log() to create the output shown below.
 */
