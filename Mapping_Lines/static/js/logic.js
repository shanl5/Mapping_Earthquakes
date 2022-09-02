// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// 13.4.3 skill-drill : SFO-AUS-ORD-YYZ-JFK
let map = L.map('mapid').setView([40.7, -94.5], 4);

// 13.4.3 : Coordinates for each point to be used in the line.
// SFO-AUS-ORD-YYZ-JFK (SanFra,Austin,Chicag,Toront,NewYor)
// from: https://www.distancesto.com
let line = [
    [37.6213, -122.3790],
    [30.1974, -97.6663],
    [41.9803, -87.9090],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

// 13.4.3 : Create a polyline using the line coordinates and make the line red.
// --> "Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map."
L.polyline(line, {
    color: "blue",
    dashArray: "8",
    weight: 4,
    opacity: 0.5
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our streets2 'graymap' tile layer to the map.
streets2.addTo(map);