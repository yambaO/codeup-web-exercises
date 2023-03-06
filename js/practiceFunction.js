// "use strict";
// # Function Drills
//
// Functions using conditionals but not loops or arrays:
// - Make a function named `isOdd(number)`
//
// console.log('=========isOdd=================')
// const isOdd = (number) => {
//
//     return parseFloat(number) % 2 != 0 ;
//  }
//  console.log(isOdd(2))
// console.log(isOdd(3));
// console.log(isOdd("string"));
// console.log(isOdd(true))
// console.log(isOdd(2));
// console.log(isOdd(null))
//
// console.log('================isGreater=========')
// isGreater function
//  const isGreater = (number1, number2) => {
//     return parseFloat(number1) > parseFloat(number2);
//  }
//  console.log(isGreater(9.3, 7.4));
// console.log(isGreater(3.14, 3.14))          // false
// console.log(isGreater(7.4, 9.3)  )          // false
// console.log(isGreater(-9.3, 7.4) )          // false
// console.log(isGreater(-3.14, 3.14))         // false
// console.log(isGreater(-7.4, 9.3) )          // false
// console.log(isGreater(9.3, -7.4) )          // true
// console.log(isGreater(3.14, -3.14))         // true
// console.log(isGreater(7.4, -9.3) )          // true
// console.log(isGreater(-9.3, -7.4))          // false
// console.log(isGreater(-7.4, -9.3))          // true
// console.log(isGreater(null, null))          // false
// console.log(isGreater('Seven', 'e)ight') )   // false
//
// console.log(`========================= isNot==========`)
//
// const isNot = (booleanValue)=> {
//     return !booleanValue;
// }
// console.log(isNot(false))            // true
// console.log(isNot(true))             // false
// console.log(isNot("Bob"))            // false
// console.log(isNot(null) )           // false
//
// console.log('=======isEven======');
// //- Make a function named `isEven(number)`
//  const isEven = (number ) =>{
//
//     return parseFloat(number) % 2 === 0;
//  }
//  console.log(isEven(3));
//  console.log(isEven("string"));
//  console.log(isEven(true))
// console.log(isEven(2));
//  console.log(isEven(null))
//
// console.log("====function named identity==============")
// - Make a function named `identity(input)` that returns the input exactly as
// provided.
// const identity = (input)=>{
//      return input;
// }
// console.log(identity(2));
//  consonsole.log((isFive(true)));
// console.log(isFive("5"));le.log(identity("Brook"));
//
// console.log("====isFive==============")
// // - Make a function named `isFive(input)`
// const isFive = (input)=>{
//     return input === 5;
// }
// console.log(isFive("henry"))
// console.log((isFive(5)));
// co

// - Make a function named `addFive(input)` that adds five to some input.
//
// console.log("========isMultiple=====================")
// - Make a function named `isMultipleOf(target, n)` which checks if target is
// evenly divisible by `n`
// const isMulptipleOf = (target , n ) =>{
//     if(target % n === 0){ return true }
//     else{return false};
// }
// console.log(isMulptipleOf(9,2))
// console.log((isMulptipleOf(4,2)))
// console.log((isMulptipleOf(2,7)))


// - Make a function named `isTrue(boolean)`
// - Make a function named `isFalse(boolean)`
// - Make a function named `isTruthy(input)`, remember that values other than true
// will behave like true
// - Make a function named `isFalsy(input)`, remember that values other than false
// behave like false
// - Make a function named `isVowel(letter)`
// - Make a function named `isConsonant(letter)`
// - Make a function named `isCapital(letter)`
// - Make a function named `isLowerCase(letter)`
// - Make a function named `hasLowerCase(string)` that returns if a string has any
// lower cased letter
// - Make a function named `isSpace(letter)` that returns if a character is a space
// character
// - Make a function named `isZero(number)`
// - Make a function named `notZero(input)` that returns true if the input is not
// zero
// - Write a function named `lowerCase(string)`
// const lowerCase = (input)=> {
//     return input.toLowerCase();
// }
// console.log(lowerCase("heLLO"))

