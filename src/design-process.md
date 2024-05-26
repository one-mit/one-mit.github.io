---
title: Design Process
toc: false
theme: [air, alt, wide]
style: css/custom.css
---

```js
// IMAGES

const img_src_kerning = FileAttachment("./imgs/text_kerning_example.png").href;
const img_src_zoomin = FileAttachment("./imgs/crop_M.jpg").href;
const img_style =
  "object-fit:cover; border-radius: 0.75rem; border: solid 1px var(--theme-foreground-faintest);";
import { return_resized_img } from "./components/img_utils.js";
```

<div class= "grid grid-cols-2" style="grid-auto-rows: auto;">

:::card

# Kerning

For every One.MIT mosaic, Prof. W. Craig Carter created the designs, algorithms, numerical solutions, and data translation -- a tremendous undertaking.

Every One.MIT mosaic starts from a black and white image: MIT's Great Dome, drawn by Heidi Erickson (2018); the MIT Seal (2020); an image inspired by a 1916 lithograph celebrating MIT's move to Cambridge (2024).
The black and white regions sow the seeds that produce the heavy and light fonts that you see in the final image.
For the final layout files, it was necessary for Carter to recreate kerns and the fonts as algorithmic geometric objects.The font types are inherited from their position in the background image.

Quality typesetting requires the spacing between characters to be [“kerned.”](https://en.wikipedia.org/wiki/Kerning)
For example, the appearance of **LY** looks better when the spacing within the **L** and the **Y** is smaller.
**IM** looks better with a wider spacing and so the kern is larger.

The kerns are different for the different font &ndash; each character pair has four possible kerns.
This produces some complexity because minor adjustments can switch font types that have different widths and kerns.
The change in spacing produces a cascading effect on subsequent font choices.
Modifying just one letter from light to dark (and vice versa) perturbs the spacing in the whole image and requires re-computing the entire mosaic.

_(Image: An example of text with [kerning](https://en.wikipedia.org/wiki/Kerning).)_

:::

<div style="min-height:350px;">
  ${resize((width,height)=> return_resized_img(img_src_kerning,width,height,img_style))}
</div>

:::card

# Font Optimization

Finally, Carter needed to find a font scale that fills the wafer space maximally.
While this seems straightforward at first, a small font change can cause an entire word to wrap around to the next line (familiar to anyone trying to fit an essay into a fixed number of pages).
Optimization would be simple if the leftover space smoothly decreased as the font scale gets larger—but the word wrap problem throws a spanner in the works.
Carter’s algorithm alleviates this somewhat by searching for names that slot into remaining spaces at the end of each row.

Even with these minute fixes, a satisfactory font scale cannot always be obtained.
So, the final algorithm performs an optimization over many different choices for the random order of the names.

Once a solution (i.e., the final image created by the millions of characters) is obtained it must be converted to two different printing languages.
For the wafer fabrication, Carter had to write data conversions to the layout file format (GDSII) that was created for interconnects on silicon chips.
For the large wall print, the data is converted to PostScript and then from PostScript to PDF.

_(Image: Zooming on the One.MIT 2018 wafer design)_

:::

<div style="min-height:350px;">
  ${resize((width,height)=> return_resized_img(img_src_zoomin,width,height,img_style))}
</div>

</div>
