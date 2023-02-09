/*
For each of the following code blocks,
read the code and predict what the result of evaluating it would be,
 then execute the statement(s) in the Chrome console.
 */

let a = 1;
let b = a++;
let c = ++a;
// The value of a = 3, b = 1, and c = 3?

console.log(`value of a is ` + a);
console.log(`value of b is ` + b);
console.log(`value of c is ` + c);

let d = "hello";
let e = false;
d++;
e++;
// the value d = NaN,  e = 1

console.log(`value of d is ` + d);
console.log(`value of e is ` + e);


let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed);

let price = 2.7;
price.toFixed(2);
console.log(price);
//The value  of perplexed = undefined;

// let price = "2.7";
// price.toFixed(2);
// console.log(price);
// error

console.log("====================================================")

isNaN(0)
console.log(isNaN(0)); // false

isNaN(1)
console.log(isNaN(1));// false

isNaN("")
console.log(isNaN(""));//false


isNaN("string")
console.log(isNaN("string"));//true

isNaN("0")
console.log(isNaN(0)); // false

isNaN("1")
console.log(isNaN(1));// false

isNaN("3.145")
console.log(isNaN(3.145)); // false

isNaN(Number.MAX_VALUE)
console.log(isNaN(Number.MAX_VALUE));// false

isNaN(Infinity)
console.log((isNaN(Infinity))); // false

isNaN("true")
console.log(isNaN("true")); // true

isNaN(true)
console.log(isNaN(true));//false

isNaN("false")
console.log(isNaN("false"));//true

isNaN(false)
console.log(isNaN(false)); //false

// to illustrate why the isNaN() function is needed:
NaN == NaN
console.log(NaN);// NaN

console.log("===============================================================")

console.log(!true); //false
console.log(!false);//true
console.log(!1);// false
console.log(!!0);// false
console.log(!!-0); //false
console.log(!!1); // true
console.log(!!-1); //true
console.log(!!0.1); //true
console.log(!!"hello"); //true
console.log((!!""))// false
console.log(!!'');// false
console.log(!!"false"); // true
console.log(!!"0"); //true

console.log("=============================================================")
//Execute the following statement in the Chrome JavaScript
// console and then follow the directions below.

let sample = "Hello Codeup";
console.log(sample.length); // length is 12

// convert all the string to lower case
console.log(sample.toLowerCase("Hello Codeup")); //hello codeup


// update the variable via concatenation
console.log((sample + " Students")); // Hello Codeup Students


// Replace "Students" with " class"
console.log(sample + " Class");

// Find the index of "C" using .indexof
console.log(sample.indexOf("c"));

// Find the index of "C" using .indexof
console.log(sample.indexOf("C"));

// Retrieve a substring that contains only the word " Codeup" by indexOf and substring()
sample.indexOf("C");
console.log(sample.substring(6));


/*
Write some JavaScript code, that is, variables and operators,
to describe the following scenarios. Do not worry about the real operations
to get the values,
 the goal of these exercises is to understand
how real world conditions can be represented with code.
 */

// amount spent for the movies
let mermaidMovie = 3;
let bearMovie = 5;
let herculesMovie = 1;
let pricePerDay = 3;
let total = (mermaidMovie * pricePerDay) + (bearMovie * pricePerDay) + (herculesMovie * pricePerDay);
console.log("The amount spent is : " +  "$" +total); // amount spent is 27;

// payment received per week

let payRateAmazon = 380;
let payRateGoogle = 400;
let payRateFacebook = 350;
let hoursAmazon = 4;
let hourGoogle = 6;
let hourFacebook = 10;
let paymentTotal = (payRateAmazon * hoursAmazon) + (payRateFacebook * hourFacebook) + (payRateGoogle + hourGoogle);
 console.log("Payment received for the week  is : " +"$" +  paymentTotal);

 // Student registration

let classNotFull = true;
let classConflict = false;
 if (classNotFull === true && classConflict === false)
  console.log("Registration is open")
else console.log("registration is closed")

