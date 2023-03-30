/*
    TODO: Using separation of concern principles, module syntax, and
        async/await, create a series of code that:
        - uses the star wars api: https://swapi.dev/
        - returns a specific planet
        - returns the eye color of a specific character
        - returns all of the data on a specific movie
        *BONUS* - Add it onto the DOM however you want

*/
import {getPlanets, getCharacterEyecolor, getMovies} from "./starwars.js";
(async () => {
    // specific planet
    let planet = await getPlanets(3);
    console.log(planet);

    // eye color of a specific movie
    let eyeColor = await getCharacterEyecolor(4);
    console.log(eyeColor);

    // All movies

    let movieslist = await getMovies();
    console.log(movieslist);
})();
