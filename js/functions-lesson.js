"use strict";
// traditional method
// function helloWorld(){
//     alert('Hello world');
// }

//the arrow function
// const helloWorld = (name) => {
//     let message = alert(`Hello,${name}!)`;
// }
// let firstHello = helloWorld("Jason");
// console.log()
// let secondHello = helloWorld("Yamba");
// alert(secondHello);

//example
// const parseDiscordName = (name) => {
//     let guildCharEnd = name.indexOf(']' ) + 1;
//     let guildName = name.substring(0, guildCharEnd);
//     let userName = name.substring(guildCharEnd);
//     let nameArray = [guildName, userName];
//     return nameArray;
//
// }
// let discordName = parseDiscordName("[YoloBlob]Jason");
// console.log(discordName);

//Create a new function highFive
let message;
const highFive = (name1, name2) =>{
     message = `${name1} gives ${name2} a high five!`
    return message;
}
/*
const highFive = (name1, name2) => `${name1} gives ${name2} a high five!`
 */

let name1 = highFive("Jason", 'javier')
console.log(name1);

//create an arrow function isEven(num) that takes an integer as an argument
//it returns true if the integer is even and false if not

const isEven = (num) => {
    let result = num % 2 === 0;
    return result;
}
let students = 24;
let  eventStudents = isEven(students);

//anonymous function IIFE ( Immediately-invoked Function Expression) arrow function
(()=> {

})();

//Traditional IIFE
(function(){

})();
