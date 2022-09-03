// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// 13.5.1 : set map center to SFO, zoom level 10
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data. (note the geometry coordinates Longitude, Latitude -reversal from setView)
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Add feature to map.
// L.geoJSON(sanFranAirport).addTo(map);
// put more data to map with "`pointToLayer` callback function" 
// "Grabbing our GeoJSON data."
L.geoJSON(sanFranAirport, {
    // "We turn each feature into a marker on the map."
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng)
        // .bindPopup("<h2>" + feature.properties.city + "</h2>");
        .bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
    }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our streets2 'graymap' tile layer to the map.
streets2.addTo(map);