---
title: Gathering the Names
toc: false
theme: [air, alt, wide]
style: css/custom.css
---

```js
// IMAGES

const img_src = FileAttachment("./imgs/about-OCR4-resized.png").href;
const img_style =
  "object-fit:cover; object-position: left; border-radius: 0.75rem; border: solid 1px var(--theme-foreground-faintest);";
import { return_resized_img } from "./components/img_utils.js";
```

<div class= "grid grid-cols-2" style="grid-auto-rows: auto;">

:::card

# Gathering the Names

Nearly 340,000 names are etched in the most recent wafer design, representing students, faculty, staff, and alumni from 1861 up to the fall of 2023.
The Alumni Association and Institutional Research maintain electronic databases of current students and alumni, as well as lists of faculty and staff since 1991 onwards.
The records of faculty and staff before 1991 existed only in paper form.

With the help of historian Nora Murphy at Institute Archives and Jenn Morris at the MIT Libraries, over 6,000 pages of old paper directories were located, scanned, and converted into electronic text with optical character recognition (OCR). This process alone took more than half a year. Then with a combination of custom-built programs, we extracted the text from the digitized data and spent hours manually editing to catch OCR problems and other errors.

Collating the names -- to construct a dataset spanning more than 160 years -- presented several challenges, given the variety of input sources and the need to format names in a consistent manner. Many names were listed in multiple places, sometimes spelled or formatted differently across sources. And some groups are simply hard to find in the records.

Over the course of the project, we grew to appreciate Murphy's perspective, shared early on: that even with seemingly endless data nowadays, "there are no _perfect_ records..." With every iteration, community input aids our endeavor to collect as extensive a collection of names as we can to form the foundation of One.MIT.

_(Image: Example paper record used in optical character recognition.)_

:::

<div style="min-height:300px;">
  ${resize((width,height)=> return_resized_img(img_src,width,height,img_style))}
</div>
  
</div>