// - Write a function named `double(n)` that returns a number times two
// - Write a function named `triple(n)` that returns a number times 3
// - Write a function named `quadruple(n)` that returns a number times 4
// - Write a function named `half(n)` that returns 1/2 of the provided input
// - Write a function named `subtract(a, b)` that returns `a` minus `b`
// - Write a function named `multiply(a, b)` that returns the product of `a` times
//     `b`
// - Write a function named divide(a, b) that returns `a` divided by ~b~
//     - Write a function named `remainder(a, b)` that returns the remainder after
// dividing a by b
// - Make a function named `modulo(a, b)` that returns the returns the remainder
// after dividing a by b
// - Write a function named `cube(n)` that returns n * n * n
// - Write a function named `squareRoot(n)` that returns the square root of the
// input
// - Write a function named `cubeRoot(n)` that returns the cube root of the input
// - Write a function named `invertSign(number)` that returns a negative version of
// a postive number, a positve version of negative, and false for all else.
// - Write a function named `degreesToRadians(number)`
// - Write a function named `radiansToDegrees(number)`
// - Make a function named `isBlank(input)` that determines if a given input is
// spaces, newline characters, or tabs.
// - Make a function named `trim(string)` that removes empty spaces before and
// after the input.
// - Make a function named `areEqual(input1, input2)` that returns if both inputs
// have the same value
// - Make a function named `areIdentical(input1, input2)` that returns if both
//     inputs are same value and data type.
// - Make a function named `not(input)` returns the input with a flipped boolean
// - Make a function named `notNot(input)` that the negation of the negation of the
// input.
// - Make a function named `and(predicate1, predicate2)` that returns the logical
// operation of AND
// - Make a function named `or(predicate1, predicate2)` that returns the logical
// operation of OR
// - Write a function called `reverseString(string)` that reverses a string
// - Make a function named `absoluteValue(number)` that returns the absolute value
// of a number.
// - Make a function named `rollDice(sides)` that takes in an argument containing
// the number of sides the die should have. Generate a random number between 1 up
// to and including the number of sides.
//
//
//
// ## Simple Function Drills
//
// 1. Make a function called returnTwo() that returns the number 2 when called
//
// Test this function with `console.log(returnTwo())`
//
//     1. Make a function called sayHowdy() which console.logs the string "Howdy!"
//
// Test this function by directly calling `sayHowdy()`
//
// Remember this function does not need a defined return value
//
// 1. Make a function called returnName() that returns the string of your name
//
// Test this function with `console.log(returnName())`
//
//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
//
// Test this function with `console.log(addThree(5))`
//
//     1. Make a function called sayString() which returns the string input passed in.
//
// Test this function with `console.log(sayString('codeup'))`
//
//
//     ## Challenge Function Drills
//
// - Write a function called `identity(input)` that takes in an argument called
// input and returns that input.
//
// - Write a function called `getRandomNumber(min, max)` that returns a random
// number between min and max values sent to that function call.
//
// - Write a function called `first(input)` that returns the first character in the
// provided string.
//
// - Write a function called `last(input)` that returns the last character of a
// string
//
// - Write a function called `rest(input)` that returns everything but the first
// character of a string.
//
// - Write a function called `reverse(input)` that takes a string and returns it
// reversed.
//
// - Write a function called `isNumeric(input)` that takes an input and returns a
// boolean if the input is numeric.
//
// - Write a function called `count(input)` that takes in a string and returns the
// number of characters.
//
// - Write a function called `add(a, b)` that returns the sum of a and b
//
// - Write a function called `subtract(a, b)` that return the difference between
// the two inputs.
//
// - Write `multiply(a, b)` function that returns the product
//
// - Write a `divide(numerator, denominator)` function that returns a divided by b
//
// - Write a `remainder(number, divisor)` function that returns the remainder left
// over when dividing `number` by the `divisor`
//
// - Write the function `square(a)` that takes in a number and returns the number
// multiplied by itself.
//
// - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
// and your square function and not + or * operators
//
// - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
// first parameter is the name of the math function you want to apply. a and b
// are the two numbers to run that function on.
//
// ## Even More Function Bonuses
//
// 1. Create a function that will return how many whitespace characters are at the
// beginning and end of a string.
//
// 1. Create a function that takes in two string inputs.
//
// - If the second string input is present in the first, return the first input
// string with the second input string removed from it.
// - If the second string input is present multiple times in the first, the
// second string will only be removed where it first occurs in the first
// string.
// - If the second string input is not present in the first, return the first
// string as entered in the function.
//
// 1. Create a function that takes in a string and returns true if the last letter
// is an "a" (otherwise, return false).
//
// 1. EXTRA CHALLENGE: create a function that will return how many whitespace
// characters are at the beginning of a string (hint: use regex).
//
// 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
//
// - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
// - Create a function `returnMessage()` that takes in a function and returns the call to the function
// - Experiement passing in different functions.
//
// 1. Create a function, `willLoginUser()` that takes in a username string,
//     password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the
// password and the user is at least 18 years old. If the user is an admin,
//     they do not have to be a certain age but the password must still not match
// the username.

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

