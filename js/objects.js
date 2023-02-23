(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName : "Rick",
        lastName : "Sanchez",

    }

    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // const person = {
    //     firstName : "Rick",
    //     lastName : "Sanchez",
    // sayHello: function() {
    // return `Hello from ${person.firstName} ${person.lastName}!`;
    // }
    // }
    // console.log(person.sayHello());

    // Alternative
    person.sayHello = function(){
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
     console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // shoppers.forEach(function(shopper) {
    //     if (shopper.amount > 200) {
    //         console.log(`${shopper.name} has to spend $${shopper.amount - (shopper.amount * 0.12)}`);
    //     } else {
    //         console.log(`${shopper.name} has to spend $${shopper.amount}`);
    //     }
    // });

    //alternative
    // shoppers.forEach(shopper =>{
    //     const discount = shopper.amount > 200 ? shopper.amount * .12 : 0;
    //     const total = shopper.amount - discount;
    //     console.log(`${shopper.name}-- total: ${formatAsCurrency(shopper.amount)}, discount : ${formatAsCurrency()}, final total :$ `)
    // })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // const books = [
    //     {
    //         title: "To Kill a Mockingbird",
    //         author: {
    //             firstName: "Harper",
    //             lastName: "Lee"
    //         }
    //     },
    //     {
    //         title: "1984",
    //         author: {
    //             firstName: "George",
    //             lastName: "Orwell"
    //         }
    //     },
    //     {
    //         title: "The Great Gatsby",
    //         author: {
    //             firstName: "F. Scott",
    //             lastName: "Fitzgerald"
    //         }
    //     },
    //     {
    //         title: "One Hundred Years of Solitude",
    //         author: {
    //             firstName: "Gabriel",
    //             lastName: "Garcia Marquez"
    //         }
    //     },
    //     {
    //         title: "Pride and Prejudice",
    //         author: {
    //             firstName: "Jane",
    //             lastName: "Austen"
    //         }
    //     }
    // ];

    // console.log(books[0].title)
    // console.log(books[0].author.firstName)
    // console.log(books[0].author.lastName)
    // console.log(books[1].title)
    // console.log(books[1].author.firstName)
    // console.log(books[1].author.lastName)
    // console.log(books[4].title)
    // console.log(books[4].author.firstName)
    // console.log(books[4].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // books.forEach(function (book, index){
    //     console.log( `Book # ${index + 1}`)
    //     console.log(`Title: ${book.title}`)
    //     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`)
    //     console.log(`===================`);
    // })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirstName, authorLastName){
     this.title = title;
     this.firstName = authorFirstName;
     this.lastName = authorLastName;

    }
    const books = [];
    books.push(new createBook("To Kill a Mockingbird", "Harper", "lee"));
    books.push(new createBook("1984", "George", "Orwell"));
    books.push(new createBook("The Great Gatsby", "F. Scott", "Fitzgerald"));
    books.push(new createBook("One Hundred Years of Solitude", "Gabriel", "Garcia Marquez"));
    books.push(new createBook("Pride and Prejudice", "Jane", "Austen"));

    books.forEach(function (book, index){
        console.log(`Title: ${book.title}`)
        console.log(`Author: ${book.firstName} ${book.lastName}`)
        console.log("========================")
    })
})();