"Strict use";
(function(){
    "use strict";

    const planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
     planetsArray = planetsString.split('|');
     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
      let stringBreak = planetsArray.join('<br>');
      console.log( "joining array " + stringBreak);

       planetsArray.push("<ul>");
       planetsArray.unshift("<ul>");
       let unordered = planetsArray.join('<li>');
       console.log(planetsArray + unordered);
})();