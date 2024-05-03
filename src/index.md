---
toc: false
---

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  font-size: 18px;
  text-align: center;
}

.hero h1 {
  margin: 2rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 3vw;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

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

const img_src_2018 = FileAttachment("./imgs/onemit2018_thumbnail.png").href;
const img_src_2020 = FileAttachment("./imgs/onemit2020_thumbnail.png").href;
const img_src_2024 = FileAttachment("./imgs/onemit2024_thumbnail.png").href;

function return_img(src, size, url) {
  return html`
    <a href="${url}">
      <img
        src="${src}"
        height="${size}px"
        width="${size}px"
      />
    </a>
  `;
}
```

<div class="hero">
  <h1>One.MIT</h1>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Enim nulla aliquet porttitor lacus luctus accumsan.
Elit duis tristique sollicitudin nibh.
Orci a scelerisque purus semper eget duis at tellus.
Ac tortor vitae purus faucibus ornare.
Euismod nisi porta lorem mollis aliquam ut porttitor.
Augue interdum velit euismod in.
Massa tincidunt dui ut ornare lectus.
Neque gravida in fermentum et sollicitudin ac orci phasellus.
Viverra ipsum nunc aliquet bibendum enim facilisis gravida. 

</div>

<div class="grid grid-cols-3" style="grid-auto-rows: auto;">
  <div class="img-container" style="min-height:242px;">
    ${resize((width,height)=> return_img(img_src_2018,Math.min(width,height),"./onemit2018"))}
  </div>
  <div class="img-container" style="min-height:242px;">
    ${resize((width,height)=> return_img(img_src_2020,Math.min(width,height),"./onemit2020"))}
  </div>
  <div class="img-container" style="min-height:242px;">
    ${resize((width,height)=> return_img(img_src_2024,Math.min(width,height),"./onemit2024"))}
  </div>
</div>


