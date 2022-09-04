# Mapping_Earthquakes
Mapping Earthquakes with JS &amp; APIs

## Project Outline
This project involved mapping global earthquake data by learning to map GeoJSON format data<sup>(i)</sup> with the Mapbox API and Leaflet library; "building on JS skills and the D3 library to create an interactive world map."<sup>(i)</sup>

<sup>(i) Module 13.0.1 video; GeoJSON format is the industry standard for representing simple geographical features and non-spatial attributes.</sup>

### Background
With guidance in Module 13 as a new "Data Visualization Specialist" for the "Disaster Reporting Network" non-profit, by "Basil" (head of the team that includes reporters and other visualization specialists) and from mentor "Sadhana,"
a geographical map with the latest earthquake data<sup>(ii)</sup> — to be readily viewable on desktop and mobile phone browsers — was created with capability to depict location, magnitude of event, and tectonic plate fault lines.
On the map, an interactive popup marker shows the magnitude and location of each earthquake, with a marker diameter and color indicative of the magnitude (larger events with larger, darker markers)..

<sup>(ii) from the U.S. Geological Survey website, accessible here: https://earthquake.usgs.gov/</sup>

><sup>Table formatting from README.md for course repository,
as edited by TA J Caro.<br/>
(iii) includes summarized information provided in Module 13.0.1 video.</sup>

|Geographical feature type|Represented by|Example(s) of what may be represented|
|---|---|---|
|Points|Latitude and longitude coordinates|Addresses and Locations|
|Linestrings|Boundary coordinates|Streets, highways, travel routes, tectonic plates|
|Polygons|Boundary coordinates<sup>(iv)</sup>|Zip codes, counties, countries, provinces, land tracts|

Non-spatial attribute examples:<sup>(iii)</sup>
- Elevation
- Temperature
- Rain accumulation
- Hail size
- Tornado/hurricane strength
- Earthquake magnitude

<sup>(iv) Module 13.5.6 discusses Outer and optional Inner LinearRing coordinate arrays</sup>

### Coding Notes
- Git features introduced in this module:
 - Branching, pull requests, merging
 - Accessing raw JSON files from GitHub
<br/>
- Mapbox:
 - Base layers selectable one-at-a-time (radio button)
 - Overlays selectable none/all/any-at-a-time (checkbox)