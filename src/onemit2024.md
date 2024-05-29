---
title: One.MIT 2024
toc: false
footer: false
header: false
theme: [air, alt, wide]
style: css/mapbox.css
sql:
  onemit2024: ./data/onemit2024.parquet
---

```js
// GEOJSON SOURCES

const blue_json = FileAttachment("data/hilbert-blue-minified.json").json();
const black_json = FileAttachment(
  "data/hilbert-black-simplified-minified.json",
).json();
const white_json = FileAttachment("data/hilbert-white-minified.json").json();
```

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
  sql`SELECT * FROM "onemit2024" WHERE "name" GLOB ${name_mit_glob} OR "name" GLOB ${name_mit_glob_reversed} ORDER BY LENGTH("name"), "name" LIMIT 25`,
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
  "pk.eyJ1IjoiZ3Zhcm5hdmlkZXMiLCJhIjoiY2pxZTVicmY2NGJyYTQ4cHBpMHF1MnQ0cCJ9.DuX_gamAs2uXdmq8Gio90Q";
const mapbox_style = "mapbox://styles/gvarnavides/clvmxvwcy01bb01rj7q509sg6";
const server_prefix = "https://onemitdata.mit.edu/tiles/";

const hilbert_source = {
  type: "geojson",
  data: blue_json,
};

const text_source = {
  type: "geojson",
  data: black_json,
};

const dome_source = {
  type: "geojson",
  data: white_json,
};

const onemit_vector_source = {
  type: "vector",
  tiles: [server_prefix + "onemit2024/{z}/{x}/{y}.pbf"],
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

const background_opacity = {
  type: "exponential",
  stops: [
    [19, 0.875],
    [21, 0],
  ],
};

const line_width = {
  type: "exponential",
  stops: [
    [16, 0.5],
    [21, 8],
  ],
};

const hilbert_layer = {
  id: "hilbert",
  type: "line",
  source: "hilbert",
  minzoom: 12,
  maxzoom: 21,
  layout: { visibility: "visible" },
  paint: {
    "line-color": "rgb(36, 107, 206)",
    "line-width": line_width,
    "line-opacity": background_opacity,
  },
};

const dome_layer = {
  id: "dome",
  type: "fill",
  source: "dome",
  minzoom: 12,
  maxzoom: 21,
  layout: { visibility: "visible" },
  paint: {
    "fill-color": "rgb(244, 232, 201)",
    "fill-opacity": background_opacity,
  },
};

const text_layer = {
  id: "text",
  type: "fill",
  source: "text",
  minzoom: 12,
  maxzoom: 21,
  layout: { visibility: "visible" },
  paint: {
    "fill-color": "rgb(0, 0, 0)",
    "fill-opacity": background_opacity,
  },
};

const hilbert_layer_inset = {
  id: "hilbert_inset",
  type: "line",
  source: "hilbert_inset",
  minzoom: 12 - zoomdif,
  maxzoom: 22,
  layout: { visibility: "visible" },
  paint: {
    "line-color": "rgb(36, 107, 206)",
    "line-width": line_width,
  },
};

const dome_layer_inset = {
  id: "dome_inset",
  type: "fill",
  source: "dome_inset",
  minzoom: 12 - zoomdif,
  maxzoom: 22,
  layout: { visibility: "visible" },
  paint: {
    "fill-color": "rgb(244, 232, 201)",
  },
};

const text_layer_inset = {
  id: "text_inset",
  type: "fill",
  source: "text_inset",
  minzoom: 12 - zoomdif,
  maxzoom: 22,
  layout: { visibility: "visible" },
  paint: {
    "fill-color": "rgb(0,0,0)",
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
  source: "onemit2024",
  "source-layer": "black-layer",
  minzoom: 19,
  layout: { visibility: "visible" },
  paint: {
    "fill-color": "rgb(0, 0, 0)",
    "fill-opacity": opacity,
  },
};

const blue_layer = {
  id: "blue-layer",
  type: "fill",
  source: "onemit2024",
  "source-layer": "blue-layer",
  minzoom: 19,
  layout: { visibility: "visible" },
  paint: {
    "fill-color": "rgb(36,107,206)",
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
// LOAD MAPS

const map = new mapboxgl.Map({
  container: "map",
  accessToken: access_token,
  style: mapbox_style,
  center: start_center,
  zoom: 14,
});

map.on("load", () => {
  map.addSource("hilbert", hilbert_source);
  map.addSource("text", text_source);
  map.addSource("dome", dome_source);
  map.addLayer(hilbert_layer);
  map.addLayer(dome_layer);
  map.addLayer(text_layer);
  map.addSource("onemit2024", onemit_vector_source);
  map.addSource("bounding-box", bounding_box_source);
  map.addLayer(black_layer);
  map.addLayer(blue_layer);
  map.addLayer(bounding_box_layer);
  map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
});

const map_inset = new mapboxgl.Map({
  container: "map_inset",
  accessToken: access_token,
  style: mapbox_style,
  center: start_center,
  zoom: 14 - zoomdif,
});

map_inset.on("load", () => {
  map_inset.addSource("hilbert_inset", hilbert_source);
  map_inset.addSource("dome_inset", dome_source);
  map_inset.addSource("text_inset", text_source);
  map_inset.addLayer(hilbert_layer_inset);
  map_inset.addLayer(dome_layer_inset);
  map_inset.addLayer(text_layer_inset);
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

const nudge = 1e-6;
const lower_left = [
  text_selection_mit.lower_longitude - nudge,
  text_selection_mit.lower_latitude - nudge,
];
const top_left = [
  text_selection_mit.lower_longitude - nudge,
  text_selection_mit.higher_latitude + nudge,
];
const top_right = [
  text_selection_mit.higher_longitude + nudge,
  text_selection_mit.higher_latitude + nudge,
];
const lower_right = [
  text_selection_mit.higher_longitude + nudge,
  text_selection_mit.lower_latitude - nudge,
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
