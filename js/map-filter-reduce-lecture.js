const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// prices.forEach(price => console.log(price));

const pricesAfterTax = prices.map( price=> {
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    if (total < 10) return total;
});

const randomNumbers = [70, 30, 73, 22, 40, 48, 76, 20, 13, 92, 20, 56, 97, 76, 26, 77, 57, 47, 83, 70 ];

const  numbersSquared = randomNumbers.map(number => number**2);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.map(car => car.mileage);

const carNames = cars.map(car => `${car.make} ${car.model}`);

const books = [
    {
        title: "Mexican Gothic",
        author: {
            firstName: "Sylvia",
            lastName: "Moreno"
        }
    },
    {
        title: "All Systems Red",
        author: {
            firstName: "Martha",
            lastName: "Wells"
        }
    },
    {
        title: "1177 B.C.: The Year Civilization Collapsed",
        author: {
            firstName: "Eric",
            lastName: "Cline"
        }
    },
    {
        title: "Version Control With Git",
        author: {
            firstName: "Jon",
            lastName: "Loeliger"
        }
    },
    {
        title: "Data Structures the Fun Way",
        author: {
            firstName: "Jeremy",
            lastName: "Kubica"
        }
    }
];

const authors = books.map(book => {
    return {
        title: book.title,
        author: `${book.author.firstName} ${book.author.lastName}`
    }
});

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
// .map curriculum exercise
// Use .map to create an array of strings where each element is a user's email address

const emails = users.map(user => user.email);
// emails.forEach(email => console.log(email));

const overTenThousandMiles = cars.filter(car => car.mileage > 10000).sort((a, b) => b.mileage - a.mileage);

const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];

//Create an array with all the smash characters whose names contain only 5 letters. Create another array with all the smash characters whose names contain over 10 letters. Order these arrays alphabetically.

const namesWithFiveLetters = smashers.filter(smashCharacter => smashCharacter.length === 5).sort();
const namesWithOverTenLetters = smashers.filter(smashCharacter => smashCharacter.length > 10).sort();

const usedCars = [
    {
        year: 2006,
        make: "Toyota",
        model: "Prius",
        price: 8044
    },
    {
        year: 2017,
        make: "Honda",
        model: "Civic",
        price: 18123
    },
    {
        year: 2004,
        make: "Ford",
        model: "Mustang",
        price: 9052
    },
    {
        year: 2013,
        make: "Cadillac",
        model: "ATS",
        price: 10991
    },
    {
        year: 2009,
        make: "Subaru",
        model: "Impreza",
        price: 7335
    },
    {
        year: 2008,
        make: "Dodge",
        model: "Charger",
        price: 8847
    },
    {
        year: 2014,
        make: "Chrysler",
        model: "300",
        price: 13517
    },
    {
        year: 2011,
        make: "Buick",
        model: "Regal",
        price: 8253
    },
    {
        year: 2012,
        make: "Chevrolet",
        model: "Impala",
        price: 6736
    },
    {
        year: 2015,
        make: "BMW",
        model: "3 series",
        price: 13767
    },
    {
        year: 2020,
        make: "Hyundai",
        model: "Elantra",
        price: 17892
    },
    {
        year: 2008,
        make: "Mercedes-Benz",
        model: "C-Class",
        price: 8444
    },
    {
        year: 2016,
        make: "Audi",
        model: "A3",
        price: 15900
    }
];

// usedCars.filter(car => car.price < 10000)
//     .map(car => {
//         const tax = car.price * 0.0825;
//         const total = (car.price + tax).toFixed(2);
//         return {...car, priceWithTax: parseFloat(total)
//         }
//     })
//     .sort((a, b) => b.price - a.price)
//     .forEach(({year, make, model, price, priceWithTax}) => {
//         const p = document.createElement('p');
//         p.innerText = `I found a ${year} ${make} ${model} for $${price}, or $${priceWithTax} after tax.`;
//         document.querySelector('body').append(p);
//     });

const usersWithMoreThanThreeLanguages = users.filter(user => user.languages.length >= 3);

const usedCarPrices = usedCars.map(car => car.price);
// console.log(usedCarPrices);
let totalValueOfAllCars = usedCarPrices.reduce((total, price, index)=> {
    // console.log(`The index is ${index}, the total is ${total}, current car value is ${price}`);
    return total + price;
});

const averageCarValue = usedCarPrices.reduce((total, price, index, array) =>{
    total = total + price;
    if (index === array.length -1){
        return parseFloat((total/array.length).toFixed(2));
    } else {
        return total;
    }

});

const aHundredNums =    [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];

const total = aHundredNums.reduce((accumulator, currentValue, index) => {
    // console.log(`At index ${index} the accumulator is ${accumulator} and the current value is ${currentValue}`);
    return accumulator + currentValue;
});

const average = aHundredNums.reduce((acc, curr, index, array) => {
    acc = acc + curr;
    if (index === array.length - 1) {
        return acc / array.length;
    } else {
        return acc;
    }
});

const totalOfOdds = aHundredNums.reduce((acc, curr, index) => {
    if (index % 2 === 1) {
        return acc + curr;
    } else {
        return acc;
    }

});

const valueOfUsedCars = usedCars.reduce((acc, car) => {
        return acc + car.price},
    0
);

const totalMileageOfAllCars = cars.reduce((acc, car) => {
        return acc + car.mileage
    },
    0
);

const highestMileage = cars.reduce((acc, car, index, array) => {
    if (index === array.length - 1){
        acc.push(car.mileage);
        return acc.sort((a, b)=>b-a)[0];
    } else {
        acc.push(car.mileage);
        return acc;
    }
}, []);

const mileageReport = cars.reduce((acc, car, index, array) => {
    if (index === array.length -1){
        acc.push(car.mileage);
        let report = 'The mileages are: ';
        report += acc.join(", ");
        const mileagesSorted = acc.sort((a,b) => b-a);
        const highestMileage = mileagesSorted[0];
        const lowestMileage = mileagesSorted[mileagesSorted.length-1];
        report += ".\n";
        report += "The highest mileage is " + highestMileage + ".\n";
        report += "The lowest mileage is " + lowestMileage + ".";
        return report;
    }  else {
        acc.push(car.mileage);
        return acc;
    }
}, []);