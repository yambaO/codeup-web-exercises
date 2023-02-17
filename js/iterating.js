(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
     let names = ['Henry', 'Marry', 'Molly', 'Brook'];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(`The number of elements in the names array is : ${names.length}`);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
     console.log(`The first name is : ${names[0]}`);
     console.log(`The second name is : ${names[1]}`);
    console.log(`The third name is : ${names[2]}`);
    console.log(`The fourth name is : ${names[3]}`);



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("====================for loop=================")
    for(let i = 0; i < names.length; i++){
        console.log(`The name at index ${i} is ${names[i]}`);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("====================For each loop================")
    names.forEach(function(name, index){
        console.log(`The name at index ${index} is ${name}`)
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
 console.log("========================= Function accepting arrays=============================")
    // let firstElement = [1,2,3,4,5];
    // const displayFirstArrayElement = (secondArray)=>{
    //     return firstElement[0];
    // }
    // ;
    // console.log(`The first element in the array is: ${displayFirstArrayElement(firstElement)}`);
    //
    // let secondElement = [1,2,3,4,5];
    // const displaySecondArrayElement = (secondArray)=>{
    //         return secondElement[1];
    //     }
    // ;
    // console.log(`The second element in the array is: ${displaySecondArrayElement(secondElement)}`);
    //
    // let lastElement = [1,2,3,4,5];
    // const displayLastArrayElement = (lastElement)=>{
    //         return lastElement[4];
    //     }
    // ;
    // console.log(`The last element in the array is: ${displayLastArrayElement(lastElement)}`);

    const returnFirst = (array) =>{
     return array[0];
    }
    console.log(returnFirst(names));

    const returnSecond = (array) =>{
        return array[1];
    }
    console.log(returnSecond(names));

    const returnLast = (array) =>{
        return array[array.length -1];
    }
    console.log(returnLast(names));

})();