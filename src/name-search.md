---
title: Name Search Implementation
toc: false
theme: [air, alt, wide]
style: css/custom.css
---

```js
// IMAGES

const img_src_raster = FileAttachment(
  "./imgs/raster-tiles-pyramid-resized.png",
).href;
const img_src_vector = FileAttachment(
  "./imgs/perspective-map-resized.png",
).href;
const img_style = "object-fit:contain;";
const img_style_2 =
  "object-fit:cover; object-position: top right; border-radius: 0.75rem; border: solid 1px var(--theme-foreground-faintest);";
import { return_resized_img } from "./components/img_utils.js";
```

<div class= "grid grid-cols-2" style="grid-auto-rows: auto;">

:::card

# Zoomable Maps

For the 2018 One.MIT mosaic, the SQL-based name search implementation uses precomputed images at different magnifications.
Inspired by the way visitors interacted with the large 2018 mosaic wall print, MIT alum Georgios Varnavides wanted to create a more intuitive user-experience, for the 2020 and 2024 mosaics, similar to how we navigate web maps.

While at small magnifications a map of the entire world can be displayed as an image, using an appropriate map projection, as we increase magnification and require finer detail, a map of the entire world is too big to be displayed on the screen.
Instead, the clever mechanism web map providers use to enable this efficiently is called [map tiles](https://en.wikipedia.org/wiki/Tiled_web_map).

Essentially, the world is divided into tiles &ndash; each representing a fixed area at increasing magnification.
At zoom level 0, there is a single tile of the whole Earth, while at zoom level 1 the Earth is split into a 2x2 grid for a total of four squares.

This creates a so-called [quadtree data stucture](https://en.wikipedia.org/wiki/Quadtree), which is remarkably efficient to query.
The data efficiency of raster tiles can be further improved by serving vector representations of the map features, clipped at the appropriate tile boundaries.

_(Image: A map divided into hierarchical tiles, source: [maptiler.com](https://www.maptiler.com/news/2019/02/what-are-vector-tiles-and-why-you-should-care/).)_

:::

<div style="min-height:350px;">
  ${resize((width,height)=> return_resized_img(img_src_raster,width,height,img_style))}
</div>

:::card

# Custom Vector Tiles

In order to utilize existing open-source map software for convenient navigation, Varnavides had to generate custom vector tiles from the postscript characters produced by Carter's [algorithm](./design-process).

The process involved a number of steps:

- Convert the postscript characters to [GeoJSON features](https://en.wikipedia.org/wiki/GeoJSON)
  - ensuring correct [winding order](https://docs.mapbox.com/data/tilesets/guides/vector-tiles-standards/#winding-order)
- Generate compressed vector tiles at the appropriate zoom levels
  - using the open-source [tippecanoe](https://github.com/felt/tippecanoe) software
- Serve the vector tiles using a dedicated server
  - using the open-source [tileserver GL](https://github.com/maptiler/tileserver-gl) software
- Render custom map layers with client-side interactivity
  - using the open-source [mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides) software

_(Image: Perspective view of the One.MIT 2020 vector tiles implementation)_

:::

<div style="min-height:350px;">
  ${resize((width,height)=> return_resized_img(img_src_vector,width,height,img_style_2))}
</div>

</div>
