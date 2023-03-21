"use strict";
let code = "";
let audio = new Audio("media/casino.wav");
let resetTime = 5000; // 5 seconds in milliseconds
let resetTimer = null; // will hold the timer ID
$(document).keyup(function(event) {
    code += event.keyCode;

    // code to check if matches cheat code sequence
if (code.includes("38384040373937396665")) {
    // Trigger cheat action here
    $('body').append('<div>You added 30 lives to the game!</div>');
    $('body').css({
        'background-color' : 'black'
    });
    audio.play();
    code = ""; // reset code for next attempt
    resetTimer = setInterval(resetCode, resetTime); // start the reset timer

    code = ""; // reset code for next attempt
}
});
function resetCode() {
    code = ""; // reset the code
    clearInterval(resetTimer); // stop the reset timer
}

