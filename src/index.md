---
toc: false
style: css/index.css
---

```js
// IMAGES
const img_src_2018 = FileAttachment("./imgs/onemit2018_thumbnail.png").href;
const img_src_2020 = FileAttachment("./imgs/onemit2020_thumbnail.png").href;
const img_src_2024 = FileAttachment("./imgs/onemit2024_thumbnail.png").href;

import { return_resized_img_link } from "./components/img_utils.js";
```

<div class="hero">
  <h1>One.MIT</h1>

Generation after generation, the people of MIT have worked together to build a better world. Each era faced challenges particular to its own time and place.
But if you could travel through time to visit the Institute in any year of our history, you would find a place that feels remarkably familiar: curious, rigorous, and relentlessly focused on advancing knowledge and working wisely, creatively, and effectively for the betterment of humankind.
One.MIT is a tribute to this special community.
We have gathered, to the best of our ability, the names of those who have passed through the Institute on their way to building a better world or who arrived here and found the place where they would conduct their life’s work.

We have shaped the names of these individuals into three mosaics: MIT’s Great Dome (2018), the MIT Seal (2020), and an homage to the founding of the Cambridge campus a century ago (2024).
These images &mdash; etched on a silicon wafer using the tools of MIT.nano &mdash; symbolize the collective sense of purpose that drives MIT to confront the questions of today and to solve the problem of tomorrow.
Whether you were part of MIT in 1870 or 1970, 1920 or 2020, you are part of a family whose reach spans the globe and whose impact defies measurement.
Many generations, one community, One.MIT.

One.MIT is on permanent display at [MIT.nano](https://mitnano.mit.edu), a nanoscale research facility located in the center of the MIT campus.
Come see the wafers in the MIT.nano first floor galleries located in the southwest corner of the building, the corner closest to the MIT Great Dome ([map](https://whereis.mit.edu/?go=12)).

</div>

<div class="grid grid-cols-3" style="grid-auto-rows: auto;">
  <div class="img-container" style="min-height:242px;">
    ${resize((width,height)=> return_resized_img_link(img_src_2018,"./onemit2018",Math.min(width,height)))}
  </div>
  <div class="img-container" style="min-height:242px;">
    ${resize((width,height)=> return_resized_img_link(img_src_2020,"./onemit2020",Math.min(width,height)))}
  </div>
  <div class="img-container" style="min-height:242px;">
    ${resize((width,height)=> return_resized_img_link(img_src_2024,"./onemit2024",Math.min(width,height)))}
  </div>
</div>
