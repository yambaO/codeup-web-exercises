"use strict";
let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ]

// split
const myName= "Yamba";
const myNameArray = myName.split("");
console.log(myNameArray);


const thursday =  daysOfWeek.indexOf("Thursday");
console.log(thursday);

// remove
//  const removeLast = daysOfWeek.pop();
//  console.log(daysOfWeek);
//  console.log(removeLast);

 // const removeFirst = daysOfWeek.shift();
 // console.log((daysOfWeek);
 // console.log(removeFirst);

//slicing
const firstHalf = daysOfWeek.slice(0,3);
console.log(daysOfWeek);
console.log(firstHalf);

//removing an item in the middle
//  const indexOfThursday = daysOfWeek.indexOf("Thursday");
// const lastHalf = daysOfWeek.slice(indexOfThursday + 1);
// console.log(lastHalf);
// daysOfWeek = daysOfWeek.slice(0, indexOfThursday).join(',') + ',';
// console.log(daysOfWeek);
// daysOfWeek += lastHalf.join(',');
// console.log(daysOfWeek);
// daysOfWeek = daysOfWeek.split(',');
// console.log(daysOfWeek);

// alternative
const indexOfThursday = daysOfWeek.indexOf("Thursday");
const removedDay = daysOfWeek.splice(indexOfThursday,1);
console.log(daysOfWeek);
console.log(removedDay.join());

// sorting
console.log(daysOfWeek.sort());

// split
let stringDays ="Monday|Tuesday|Wednesday";
let arraysDays =stringDays.split('|');
console.log(arraysDays)
console.log(arraysDays.join());