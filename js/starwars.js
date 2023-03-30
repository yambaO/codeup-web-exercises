export const  getPlanets = async(planetId = 1) => {
    try {
        let response = await fetch(`https://swapi.dev/api/planets/${planetId}/`)
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getCharacterEyecolor = async(EyeColorId) =>{
    try {
        let response = await fetch(`https://swapi.dev/api/people/${EyeColorId}/`)
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getMovies = async ()=> {
    try {
        let response = await fetch(`https://swapi.dev/api/films/`)
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

