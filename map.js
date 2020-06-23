import "https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmltYXJrcyIsImEiOiJjazN5dzh0bnIwM29zM2xva2Y5ZnY5dzhtIn0.uxf34AGdawHVh_HMiuVZpw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [-97.746083, 30.257006],
  zoom: 8.3
});
map.on("load", function() {
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description: "Tennis backboard",
            icon: "tennis",
            image: "pictures/club-1.JPG",
            galleryLink: "gallery.html?place=1"
          },
          geometry: {
            type: "Point",
            coordinates: [-97.746083, 30.257006]
          }
        },
        {
          type: "Feature",
          properties: {
            description: "Tennis backboard",
            icon: "tennis",
            image: "pictures/cave-1.JPG",
            galleryLink: "gallery.html?place=2"
          },
          geometry: {
            type: "Point",
            coordinates: [-97.752129, 30.236961]
          }
        },
        {
          type: "Feature",
          properties: {
            description: "Tennis courts",
            icon: "tennis",
            image: "pictures/45th-1.JPG",
            galleryLink: "gallery.html?place=3"
          },
          geometry: {
            type: "Point",
            coordinates: [-97.72688708584259, 30.307665949916128]
          }
        }
      ]
    }
  });
  // Add a layer showing the places.
  map.addLayer({
    id: "places",
    type: "symbol",
    source: "places",
    layout: {
      "icon-image": "{icon}-15",
      "icon-allow-overlap": true
    }
  });

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on("click", "places", function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;
    var image = e.features[0].properties.image;
    var galleryLink = e.features[0].properties.galleryLink;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    new mapboxgl.Popup({ closeButton: false, anchor: false })
      .setLngLat(coordinates)
      .setHTML(
        '<div><img class="popupPic" src="' +
          image +
          '" ><p class="description">' +
          description +
          '<a href="' +
          galleryLink +
          '" > see more </a></p></div>'
      )
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on("mouseenter", "places", function() {
    map.getCanvas().style.cursor = "pointer";
  });

  // Change it back to a pointer when it leaves.
  map.on("mouseleave", "places", function() {
    map.getCanvas().style.cursor = "";
  });
});
