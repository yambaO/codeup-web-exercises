/*Write a function, ```filterNumbers```, that takes in an array of mixed data types and returns an array of only the number types in ascending order.

    Example input:
   ["fred", true, 5, 3]
*/

function filterNumbers(arr) {
    // Use the filter method to get an array of only the number types
    const numArray = arr.filter((element) => {
        return typeof element === "number";
    });
    // Use the sort method to sort the array of numbers in ascending order
    numArray.sort((a, b) => a - b);
    // Return the sorted array of numbers
    return numArray;
}
e
const mixedArray = ["fred", true, 5, 3];
const filteredArray = filterNumbers(mixedArray);
console.log(filteredArray); // Output: [3, 5]

/*
Problem 2
​Write a function, getOlder, that takes in an array of dog objects and increases the value of the age properties by 1. No return value is needed since the original array of objects will be changed by this function.​Example Input:​

[
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];
​Example Output:​

[
    {
        name: "Chompers",
        breed: "Pug",
        age: 8
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 5
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 11
    }
];

*/

function getOlder(dogs) {
    for (let i = 0; i < dogs.length; i++) {
        dogs[i].age += 1;
    }
}

/*
Problem 3
​Write a function, washCars, that takes in a array of car objects and sets the boolean properties of isDirty to false. Again, no return value is needed since the original array of objects will be changed by this function.

Example Input:​

[
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]
Example Output:​

[
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: false // changed to false
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false // stays the same
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: false // changed to false
    }
]
​

*/

function washCars(cars) {
    for (let i = 0; i < cars.length; i++) {
        cars[i].isDirty = false;
    }
}

/*
Problem 4
Write a function, adminList that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.​Example Input:​

[
    {
		isAdmin: true,
		email: 'user1@email.com'
    },
    {
		isAdmin: true,
		email: 'user2@email.com'
    }
    {
    	isAdmin: false,
    	email: 'user3@email.com'
    }
];
​Example Output (before refactor):
​

2
​Example Output (after 1st refactor):​

[
    'user1@email.com',
    'user2@email.com'
]
​Example Output (after 2nd refactor):​

[
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    }
]
​
*/
function adminList(users, returnType = "count") {
    const admins = users.filter((user) => user.isAdmin);

    if (returnType === "count") {
        return admins.length;
    } else if (returnType === "emails") {
        return admins.map((admin) => admin.email);
    } else if (returnType === "objects)
/*
Problem 5
​Create a function, makeSandwhichObjects that takes in two arrays of strings (breads and fillings) and returns an array of sandwhich objects that contain properties for bread and filling. The values of these sandwich properties should correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length and have no invalid elements.​Example Input:​

var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];
​
var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];
​
makeSandwhichObjects(breads, fillings) // example call to the function
​Example Output:​

[
    {
        bread: "white,
        filling: "pb&j"
    },
    {
        bread: "wheat",
        filling: "ham"
    },
    {
        bread: "rhy",
        filling: "cheese steak"
    },
    {
        bread: "white",
        filling: "tuna"
    }
]
​

*/
        function makeSandwichObjects(breads, fillings) {
            // Initialize an empty array to store sandwich objects
            const sandwiches = [];

            // Loop through each bread and filling, and create a sandwich object
            for (let i = 0; i < breads.length; i++) {
                const sandwich = {
                    bread: breads[i],
                    filling: fillings[i]
                };

                // Add the sandwich object to the array
                sandwiches.push(sandwich);
            }

            return sandwiches;
        }
    const breads  = [    "white",    "wheat",    "rhy",    "white"];

    const fillings = [    "pb&j",    "ham",    "cheese steak",    "tuna"];

    const sandwiches = makeSandwichObjects(breads, fillings);
    console.log(sandwiches);
/*
Problem 6
​Create a function, firstLettersOfStringProps, that takes in an object and returns an array of first letters for each property that is a string.​Example Input:​

{
	propA: true,
	propB: "hello"
	propC: 23,
	propD: "world"
}
​Example Output:​

['h', 'w']
​
*/
  let propObject=  {
        propA: true,
            propB: "hello",
        propC: 23,
            propD: "world"
    }

    function firstLettersOfStringProps(obj) {
        const result = [];
        for (const prop in obj) {
            if (typeof obj[prop] === 'string') {
                result.push(obj[prop][0]);
            }
        }
        return result;
    }
console.log (firstLettersOfStringProps(propObject));

    /*
Problem 7
​Create a function, returnBasicUserData, that takes in an array of user objects with an unknown total number of properties in each user object but containing at least a name and age property. The function will return a new array of objects that contain only name and age properties and values from the input array of user objects.​Example Input:​

[
	{
		name: "Fred Smith",
		favColor: "Blue",
		age: 25
	{,
	{
		name: "Sally Smith",
		favPet: "Dogs",
		isAdmin: true,
		age: 37
	{,
	{
		phoneNumber: "5552759898",
		name: "Karen Smith",
		age: 19
	{
]
​
​Example Output:​

[
	{
		name: "Fred Smith",
		age: 25
	{,
	{
		name: "Sally Smith",
		age: 37
	{,
	{
		name: "Karen Smith",
		age: 19
	{
]
​
​

*/
    function returnBasicUserData(users) {
        return users.map(user => {
            const { name, age } = user;
            return { name, age };
        });
    }

/*
Problem 8
​Create a function, returnCharCount, that takes in an array or an object and will return the total number of characters for any string elements or string properties.​Example 1 Input:​

['hello', true, 25, null, undefined, '', 'world']
​Example 1 Output:​

10
​Example 2 Input:​

{
	someProp1: true,
	someProp2: null,
	someProp3: "hello",
	someProp4: 88,
	someProp5: "world"
}
​Example 2 Output:​

10
 */

    function returnCharCount(input) {
        let charCount = 0;

        // If input is an array, iterate over its elements
        if (Array.isArray(input)) {
            for (let i = 0; i < input.length; i++) {
                if (typeof input[i] === 'string') {
                    charCount += input[i].length;
                }
            }
        } else { // If input is an object, iterate over its properties
            for (let prop in input) {
                if (typeof input[prop] === 'string') {
                    charCount += input[prop].length;
                }
            }
        }

        return charCount;
    }