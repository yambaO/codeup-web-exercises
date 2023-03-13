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
// let message;
// const highFive = (name1, name2) =>{
//      message = `${name1} gives ${name2} a high five!`
//     return message;
// }
// /*

// const highFive = (name1, name2) => `${name1} gives ${name2} a high five!`
//  */
//
// let name1 = highFive("Jason", 'javier')
// console.log(name1);
//create an arrow function isEven(num) that takes an integer as an argument
//it returns true if the integer is even and false if not

// const isEven = (num) => {
//     let result = num % 2 === 0;
//     return result;
// }
// let students = 24;
// let  eventStudents = isEven(students);

//anonymous function IIFE ( Immediately-invoked Function Expression) arrow function
// (()=> {
//
// })();

//Traditional IIFE
// (function(){
//
// })();


// console.log("================================== practice functions================================");
//
// const reverseString  = (word) => {
//     let result = word.split('').reverse();
//     return result.join('');
// }
//
// let messageReverse = reverseString("hello")
// console.log(messageReverse);
//
// const returnTwo = (number) =>{
//     let result = number === 2;
//     return result;
// }
//
// let callNumber = returnTwo(2);
// console.log(callNumber);
//
// const negativize = (number) =>{
//     return -(Math.abs(number));
// }
// console.log(negativize(-2));
//
//

