
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
        center: [-98.48962, 29.42692], // starting position [lng, lat]
        zoom: 9, // starting zoom
});

    function placeMarkerAndPopup(info, map) {
        geocode(info.address, MAPBOX_API_TOKEN).then(function(coordinates) {
            let popup = new mapboxgl.Popup()
                .setHTML(info.popupHTML);
            let marker = new mapboxgl.Marker()
                .setLngLat(coordinates)
                .addTo(map)
                .setPopup(popup);
            popup.addTo(map);
        });
    }

    // Define the array of location information
    const placeInfo = [
        {address: "23 Abercorn St, Savannah, GA 31401",
            popupHTML: "<p style='color : red'>The Olde pink House</p>" },

        {address: "19210 I-10, San Antonio, TX 78257",
            popupHTML: "<p style='color : green'>Brasao Brazilian Steakhouse</p>" },

        {address: "368 South Avenue, Bloomington, MN 55425",
            popupHTML: "<p style='color : black'>CRAVE American Kitchen & Sushi Bar</p>" }
    ]
    placeInfo.forEach(function(restaurant) {
        placeMarkerAndPopup(restaurant, map);
    });