// const convertAddressToObject = (address)=> {
//     const objectAddress = {
//         streetNumber : address,
//         streetName : address,
//     }
//     return objectAddress.streetNumber && objectAddress.address
// }
//
// convertAddressToObject("8646 Sunny Oaks")
// console.log(objectAddress.streetNumber)

const convertAddressToObject = (address)=> {
    const [streetNumber, ...streetNameArray] = address.split(' ');
    const streetName = streetNameArray.join(' ');
    const objectAddress = {
        streetNumber: streetNumber,
        streetName: streetName,
    }
    return objectAddress;
}

const objectAddress = convertAddressToObject("8646 Sunny Oaks");
console.log(`streetNumber: ${objectAddress.streetNumber}, streetName: ${ objectAddress.streetName}`);


/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

const people =[
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
];
function totalPets(personArray){
    //set up accumulator variable
    let total = 0;
    // loop over the array, adding to
    personArray.forEach(person =>{
        total += person.pets
    });
    return total;
}



/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

// const arrayOfNumber = [1, 3, 5,9,6,10]
//
// const minMax = (numbers) => {
//     let max = numbers[0];
//     let min = numbers[0];
//
//     numbers.forEach(number => {
//         if (number > max) {
//             max = number;
//         }
//
//         if (number < min) {
//             min = number;
//         }
//     });
//
//     return [min, max];
// }
//
// console.log(minMax(arrayOfNumber)); // Output: [1, 10]


/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */



/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

//
    // Make sure you are comfortable with these techniques: looping over the array,
// console-logging the name of each city. Then try console-logging the name and state. Then try console-logging all the cities in Texas with populations over 1 million.  Write a function that accepts
// one city object and returns true if the city is in Texas.  Write a function
// that accepts an array of city objects and the name of a state and returns an array with only the cities in that state.


const cities = [
    {
        name: "New York City",
        state: "New York",
        population: 8336817
    },
    {
        name: "Los Angeles",
        state: "California",
        population: 3979576
    },
    {
        name: "Chicago",
        state: "Illinois",
        population: 2693976
    },
    {
        name: "Houston",
        state: "Texas",
        population: 2320268
    },
    {
        name: "Phoenix",
        state: "Arizona",
        population: 1680992
    },
    {
        name: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064
    },
    {
        name: "San Antonio",
        state: "Texas",
        population: 1547253
    },
    {
        name: "San Diego",
        state: "California",
        population: 1423851
    },
    {
        name: "Dallas",
        state: "Texas",
        population: 1343573
    },
    {
        name: "San Jose",
        state: "California",
        population: 1030119
    },
    {
        name: "Austin",
        state: "Texas",
        population: 964254
    },
    {
        name: "Jacksonville",
        state: "Florida",
        population: 903889
    },
    {
        name: "Fort Worth",
        state: "Texas",
        population: 895008
    },
    {
        name: "Columbus",
        state: "Ohio",
        population: 892533
    },
    {
        name: "San Francisco",
        state: "California",
        population: 883305
    },
    {
        name: "Charlotte",
        state: "North Carolina",
        population: 885708
    },
    {
        name: "Indianapolis",
        state: "Indiana",
        population: 876384
    },
    {
        name: "Seattle",
        state: "Washington",
        population: 753675
    },
    {
        name: "Denver",
        state: "Colorado",
        population: 727211
    },
    {
        name: "Washington",
        state: "District of Columbia",
        population: 702455
    }
];
for(let i = 0; i < cities.length; i++){
    if (cities[i].state === "Texas" && cities[i].population > 1000000) {
        console.log(`${cities[i].name}, ${cities[i].state}`);
    }
}
// function isTexas(cityObject){
//     if (cityObject.state === "texas"){
//         return true;
//     }else {
//         return false;
//     }
// }
// {
//  const texas = {
//      name: "San Antonio",
//      state: "Texas",
//      population: 1547253
//  }
// console.log(isTexas(texas));
// cities.forEach(function (cities){
//     let citiesNames = cities.name;
//     console.log(citiesNames)
// })
// cities.forEach(function (cities ){
//     let citiesNames = cities.name;
//     let states = cities.state;
//     console.log(`${citiesNames}, ${states}`)
// })


// const cities = (ArrayOfCity) =>{
//     cities.forEach(city)
// }
/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

//  const peopleAndBudgets = [
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
// ]
// function getBudgets(arrayOfObjects){
//      let totalBudget = 0;
//      arrayOfObjects.forEach(object => totalBudget += object.budget);
//      return totalBudget;
// }
// console.log(getBudgets(peopleAndBudgets));