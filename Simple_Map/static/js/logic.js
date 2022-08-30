// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Note the following for the code block below:
// 1) Instantiate *object* with string 'mapid', assign the *object* `L.map()` to
//    variable map;
// 2) 'mapid' references the `id`= tag in `<div>` element from index.html file
// 3) 'setView()` method sets the view of the map with geographical center, with
//    first coordinate (40.7) the latitude, second (-94.5) the latitude; the
//    zoom level set to '4' on a scale 0-18.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Note that an alternative (will use later in module) to `setView()` method for
// // setting map object center and zoom level is the following (using curly braces
// // notation), which "method is useful when we need to add multiple layers, or a
// // background image of our map(s)."
// let map = L.map("mapid", {
//     center: [
//         40.7, -94.5
//     ],
// });

// =================================================================================
// A "tile layer is used to load and display a tile layer on the map."
// For creating a map tile layer, have two options:
// ----
// // I. Use the Leaflet Documentation (https://leafletjs.com/examples/quick-start/)
// // ----
// // at this website, find code below (and assign to `streets` variable, "since the
// // tile layer will create a street-level map.")
// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our streets 'graymap' tile layer to the map.
// streets.addTo(map);
// // To understand the two code 'lines' above, see breakdown (below, referenced from Module 13.2.4)
// // 1. To variable `streets`, assign the `tileLayer()` method -- as shown in the Leaflet Documentation
// //    Quick Start Guide's 'Setting up the map' section. Note Leaflet *does not* provide a tile layer,
// //    instead offering tile layer APIs.
// // 2. In the parentheses of the `tileLayer()` method, are the following URLs:
// //    o The API URL with a reference to the `accessToken`
// //    o The `OpenStreetMap` URL inside the curly braces of the `tileLayer()` method
// // 3. The `maxZoom` attribute is added with a value of 18.
// // 4. The `id` attribute is added, assigned with `mapbox/streets-v11`, which whill show the streets on
// //    the map.
// // 5. The `accessToken` attribute is added, assigned a value of our `API_KEY` (from in config)
// // 6. Finally, the `addTo()` function is called with our map object, `map` on our graymap object tile
// //    layer. The `addTo()` function adds the graymap object tile layer to our `let map`.
// // 
// // "To change the map's style, change the map `id` using the list of Mapbox ids below:"
// // • mapbox/streets-v11
// // • mapbox/outdoors-v11
// // • mapbox/light-v10
// // • mapbox/dark-v10
// // • mapbox/satellite-v9
// // • mapbox/satellite-streets-v11
// ----
// II. Use the Mapbox Styles API
// ----
// "To use the Mapbox Styles API, edit the URL in the Leaflet `tileLayer()` method, as detailed on the
// Leaflet website:
// (i) First, navigate to the Mapbox Glossary (website is https://docs.mapbox.com/help/glossary/)
// (ii) Search the Static Tiles API (website https://docs.mapbox.com/help/glossary/static-tiles-api/)
// (iii) Copy this part of the URL: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/`
// (iv) In the tileLayer() code, replace this part of the URL, https://api.tiles.mapbox.com/v4/{id}/,
//      with the Mapbox Styles API URL you copied.
// (v) Remove the `.png` from the URL.
// (vi) Remove the `id` attribute and the map style reference.
// (vii) The code for the `tileLayer()` should look like the following:
// We create the tile layer that will be the background of our map.
let streets2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our streets2 'graymap' tile layer to the map.
streets2.addTo(map);
// Note: If you have trouble editing the URL, copy the URL above.
// (viii) To change your map style, click on the Static Tiles API documentation link on the Static
//        tiles API page (website https://docs.mapbox.com/api/maps/#static-tiles)
// (ix) On the left sidebar, click on the Styles link (website https://docs.mapbox.com/api/maps/#styles)
// (x) Below the Styles subheading, find a list of different Mapbox styles (available with valid access token):
//     • mapbox://styles/mapbox/streets-v11
//     • mapbox://styles/mapbox/outdoors-v11
//     • mapbox://styles/mapbox/light-v10
//     • mapbox://styles/mapbox/dark-v10
//     • mapbox://styles/mapbox/satellite-v9
//     • mapbox://styles/mapbox/satellite-streets-v11
// (xi) To change the map style, use the style given in the URLs (e.g., "streets-v11," "dark-v10," etc.).
// =================================================================================

// NOTE: "For the rest of the module, we'll use the Static Tiles API format in the Leaflet `tileLayer()` method."

// "After adding all of the code, this (`logic.js`) file should have the first two code lines, and the last two code lines from above."

// Next, we'll add the `logic.js` and `config.js` scripts to the HTML page.