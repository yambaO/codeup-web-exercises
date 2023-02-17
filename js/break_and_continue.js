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

//alternative

// let userPromt;
// let userPromptNum;
// while(true){
//     userPromt = prompt(`Please enter an odd number between 1 and 50.`);
//     userPromptNum = parseInt(userPromt);
//     if(userPromptNum % 2 === 1 && userPromptNum >= 1 && userPromptNum <=50{
//         break;
//     }
// }

//
// for(let i = 1; i <= 49; i = i + 2){
//     if(i === userPromptNum) {
//         console.log(`Yikes! Skipping number : ${i}`)
//         continue;
//     }
//     console.log(`Here is an odd number: ${i}`);
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

