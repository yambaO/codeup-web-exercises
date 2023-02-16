"use strict";

/*
Create a while loop that uses
console.log() to create the output shown below.
 */

let i = 2;
while (i <= 20){
    console.log( i*i);
    i++;
}

/*
An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50 and 100 representing
the amount of cones to sell before you start your loop. Inside of the loop your code should
generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
Use a do-while loop to log to the console the amount
 of cones sold to each person. The below code shows how to get the random numbers for this exercise.or(Math.random() * 50) + 50;
 */

let  allCones = Math.floor(Math.random() * 50) + 50;
console.log(`Amount of cones to sell are : ${allCones}`)
do {
    let conesSold= Math.floor(Math.random() * 5) + 1;
    if(conesSold >= allCones){
        console.log(`Cannot sell you ${conesSold} cones I only have ${allCones}`);

    }else if (allCones > conesSold){
        console.log(`${conesSold} cones sold`);
        
    }
    else {
        console.log(`Yay! I sold them all`);
    }
    allCones -= conesSold;

} while (allCones > 0 );