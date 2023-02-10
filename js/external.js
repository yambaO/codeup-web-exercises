"use strict";
console.log("Hello from external JavaScript");

//Use the alert function to show a message that says 'Welcome to my Website!'.
alert("Welcome to my Website!");
console.log("welcome to my website");

//Use a prompt to ask for the user's favorite color. Use the user's response to alert a
// message that says that the color entered is your favorite color too.
let didConfirm = prompt("What is favorite color? ");
alert(`Great, ${didConfirm} is my favorite color too`);
console.log(`Great, ${didConfirm} is my favorite color too`);
//Complete exercise 3 from the previous lesson, but write your code in the external.js
// file instead of in the console.


//
// amount spent for the movies
let mermaidMovie = prompt("How many days did you rented The little mermaid  movie? ");
let bearMovie =prompt("How many days did you rented The Brother Bear  movie? ") ;
let herculesMovie = prompt('How many days did you rented The hercule movie?  ');
let pricePerDay = prompt("What is the price per day");
let total = (parseInt(bearMovie) + (parseInt(herculesMovie)) + parseInt(mermaidMovie)) *  parseInt(pricePerDay);

alert("The amount spent is : " +  "$" + total); // amount spent is 27;
console.log("The amount spent is : " +  "$" +total); // amount spent is 27;

let payRateAmazon = prompt('Please provide the pay rate for amazon employer');
let payRateGoogle = prompt('Please provide the pay rate for google employer');
let payRateFacebook =prompt('Please provide the pay rate for Facebook employer');
let hoursAmazon = prompt('How many hours did you work at Amazon?');
let hourGoogle = prompt('How many hours did you work at Google?');
let hourFacebook = prompt('How many hours did you work at Facebook?');
let paymentTotal = parseInt(payRateAmazon * hoursAmazon) + parseInt(payRateFacebook * hourFacebook) + parseInt(payRateGoogle + hourGoogle);

alert("The total salary received is "  + paymentTotal.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
}));
console.log("The total salary received is "  + paymentTotal.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
}));

let scheduleConflict = false;
let maxClassSize = prompt('What is the max size of the class?');
let currentClassSize = prompt(`What is the current class size?`);
let canEnroll = !scheduleConflict && (currentClassSize < maxClassSize);
alert("You can enroll for the class");


let minCartSize = 2;
let cartSize = prompt("How many product did you buy ?")
let premiumMember = false;
let offerExpired = false;
let canOfferApply = (premiumMember || (cartSize >= minCartSize)) && !offerExpired;
console.log(canOfferApply);
alert("You qualified for product offer")

