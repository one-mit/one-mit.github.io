---
title: Design Process
toc: false
theme: [air,alt,wide]
---

<style>
  
.img-container {
  text-align: center;
}

.img-container img {
  position: absolute;
  left:50%;
  transform: translateX(-50%);
}
  
</style>


```js
// IMAGES

const img_src_kerning = FileAttachment("./imgs/text_kerning_example.png").href;
const img_src_zoomin = FileAttachment("./imgs/crop_M.jpg").href;

function return_img(src, size) {
  return html`
      <img
        src="${src}"
        height="${size}px"
        width="${size}px"
      />
  `;
}
```

<div class= "grid grid-cols-2">
  <div class="card">
    <h1> Design Process  </h1>
    
For every iteration of One.MIT, Prof. W. Craig Carter created the designs, algorithms, numerical solutions, and data translation -- a tremendous undertaking.  

**Placing the names and creating the mosaics**  

Every One.MIT artwork starts from a black and white image:  MIT's Great Dome, drawn by Heidi Erickson (2018); the MIT Seal (2020); an image Carter himself drew, inspired by a lithograph produced for the 1916 celebration of MIT's move from Boston to Cambridge (2024). 

The black and white regions sow the seeds that produce the heavy and light fonts that you see in the final image. For the final layout files, it was necessary for Carter to recreate kerns and the fonts as algorithmic geometric objects. 

The font types are inherited from their position in the background image. Quality typesetting requires the spacing between characters to be “kerned.” For example, the appearance of **LY** looks better when the spacing within the **L** and the **Y** is smaller. **IM** looks better with a wider spacing and so the kern is larger. 

(*Image: An example of text with kerning. <a href="https://en.wikipedia.org/wiki/Kerning">Curious about kerning? Learn more at Wikipedia.</a>*)

  </div>

  <div class="card">
    ${resize((width,height)=> return_img(img_src_kerning,Math.min(width,height)))}
  </div>

  <div class="card">

The kerns are different for the different fonts—each character pair has four possible kerns. This produces some complexity because minor adjustments can switch font types that have different widths and kerns. The change in spacing produces a cascading effect on subsequent font choices. Modifying just one letter from light to dark (and vice versa) perturbs the spacing in the whole image and requires re-computing the entire mosaic.

Finally, Carter needed to find a font scale that fills the wafer space maximally. This seems straightforward at first. However, a small font change can cause an entire word to wrap around to the next line (which is familiar to anyone trying to fit an essay into a fixed number of pages). Optimization would be simple if the leftover space smoothly decreased as the font scale gets larger—but the word wrap problem throws a spanner in the works. Carter’s algorithm alleviates this somewhat by searching for names that slot into remaining spaces at the end of each row. Even with these minute fixes, a satisfactory font scale cannot always be obtained. So, the final algorithm performs an optimization over many different choices for the random order of the names. 

Once a solution (i.e., the final image created by the millions of characters) is obtained it must be converted to two different printing languages. For the wafer fabrication, Carter had to write data conversions to the layout file format (GDSII) that was created for interconnects on silicon chips.  For the large wall print, the data is converted to PostScript and then from PostScript to PDF. 

*(Image: Zooming on the One.MIT 2018 wafer design)*

  <div class="card">
    ${resize((width,height)=> return_img(img_src_zoomin,Math.min(width,height)))}
  </div>

  </div>

</div>
