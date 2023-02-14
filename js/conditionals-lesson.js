"use strict";
// let flavor = prompt("Welcome to codeup Ice Cream! What flavor do you want?");

// if (flavor === "chocolate"){
//     alert("One chocolate coming right up!");
// }
// else if(flavor === "vanilla") {
//     alert("One vanilla coming right up!");
// }
// else{
//     alert("We do not have that flavor, sorry ")
// }

// switch (flavor){
//     case"Chocolate":
//         alert("Once chocolate coming right up!");
//         break;
//     case "Vanilla":
//         alert("One vanilla coming right up!");
//         break;
//     case "strawberry":
//         alert("One strawberry coming right up!");
//     default:
//         alert("We don't have that flavor, sorry ");
// }

// function serveIceCream(flavor){
//     if (flavor === " chocolate"
//         || flavor === "strawberry"
//         || flavor === 'vanilla'){
//         alert (`one ${flavor} coming right up!`);
//     } else{
//         alert("We don't have that flavor, sorry :(");
//     }
// }
// serveIceCream(prompt("Welcome to codeup ice cream! what do you like ?").toLowerCase());

function divisibleByFive(number){
    if (number % 5 === 0){
        console.log("Divisible by 5");

    }else{
        console.log("Not divisible by 5!");
    }
}
divisibleByFive(25);

const divisibleByFiveTernary = number =>{
    number % 5 ? console.log("Divisible by 5!") : console.log("Not divisible by 5!");
}

// const divisible = (dividend , divisor) => {
//     dividend % divisor === 0 ? console.log(`divisible by ${divisor}!`) : console.log(`Not divisible by ${divisor}`);
//
// }

function divisible (dividend , divisor){
    if (dividend % divisor === 0){
        return true;
    } else {
        return false;
    }
}