const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let usersWith3Languages = users.filter(user => user.languages.length > 2);
// console.log(usersWith3Languages);

let userEmails = users.map(user => {
    return user.email;
});
// console.log(userEmails);

let totalYears = users.reduce((acc, {yearsOfExperience: years, email, id}) => {
    return acc + years;
},0);
let averageYears = totalYears / users.length;
// console.log(averageYears);

let longestEmail = users.reduce((acc, user) => {
    if (acc.length < user.email.length){
        return user.email;
    } else {
        return acc;
    }
},'');
// console.log(longestEmail);

// Expected Output: Your instructors are: ryan, luis, zach, fernando, justin.

let instructors = users.reduce((acc, user, index) => {
    if (index+1 === users.length) {
        return acc + ` ${user.name}.`;
    } else {
        return acc + ` ${user.name},`;
    }
}, 'Your instructors are:');
// console.log(instructors);

let uniqueLanguages = users.reduce((acc, user) => {
    user.languages.forEach(function(language){
        if(!acc.includes(language)){
            acc.push(language);
        }
    });
    return acc;
},[]);
console.log(uniqueLanguages);


// Using Map to reform objects in an array
const books = [
    {
        title: 'The Great Gatsby',
        author: {
            firstName: 'F. Scott',
            lastName: 'Fitzgerald'
        },
        published: 1925,
        genre: 'Fiction'
    },
    {
        title: 'To Kill a Mockingbird',
        author: {
            firstName: 'Harper',
            lastName: 'Lee'
        },
        published: 1960,
        genre: 'Fiction'
    },
    {
        title: 'The Catcher in the Rye',
        author: {
            firstName: 'J.D.',
            lastName: 'Salinger'
        },
        published: 1951,
        genre: 'Fiction'
    },
    {
        title: 'The Lord of the Rings',
        author: {
            firstName: 'J.R.R.',
            lastName: 'Tolkien'
        },
        published: 1954,
        genre: 'Fantasy'
    },
    {
        title: 'Pride and Prejudice',
        author: {
            firstName: 'Jane',
            lastName: 'Austen'
        },
        published: 1813,
        genre: 'Fiction'
    },
    {
        title: '1984',
        author: {
            firstName: 'George',
            lastName: 'Orwell'
        },
        published: 1949,
        genre: 'Science Fiction'
    },
    {
        title: 'The Hobbit',
        author: {
            firstName: 'J.R.R.',
            lastName: 'Tolkien'
        },
        published: 1937,
        genre: 'Fantasy'
    },
    {
        title: 'One Hundred Years of Solitude',
        author: {
            firstName: 'Gabriel',
            lastName: 'García Márquez'
        },
        published: 1967,
        genre: 'Magical Realism'
    },
    {
        title: 'The Picture of Dorian Gray',
        author: {
            firstName: 'Oscar',
            lastName: 'Wilde'
        },
        published: 1890,
        genre: 'Fiction'
    },
    {
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: {
            firstName: 'Douglas',
            lastName: 'Adams'
        },
        published: 1979,
        genre: 'Science Fiction'
    }
];
const fictionBooks = books.map(({title, published, genre, author}) => {

    // condition ? true : false
    // if (book.genre === "Fiction") {
    //     return {
    //         title: book.title,
    //         published: book.published,
    //         genre: book.genre,
    //         author: `${book.author.firstName} ${book.author.lastName}`
    //     }
    // }
    return genre === "Fiction" ? {title,published,genre,author:`${author.firstName} ${author.lastName}`} : undefined;
}).filter(book => book);
console.log(fictionBooks);


