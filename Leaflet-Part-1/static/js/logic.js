// define url = All earthquakes in the past day
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL/
d3.json(url).then(data => {

    // display geojson data in console
    console.log(data);

    // call the function with the data features
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {

  //  Function to display place, time, magnitude, and depth of each earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]} km</p>`);
}

    // Create a GeoJSON layer that contains the features array on the earthquakeData object
  let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature,
        pointToLayer: function(feature, coordinates) {
            let depth = feature.geometry.coordinates[2];
            let geoMarkers = {
                radius: radiusSize(feature.properties.mag),
                fillColor: colors(depth),
                fillOpacity: 0.7,
                weight: 0.5
            };
            return L.circleMarker(coordinates, geoMarkers);
        }
    });

  // call function to create the map
  createMap(earthquakes);
};

// Function to determine marker size by magnitude of the earthquake
function radiusSize(magnitude) {
    // Scale factor for the radius
    return magnitude * 4; 
}

// Function to determine marker color by depth of the earthquake
function colors(depth) {
    if (depth < 10) {
        return "#84fd6c";
    } else if (depth < 30) {
        return "#bfd16e";
    } else if (depth < 50) {
        return "#ddbf5c";
    } else if (depth < 70) {
        return "#e79b37";
    } else if (depth < 90) {
        return "#ec7141";
    } else {
        return "#f82720";
    }
}
// function to create the map
function createMap(earthquakes) {
    // Create the base layers.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // topographic view
    let topo = L.tileLayer.wms('http://ows.mundialis.de/services/service?',{layers: 'TOPO-WMS'});

    let grayscale = L.tileLayer('https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
        attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 0,
        maxZoom: 22,
        subdomains: 'abcd',
        accessToken: 'YnpQEhRDopnhG3NFNlYUwXCpK50fR3yagyHj5MwZJKWU0gnuq4iYH7xJ49UjNWaC'
    });

    // Create a baseMaps object.
    let baseMaps = {
        "Street Map": street,
        "Topographic Map": topo,
        "Grayscale Map": grayscale
    };

    // overlay object for street map and topgraphic map
    let overlayMaps = {
        Earthquakes: earthquakes
    };

    // Create map
    let myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [street, earthquakes]
    });

    // Add the layer control to the map.
    // To choose between map view options
    L.control.layers(baseMaps, overlayMaps, {
        // collapsed: false
    }).addTo(myMap);
};