---
title: One.MIT Inception
toc: false
theme: [air, alt, wide]
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

const img_src_mitnano = FileAttachment("./imgs/MIT-nano-exterior_0.jpg").href;

function return_img(src, size) {
  return html` <img src="${src}" height="${size}px" width="${size}px" /> `;
}
```

<div class= "grid grid-cols-2">
  <div class="card">
    <h1> One.MIT Inception</h1>
    
*“MIT.nano sits in the shadow of MIT’s Great Dome, and our responsibility is to enhance the work and aspirations of the entire campus. We wanted a way to celebrate all of us instead of just a few — a monument to the MIT community made using the tools of nanoscale research.” --- Prof. Vladimir Bulović*

The One.MIT project started with a simple, elegant idea.

In early 2016, while in the planning stages for the structure that would become the Lisa T. Su Building (Building 12) and home of MIT.nano, Prof. Vladimir Bulovic was struck by a thought: if we had the names of everyone -- students, faculty, staff, and alumni -- who has been a part of the MIT community since the Institute opened in 1861 all the way up to the present day, could we etch them all into a single, 6" diameter silicon wafer?

The result - a surprisingly complex endeavor that involved months of work from a dedicated team and contributions from individuals across the Institute - is **One.MIT**.

Each design -- the Great Dome (2018), the MIT Seal (2020), and the Move to Cambridge (2024) -- reflects the growth of the MIT community as new students, new faculty, and new staff join each year. In Bulovic's words, “One.MIT celebrates the MIT ethos and reminds us that no matter when we came to MIT, whatever our roles, we all leave a mark on this remarkable community.”

<br>

_The One.MIT artwork and specially fabricated wafers are on display in the ground floor galleries at MIT.nano in the Lisa T. Su Building (<a href="https://whereis.mit.edu/?go=12">Building 12</a>). The <a href="https://onemit.mit.edu">onemit.mit.edu</a> interactive website allows visitors to search for individual names in each design._

<br>

_(Image: MIT.nano in the Lisa T. Su Building (<a href="https://whereis.mit.edu/?go=12">Building 12</a>), opened in 2018.)_

  </div>

  <div class="card">
    ${resize((width,height)=> return_img(img_src_mitnano,Math.min(width,height)))}
  </div>
  
</div>
