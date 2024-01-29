# Leaflet-challenge
Module 15 Challenge
Overview:
For this assignment, I have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

The instructions for this activity are broken into two parts:

Part 1: Create the Earthquake Visualization

Part 2: Gather and Plot More Data (Optional with no extra points earning)

- The USGS provides earthquake data in a number of different formats, updated every 5 minutes. I used this: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php link to choose a dataset to visualize. I picked the dataset that has "All Earthquakes from the Past 7 Days", which is at JSON format.I used the following way to import and visualize the data:

- After I retrieved the data using d3.json(url).then(data => {...}) , function to fetch the data and process, I made the function call, createFeatures(data.features) with features array from the retrieved GeoJSON, which contains the earthquake data.
- createFeatures(earthquakeData) function processes each earthquake feature to display on the map,while onEachFeature function is defined to bind a popup to each earthquake feature, displaying the place and time of the earthquake.
- With the GeoJSON Layer Creation, it uses the onEachFeature function for popups and a pointToLayer function to convert each data point into a circle marker on the map.
- The pointToLayer function determines the appearance of each marker based on the earthquake's magnitude (stored in depth). Markers have varying radius, color, and opacity.
- Function, colors(depth) returned a color based on the earthquake's magnitude. Different ranges of magnitude are mapped to different colors.
- After that the Base Layers, with different tile layers (street, topographic, grayscale) are defined to provide various background maps for the user.

- An overlay containing the earthquake data is prepared.

- L.map("map", {...}): Initializes the map, sets its center, zoom level, and default layers.

- L.control.layers(baseMaps, overlayMaps, {...}).addTo(myMap): This adds a layer control to the map, allowing users to switch between base maps and toggle the earthquake overlay.
Overall, this script creates an interactive map that visualizes recent earthquake data. Users can view details about each earthquake and switch between different map styles. The use of circle markers with varying sizes and colors makes it easier to identify and understand the differences in earthquake magnitudes.

Thank you !