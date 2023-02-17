"use strict";
/*
Create a function named showMultiplicationTable that accepts a number and console.
logs the multiplication table for that number (just multiply by the numbers 1 through 10)
 */
 //
 // const showMultiplicationTable = (number) =>{
 //     for(let i = 1; i <= 10; i++){
 //         console.log(`${number} * ${i} = ${number * i}`)
 //     }
 // }
 // showMultiplicationTable(7);
 // showMultiplicationTable(5);

//alternative solution
 const showMultiplicationTable = (number) =>{
     let table ='';
    for(let i = 1; i <= 10; i++){
        let doMath = parseInt(number)* i;
        let output = `${number} X ${i} = ${doMath}\n;`
        table = table + output;
    }
    return table;
}
let sevenTable = showMultiplicationTable(7);
console.log(sevenTable);

/*
Use a for loop and the code from the previous lessons to generate 10 random numbers
between 20 and 200 and output to the console whether each number is odd or even. For example:
 */


for(let i = 1; i <= 10; i++){
    let input = randomNumber(20,200)
     if(input % 2 == 0){
         console.log(`${input} is even`)
     }else{
         console.log(`${input} is odd`)
     }
}

/*
Create a for loop that uses console.log to create the output shown below.
1
22
333
4444
55555
666666
7777777
88888888
999999999
 */
//
// for(let i = 1; i < 10; i++){
//    let varName = "";
//     for(let j = 1; j <= i; j++){
//         varName += i;
//     }
//     console.log(varName);
// }

// alternative solution
for (let i = 1; i < 10; i++){
    let output = `${i}`.repeat(i);
    console.log(output);
}
/*
Create a for loop that uses console.log to create the output shown below.
100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
 */
 for(let i = 100; i > 0 ; i-=5){
     console.log(i);
 }
