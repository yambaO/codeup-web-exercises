"use strict";
let fruits = ["bananas", "apples", "oranges", "mangos", "tomatoes"];
let var1 =fruits[2];
console.log(var1);

//================================length of Arrays===============================================
let numberOfFruits = fruits.length
console.log('The number of fruits is ', numberOfFruits);

//================================use of toString function =====================================
let fruitsString = fruits.toString();
console.log(' Using toString() on fruits => ', fruitsString);

//=================================Mix of data type in arrays =============================================
let fruitsAndNumbers = ["bananas",2,  "apples", 8699889,  "oranges", undefined, null, NaN]
console.log(fruitsAndNumbers);

const  returnString =(input) =>{
    return input;
}
let stringList =[returnString("Jason"), returnString("Javier"), returnString("Justin")];
console.log()

//==================================Looping in arrays=================================================
//
// for(let i = 0; i < fruits.length; i++){
//     let fruit = fruits[i];
//     console.log(fruit);
// }

/// forEach loop
// fruits.forEach(function (element,index, array){
//     console.log("The elements follows:" , element);
//     console.log("The index follows: " , number);
//     console.log("The array follows: ", array);
// })

// example foreach loop with anonymous function

// fruits.forEach(function (fruit,i, array){
//     console.log("The elements follows:" , fruit);
//     console.log("The index follows: " , i);
//     console.log("The array follows: ", array);
// });

// example forEach loop with arrow function

// fruits.forEach( (fruit,index, array)=>{
//     console.log("The elements follows:" , fruit);
//     console.log("The index follows: " , i);
//     console.log("The array follows: ", array);
// });

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});



