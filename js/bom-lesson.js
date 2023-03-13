'use strict';
let count = 0;
let max = 10;
let interval = 1000;

// let intervalId = setInterval(function() {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done')
//     } else {
//         count++;
//         console.log('Repeating this line' + count);
//     }
//     ;
//
//     },interval);

setTimeout(function(){
    console.log("It's been 5 seconds!");
}, 5000);