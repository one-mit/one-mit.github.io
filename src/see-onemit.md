---
title: See One.MIT in person
toc: false
theme: [air,alt,wide]
---

```js
// VISIT BACKGROUND IMAGE

const background_img_src = FileAttachment("./imgs/one-visit-overlay.jpg").href;
function return_resized_img(width,height) {
  return html`<img src="${background_img_src}" height="${height}px" width="${width}px" style="object-fit:cover; border-radius: 0.75rem;">`
}
```

<div class= "grid grid-cols-2">
  <div class="card">
    ${resize((width,height)=> return_resized_img(width,height))}
    <h1> See One.MIT on display at MIT</h1>
    
One.MIT is on permanent display at <a style="text-decoration:none; color: #2A5DB0;" href="https://mitnano.mit.edu/" target="_blank">MIT.nano</a>, a nanoscale research facility located in the center of the MIT campus. Come see the wafer in the MIT.nano first floor galleries located in the southwest corner of the building, the corner closest to the MIT Great Dome (<a href="https://whereis.mit.edu/?go=12" target="_blank">map</a>).

  </div>

</div>
