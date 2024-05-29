---
title: One.MIT 2020
toc: false
header: false
footer: false
theme: [air, alt, wide]
style: css/mapbox.css
sql:
  onemit2021: ./data/onemit2021.parquet
---

```js
// TEXT BOX SEARCH

const text_input_mit_input = Inputs.text({
  placeholder: "William Barton Rogers",
  autocapitalize: false,
  autocomplete: false,
  width: width,
});
const text_input_mit = Generators.input(text_input_mit_input);
```

```js
// QUERY RESULTS

const name_mit_array = text_input_mit.toUpperCase().trim().split(" ");
const name_mit_glob = name_mit_array.reduce((acc, val) => acc + val + "*", "*");
const name_mit_glob_reversed = name_mit_array
  .toReversed()
  .reduce((acc, val) => acc + val + "*", "*");

const text_selection_mit_input = Inputs.table(
  sql`SELECT * FROM "onemit2021" WHERE "name" GLOB ${name_mit_glob} OR "name" GLOB ${name_mit_glob_reversed} ORDER BY LENGTH("name"), "name" LIMIT 25`,
  {
    columns: ["name"],
    required: false,
    multiple: false,
    height: 240,
    layout: "auto",
  },
);
const text_selection_mit = Generators.input(text_selection_mit_input);
```

```js
// MAP TILES AND LAYERS

const start_center = [-71.100558, 42.358211];
const zoomdif = 4;
const fly_duration = 20000;
const access_token =
  "pk.eyJ1IjoiaWNodWFuZyIsImEiOiJjazl2b2s1aW4wMWQzM3BxamczOTZ4c3ExIn0.3W79oPGv3rXMbqfS3KHnBw";
const mapbox_style = "mapbox://styles/mapbox/light-v11";
const server_prefix = "https://onemitdata.mit.edu/tiles/";

const seal_source = {
  type: "vector",
  tiles: [server_prefix + "seal/{z}/{x}/{y}.pbf"],
  minzoom: 0,
  maxzoom: 22,
};

const onemit_vector_source = {
  type: "vector",
  tiles: [server_prefix + "onemit-tricolor/{z}/{x}/{y}.pbf"],
  minzoom: 9,
  maxzoom: 20,
};

var bounding_box_geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            ["-71.10425815114", "42.35599952448481"],
            ["-71.10425815114", "42.35599952448481"],
            ["-71.10425815114", "42.35599952448481"],
            ["-71.10425815114", "42.35599952448481"],
            ["-71.10425815114", "42.35599952448481"],
          ],
        ],
      },
    },
  ],
};

const bounding_box_source = {
  type: "geojson",
  data: bounding_box_geojson,
};

const seal_layer = {
  id: "seal",
  type: "fill",
  source: "seal",
  "source-layer": "seal-layer",
  filter: ["==", "$type", "Polygon"],
  minzoom: 12,
  maxzoom: 21,
  layout: { visibility: "visible" },
  paint: {
    "fill-antialias": true,
    "fill-color": "rgb(225, 142, 65)",
    "fill-opacity": {
      type: "exponential",
      stops: [
        [19, 1],
        [21, 0],
      ],
    },
  },
};

const seal_layer_inset = {
  id: "seal_inset",
  type: "fill",
  source: "seal",
  "source-layer": "seal-layer",
  filter: ["==", "$type", "Polygon"],
  minzoom: 12 - zoomdif,
  maxzoom: 22,
  layout: { visibility: "visible" },
  paint: {
    "fill-antialias": true,
    "fill-color": "rgb(225, 142, 65)",
  },
};

const opacity = {
  type: "exponential",
  stops: [
    [19, 0],
    [22, 1],
  ],
};

const black_layer = {
  id: "black-layer",
  type: "fill",
  source: "onemit-tricolor",
  "source-layer": "black-layer",
  minzoom: 19,
  layout: { visibility: "visible" },
  paint: {
    "fill-color": "rgb(161, 89, 39)",
    "fill-opacity": opacity,
  },
};

const dark_layer = {
  id: "dark-layer",
  type: "fill",
  source: "onemit-tricolor",
  "source-layer": "dark-layer",
  minzoom: 19,
  layout: { visibility: "visible" },
  paint: {
    "fill-color": "rgb(206,112,24)",
    "fill-opacity": opacity,
  },
};

const light_layer = {
  id: "light-layer",
  type: "fill",
  source: "onemit-tricolor",
  "source-layer": "light-layer",
  minzoom: 19,
  layout: { visibility: "visible" },
  paint: {
    "fill-color": "rgb(206,112,24)",
    "fill-opacity": opacity,
  },
};

const bounding_box_layer = {
  id: "bounding-box-layer",
  type: "line",
  source: "bounding-box",
  minzoom: 19,
  layout: { visibility: "visible" },
  paint: {
    "line-color": "rgb(163,31,52)",
    "line-width": 4,
    "line-opacity": opacity,
  },
};
```

