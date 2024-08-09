# Earthquake Visualization Using Leaflet and USGS Data

# Overview 

This project involves building an interactive map to visualize earthquake data provided by the United States Geological Survey (USGS). The map displays earthquake occurrences with markers that vary in size and color based on the magnitude and depth of the earthquakes. The goal is to create an informative and educational tool for the public and government organizations.


- **Data Source:**
The data is sourced from the USGS GeoJSON Feed, which is updated every 5 minutes. I used the link: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php to select a dataset to visualize. I chose the dataset "All Earthquakes from the Past 7 Days," available in JSON format.

### **Create the Earthquake Visualization**
- **Data Import and Visualization:**

After retrieving the data using the d3.json(url).then(data => {...}) function, I processed the data and called the createFeatures(data.features) function. The features array from the retrieved GeoJSON contains the earthquake data.

- **createFeatures(earthquakeData):**

This function processes each earthquake feature to display on the map. The onEachFeature function is defined to bind a popup to each earthquake feature, displaying the place and time of the earthquake.

- **GeoJSON Layer Creation:**

The GeoJSON layer uses the onEachFeature function for popups and a pointToLayer function to convert each data point into a circle marker on the map. The pointToLayer function determines the appearance of each marker based on the earthquake's magnitude (stored in the depth). Markers vary in radius, color, and opacity.

- **Color Mapping:**

The colors(depth) function returns a color based on the earthquake's magnitude. Different ranges of magnitude are mapped to different colors.

- **Base Layers:**

Different tile layers (street, topographic, grayscale) are defined to provide various background maps for the user.

- **Overlay and Map Initialization:**

An overlay containing the earthquake data is prepared. The map is initialized with L.map("map", {...}), setting its center, zoom level, and default layers. A layer control is added to the map using L.control.layers(baseMaps, overlayMaps, {...}).addTo(myMap), allowing users to switch between base maps and toggle the earthquake overlay.

Overall, this script creates an interactive map that visualizes recent earthquake data. Users can view details about each earthquake and switch between different map styles. The use of circle markers with varying sizes and colors makes it easier to identify and understand the differences in earthquake magnitudes.

### Resources
- Visualization Tool: Leaflet.js
- Data Processing: D3.js


# Features

 **Interactive Map:**

- Displays earthquake locations based on their latitude and longitude.
- Markers represent earthquake magnitude (size) and depth (color).
- Popups provide detailed information about each earthquake (magnitude, location, depth).
- A legend explains the color coding related to earthquake depth.

**Data Points:**

- Markers scale according to earthquake magnitude.
- Colors change based on the depth of the earthquake.
- Tooltips show the magnitude, location, and depth for each earthquake.
- All data points load accurately at the correct locations.

Thank you !

Author

Stuti Poudel