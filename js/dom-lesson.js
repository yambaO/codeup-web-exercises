'use strict';
// selecting one button
let myButton = document.querySelector('.btn');

// selecting on button
let allButtons = document.querySelectorAll('.btn');

// console.log(clickMe.innerText);

// allButtons.forEach(function(button){
//     button.style.backgroundColor ='red';
// });

clickMe.addEventListener('click', function(){
    bodyColor.classList.toggle('red');
});