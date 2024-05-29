---
title: One.MIT Inception
toc: false
theme: [air, alt, wide]
style: css/custom.css
---

```js
// IMAGES

const img_src = FileAttachment("./imgs/MIT-nano-exterior_0-resized.png").href;
const img_style =
  "object-fit:cover; border-radius: 0.75rem; border: solid 1px var(--theme-foreground-faintest);";
import { return_resized_img } from "./components/img_utils.js";
```

<div class= "grid grid-cols-2" style="grid-auto-rows: auto;">

:::card

# One.MIT Inception

> “MIT.nano sits in the shadow of MIT’s Great Dome, and our responsibility is to enhance the work and aspirations of the entire campus. We wanted a way to celebrate all of us instead of just a few &ndash; a monument to the MIT community made using the tools of nanoscale research.” ~ Prof. Vladimir Bulović

In early 2016, while in the planning stages for the structure that would become the <a href="https://whereis.mit.edu/?go=12">Lisa T. Su Building</a> and home of MIT.nano, Prof. Vladimir Bulovic was struck by a thought: if we had the names of everyone &ndash; students, faculty, staff, and alumni &ndash; who has been a part of the MIT community since the Institute opened in 1861 all the way up to the present day, could we etch them all into a single, 6" diameter silicon wafer?

The result &ndash; a surprisingly complex endeavor that involved months of work from a dedicated team and contributions from individuals across the Institute &ndash; is **One.MIT**.

Each design &ndash; the Great Dome (2018), the MIT Seal (2020), and the Move to Cambridge (2024) &ndash; reflects the growth of the MIT community as new students, new faculty, and new staff join each year.
In Bulovic's words, “One.MIT celebrates the MIT ethos and reminds us that no matter when we came to MIT, whatever our roles, we all leave a mark on this remarkable community.”

The One.MIT artwork and specially fabricated wafers are on permanent display in the ground floor galleries at MIT.nano in the <a href="https://whereis.mit.edu/?go=12">Lisa T. Su Building</a>.
The [onemit.mit.edu](https://onemit.mit.edu) interactive website allows visitors to search for individual names in each design.

_(Image: MIT.nano in the <a href="https://whereis.mit.edu/?go=12">Lisa T. Su Building</a>, opened in 2018.)_

:::

<div style="min-height:450px;">
  ${resize((width,height)=> return_resized_img(img_src,width,height,img_style))}
</div>
  
</div>