// const moreCars = [
//     { make: 'Ford', model: 'Mustang', mileage: 34567 },
//     { make: 'Ford', model: 'F-150', mileage: 12345 },
//     { make: 'Ford', model: 'Escape', mileage: 45678 },
//     { make: 'Chevrolet', model: 'Camaro', mileage: 56789 },
//     { make: 'Chevrolet', model: 'Silverado', mileage: 23456 },
//     { make: 'Chevrolet', model: 'Equinox', mileage: 78901 },
//     { make: 'Buick', model: 'Enclave', mileage: 23456 },
//     { make: 'Buick', model: 'Regal', mileage: 56789 },
//     { make: 'Jeep', model: 'Wrangler', mileage: 34567 },
//     { make: 'Jeep', model: 'Grand Cherokee', mileage: 67890 },
//     { make: 'Dodge', model: 'Charger', mileage: 12345 },
//     { make: 'Dodge', model: 'Durango', mileage: 45678 },
//     { make: 'Lincoln', model: 'MKZ', mileage: 78901 },
//     { make: 'Lincoln', model: 'Navigator', mileage: 23456 },
//     { make: 'GMC', model: 'Sierra', mileage: 56789 },
//     { make: 'GMC', model: 'Terrain', mileage: 34567 },
//     { make: 'Ford', model: 'Focus', mileage: 12345 },
//     { make: 'Ford', model: 'Explorer', mileage: 45678 },
//     { make: 'Chevrolet', model: 'Impala', mileage: 23456 },
//     { make: 'Chevrolet', model: 'Suburban', mileage: 78901 },
//     { make: 'Buick', model: 'LaCrosse', mileage: 34567 },
//     { make: 'Jeep', model: 'Renegade', mileage: 12345 },
//     { make: 'Jeep', model: 'Compass', mileage: 45678 },
//     { make: 'Dodge', model: 'Challenger', mileage: 78901 },
//     { make: 'Lincoln', model: 'Continental', mileage: 23456 },
//     { make: 'Lincoln', model: 'Aviator', mileage: 56789 },
//     { make: 'GMC', model: 'Yukon', mileage: 34567 },
//     { make: 'GMC', model: 'Acadia', mileage: 12345 },
//     { make: 'Ford', model: 'Ranger', mileage: 45678 },
//     { make: 'Ford', model: 'Bronco', mileage: 78901 },
//     { make: 'Chevrolet', model: 'Malibu', mileage: 23456 },
//     { make: 'Chevrolet', model: 'Tahoe', mileage: 56789 },
//     { make: 'Buick', model: 'Encore', mileage: 34567 },
//     { make: 'Jeep', model: 'Cherokee', mileage: 12345 },
//     { make: 'Dodge', model: 'Journey', mileage: 45678 },
//     { make: 'Lincoln', model: 'Corsair', mileage: 78901 },
//     { make: 'GMC', model: 'Canyon', mileage: 23456 },
//     { make: 'Honda', model: 'Civic', mileage: 34567 },
//     { make: 'Honda', model: 'Accord', mileage: 12345 },
//     { make: 'Honda', model: 'CR-V', mileage: 45678 },
//     { make: 'Toyota', model: 'Corolla', mileage: 56789 },
//     { make: 'Toyota', model: 'Camry', mileage: 23456 },
//     { make: 'Toyota', model: 'Rav4', mileage: 78901 },
//     { make: 'Kia', model: 'Optima', mileage: 23456 },
//     { make: 'Kia', model: 'Sportage', mileage: 56789 },
//     { make: 'Kia', model: 'Soul', mileage: 34567 },
//     { make: 'Hyundai', model: 'Elantra', mileage: 67890 },
//     { make: 'Hyundai', model: 'Sonata', mileage: 12345 },
//     { make: 'Hyundai', model: 'Tucson', mileage: 45678 },
//     { make: 'Suzuki', model: 'Swift', mileage: 78901 },
//     { make: 'Suzuki', model: 'Vitara', mileage: 23456 },
//     { make: 'Mazda', model: 'CX-5', mileage: 56789 },
//     { make: 'Mazda', model: 'Mazda3', mileage: 34567 },
//     { make: 'Daihatsu', model: 'Charade', mileage: 12345 },
//     { make: 'Daihatsu', model: 'Mira', mileage: 45678 },
//     { make: 'Toyota', model: 'Yaris', mileage: 23456 },
//     { make: 'Toyota', model: 'Highlander', mileage: 56789 },
//     { make: 'Honda', model: 'Pilot', mileage: 78901 },
//     { make: 'Honda', model: 'CR-Z', mileage: 23456 },
//     { make: 'Suzuki', model: 'Jimny', mileage: 34567 },
//     { make: 'Suzuki', model: 'Celerio', mileage: 12345 },
//     { make: 'Mazda', model: 'CX-3', mileage: 45678 },
//     { make: 'Mazda', model: 'Mazda6', mileage: 78901 },
//     { make: 'Toyota', model: 'Tacoma', mileage: 23456 },
//     { make: 'Toyota', model: 'Sienna', mileage: 56789 },
//     { make: 'Kia', model: 'Stinger', mileage: 34567 },
//     { make: 'Kia', model: 'Niro', mileage: 12345 },
//     { make: 'Hyundai', model: 'Venue', mileage: 45678 },
//     { make: 'Hyundai', model: 'Santa Fe', mileage: 78901 },
//     { make: 'Daihatsu', model: 'Terios', mileage: 23456 },
//     { make: 'Daihatsu', model: 'Materia', mileage: 56789 },
//     { make: 'Suzuki', model: 'Alto', mileage: 34567 },
//     { make: 'Suzuki', model: 'Escudo', mileage: 12345 },
//     { make: 'Fiat', model: '500', mileage: 56789 },
//     { make: 'Fiat', model: 'Panda', mileage: 98765 },
//     { make: 'Fiat', model: 'Tipo', mileage: 12345 },
//     { make: 'Mercedes-Benz', model: 'C-Class', mileage: 12345 },
//     { make: 'Mercedes-Benz', model: 'E-Class', mileage: 78901 },
//     { make: 'Mercedes-Benz', model: 'S-Class', mileage: 23456 },
//     { make: 'BMW', model: '3 Series', mileage: 56789 },
//     { make: 'BMW', model: '5 Series', mileage: 98765 },
//     { make: 'BMW', model: 'X5', mileage: 23456 },
//     { make: 'Volvo', model: 'XC40', mileage: 56789 },
//     { make: 'Volvo', model: 'XC60', mileage: 98765 },
//     { make: 'Volvo', model: 'XC90', mileage: 12345 },
//     { make: 'Audi', model: 'A3', mileage: 78901 },
//     { make: 'Audi', model: 'A4', mileage: 23456 },
//     { make: 'Audi', model: 'Q5', mileage: 56789 },
//     { make: 'Jaguar', model: 'F-PACE', mileage: 23456 },
//     { make: 'Jaguar', model: 'XE', mileage: 98765 },
//     { make: 'Jaguar', model: 'XF', mileage: 12345 },
//     { make: 'Volkswagen', model: 'Golf', mileage: 56789 },
//     { make: 'Volkswagen', model: 'Jetta', mileage: 78901 },
//     { make: 'Volkswagen', model: 'Tiguan', mileage: 23456 },
//     { make: 'Fiat', model: 'Doblo', mileage: 12345 },
//     { make: 'Fiat', model: '500L', mileage: 56789 },
//     { make: 'Fiat', model: 'Spider', mileage: 98765 },
//     { make: 'Mercedes-Benz', model: 'GLE', mileage: 23456 },
//     { make: 'Mercedes-Benz', model: 'GLC', mileage: 56789 },
//     { make: 'Mercedes-Benz', model: 'GLA', mileage: 78901 },
//     { make: 'BMW', model: 'M3', mileage: 23456 },
//     { make: 'BMW', model: 'M5', mileage: 56789 },
//     { make: 'BMW', model: 'X3', mileage: 98765 },
//     { make: 'Volvo', model: 'S60', mileage: 12345 },
//     { make: 'Volvo', model: 'S90', mileage: 23456 },
//     { make: 'Volvo', model: 'V90', mileage: 56789 },
//     { make: 'Audi', model: 'Q3', mileage: 78901 },
//     { make: 'Audi', model: 'Q7', mileage: 23456 },
//     { make: 'Audi', model: 'TT', mileage: 56789 }
// ];

/* Loop through the array and output the make, model, and mileage of every Ford. Then output the make, model, and mileage of every car whose make starts with 'F'.
white_check_mark

raised_hands

Output the make, model, and mileage of every car with mileage less than 25thousand.

Write a function that takes in a car object and returns true or false depending on whether its mileage is less than 50K. (true if less than 50K, false if more than 50K).

Want a more intense challenge? Sort the array alphabetically by make. */