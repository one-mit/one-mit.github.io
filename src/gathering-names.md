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

Over 300,000 names are etched in the wafers representing students, faculty, staff, and alumni from 1861 up to the fall of 2023.
The Alumni Association and Institutional Research keep the lists of students and alumni, as well as lists of faculty and staff since 1991 onwards.
The records of faculty and staff before 1991 existed only in paper form.

With the help of MIT Libraries and Institute Archives, over 6,000 pages of old paper directories were scanned and examined with optical character recognition (OCR).
Then, a combination of custom-built programs extracted the text from the digitized data, reformatted the names, and removed duplicates.
This was followed by hours of manual editing to catch OCR problems and other errors.
Even so, as our historians and archivists remind us, no record is perfect!

(Image: Example paper record used in optical character recognition.)

:::

<div style="min-height:300px;">
  ${resize((width,height)=> return_resized_img(img_src,width,height,img_style))}
</div>
  
</div>
