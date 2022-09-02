// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// 13.4.3 : multi-line - center to SFO, zoom to 5
// 13.4.3 : Reset map center to between LAX-SFO route
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// 13.4.3 : Coordinates for each point to be used in the line.
// LAX-SFO-SLC-SEA airports
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// 13.4.3 : Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our streets2 'graymap' tile layer to the map.
streets2.addTo(map);