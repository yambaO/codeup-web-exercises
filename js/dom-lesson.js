'use strict';

let clickMe = document.querySelector('#clickMe');
let allButtons = document.querySelectorAll('.btn');
let pageWrapper = document.querySelector('.page-wrapper');

// // console.log(clickMe.innerText);
let btnColumn = document.querySelector('#btn-column');
// // adding string HTML into the document
// let newHtml = `
//     <button class="btn" id="newButton">
//         New Button
//     </button>
// `;
// // creating a node on the fly
// let buttonNode = document.createElement('button');
// buttonNode.classList.add('btn');
// buttonNode.innerHTML = `I am a new button!`;
// buttonNode.addEventListener('click', function(){
//    alert('it worrrrrrrks!!!!!');
// });
// // btnColumn.insertAdjacentHTML('afterbegin', newHtml);
// // let newButton = document.querySelector('#newButton');
//
// btnColumn.appendChild(buttonNode);
//
// // a method of clearing out all node children from an element
// // btnColumn.innerHTML = '';
const handleClick = () => {
    alert('Yay! You click me....');
}
// allButtons.forEach(function(element){
//     element.addEventListener('click', handleClick);
// });
btnColumn.addEventListener('click', function(e){
    // console.log(e);
    if(e.target.classList[0] === "btn") {
        alert('Yay! You clicked me!');
    }
})
let buttonNode = document.createElement('button');
buttonNode.classList.add('btn');
buttonNode.innerHTML = `I am a new button!`;
btnColumn.appendChild(buttonNode);