const getPeople = async (people = 1) =>{
    try {
        let response = await fetch (`https://swapi.dev/api/people/${people}`);
          let data = await response.json();
          console.log(data)
          return data;
    } catch (error){
     console.log(error);
    }
}

(async () => {
    let newPerson = await getPeople(2);
})();
