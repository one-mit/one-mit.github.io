---
title: Fabricating the Wafer
toc: false
theme: [air, alt, wide]
style: css/custom.css
---

```js
// IMAGES

const img_src_photolith = FileAttachment(
  "./imgs/photolithography-in-cleanroom.png",
).href;
const img_src_fab2020 = FileAttachment(
  "./imgs/onemit2020_fab_IMG_1372.JPG",
).href;

const img_style =
  "object-fit:cover; border-radius: 0.75rem; border: solid 1px var(--theme-foreground-faintest);";

const youtube_src =
  "https://www.youtube.com/embed/qCX2iEi5X1o?start=2870&end=3012";

import {
  return_resized_img,
  return_resized_iframe,
} from "./components/img_utils.js";
```

<div class= "grid grid-cols-2" style="grid-auto-rows: auto;">
  
:::card

# Fabricating the Wafer

The very first wafer was fabricated in 2018 by Dennis Ward and Kris Payer in the now-closed Microsystems Technology Laboratory cleanrooms in Building 39, before the newly-built MIT.nano shared central facility was completed and opened to users.
Since then, every wafer that you can see displayed on the walls has been fabricated in the cleanrooms of MIT.nano by teams that include MIT undergraduates, graduate students, staff, faculty, and alumni!

(Image: _Inside the cleanroom fabrication facility_)

:::

<div style="min-height:250px;">
  ${resize((width,height)=> return_resized_img(img_src_photolith,width,height,img_style))}
</div>

:::card

Despite the complexity of computationally generating the image and layout files, patterning the tiny text on a silicon wafer is easy &ndash; for someone familiar with the fabrication processes used every day for micro- and nano-technology.
First, the specially cleaned wafer is loaded into deposition chambers to grow a thin silicon nitride layer followed by an aluminum layer.
The two layers combined measure approximately 100nm in thickness, or 500-1000 times thinner than a single human hair.

The wafer is then coated with photoresist and exposed in a direct-write photolithography tool to make an etch mask.
Finally, the aluminum is selectively etched away and the photoresist removed to create the image on the wafer.

(Video: _Glimpse of the wafer fabrication_)
:::

<div style="min-height:250px;">
  ${resize((width,height)=> return_resized_iframe(youtube_src,width,height))}
</div>


:::card

For One.MIT 2024, Dr. Jorg Scholvin assembled a team that reflected One.MIT &ndash; students, faculty, staff, and alumni &ndash; and worked with them to fabricate the wafer inside MIT.nano’s cleanroom.
The fab team included Prof. W. Craig Carter; undergraduate students Akorfa Dagadu, Sean Luk, Emilia K Szczepaniak, Amber Velez, and twin brothers Juan Antonio Luera and Juan Angel Luera; Sloan EMBA student Patricia LaBorda; staff member Kevin Verrier of MIT Facilities; and alumnae Madeline Hickman '11 and Eboney Hearn '01, who is also the executive director of Engineering Outreach Programs.

_(Image: The MIT Seal design wafer (One.MIT 2020) was fabricated in April 2022 inside MIT.nano by undergraduate students Eryn Cornelius ’23, Syd Robinson ’25, James Greer ’22, and Aashini Shah ’22 led by Jorg Scholvin of MIT.nano.)_

:::

<div style="min-height:250px;">
  ${resize((width,height)=> return_resized_img(img_src_fab2020,width,height,img_style))}
</div>

</div>