<div id="map"> </div>
<div id="map_inset"> </div>
<div id="map_inset_container">
  <div id="map_inset_box"> </div>
</div>

<div class="grid grid-cols-4" style="position: absolute; top:0; left: 1rem;">
  <div style="z-index: 1002; max-width:300px;">
  Start typing a name..
  ${text_input_mit_input}
  ${text_input_mit.length > 0 ? text_selection_mit_input : ""}
  </div>
  <div> </div>
  <div> </div>
  <div> </div>
</div>

```js
//  LOAD MAPS

const map = new mapboxgl.Map({
  container: "map",
  accessToken: access_token,
  center: start_center,
  zoom: 14,
  style: "mapbox://styles/mapbox/light-v11",
});

map.on("load", () => {
  map.addSource("seal", seal_source);
  map.addLayer(seal_layer);
  map.addSource("onemit-tricolor", onemit_vector_source);
  map.addSource("bounding-box", bounding_box_source);
  map.addLayer(black_layer);
  map.addLayer(dark_layer);
  map.addLayer(light_layer);
  map.addLayer(bounding_box_layer);
  map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
});

const map_inset = new mapboxgl.Map({
  container: "map_inset",
  accessToken: access_token,
  center: start_center,
  zoom: 14 - zoomdif,
  style: "mapbox://styles/mapbox/light-v11",
});

map_inset.on("load", () => {
  map_inset.addSource("seal", seal_source);
  map_inset.addLayer(seal_layer_inset);
});

let disable = false;
map.on("move", () => {
  if (!disable) {
    let center = map.getCenter();
    let zoom = map.getZoom();
    let pitch = map.getPitch();
    let bearing = map.getBearing();

    disable = true;
    map_inset.setCenter(center);
    map_inset.setZoom(zoom - zoomdif);
    map_inset.setPitch(pitch);
    map_inset.setBearing(bearing);
    disable = false;
  }
});

map_inset.on("move", () => {
  if (!disable) {
    let center = map_inset.getCenter();
    let zoom = map_inset.getZoom();
    let pitch = map_inset.getPitch();
    let bearing = map_inset.getBearing();

    disable = true;
    map.setCenter(center);
    map.setZoom(zoom + zoomdif);
    map.setPitch(pitch);
    map.setBearing(bearing);
    disable = false;
  }
});

invalidation.then(() => {
  map.remove();
  map_inset.remove();
});
```

```js
// FLY-TO

const center_longitude =
  (text_selection_mit.lower_longitude + text_selection_mit.higher_longitude) /
  2;
const center_latitude =
  (text_selection_mit.lower_latitude + text_selection_mit.higher_latitude) / 2;

const nudge = 1.5e-6;
const lower_left = [
  text_selection_mit.lower_longitude + nudge,
  text_selection_mit.lower_latitude,
];
const top_left = [
  text_selection_mit.lower_longitude + nudge,
  text_selection_mit.higher_latitude,
];
const top_right = [
  text_selection_mit.higher_longitude + nudge,
  text_selection_mit.higher_latitude,
];
const lower_right = [
  text_selection_mit.higher_longitude + nudge,
  text_selection_mit.lower_latitude,
];
const bounding_box_rectangle = [
  lower_left,
  top_left,
  top_right,
  lower_right,
  lower_left,
];

bounding_box_geojson.features[0].geometry.coordinates[0] =
  bounding_box_rectangle;
map.getSource("bounding-box").setData(bounding_box_geojson);

map.flyTo({
  center: [center_longitude, center_latitude],
  essential: true,
  duration: 20000,
  zoom: 25,
});

// reset text box
text_input_mit_input.value = "";
text_input_mit_input.dispatchEvent(new Event("input", { bubbles: true }));
```

```js
// MANUALLY RESIZE MAP ON SIDEBAR TOGGLE

const toggle = document.querySelector("#observablehq-sidebar-toggle");
toggle.addEventListener("click", () => {
  map.resize();
  map_inset.resize();
});
```
