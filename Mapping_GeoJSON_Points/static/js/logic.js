// Add console.log to check to see if our code is working.
console.log("working");

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
// ---------
// put more data to map with "`onEachFeature` callback function"
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h4>Airport code: " + feature.properties.faa + "<hr>" + "Airport name: " + feature.properties.name) + "</h4>";
    }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our streets2 'graymap' tile layer to the map.
streets2.addTo(map);