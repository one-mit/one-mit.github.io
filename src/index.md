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

Generation after generation, the people of MIT have worked together to build a better world. Each era faced challenges particular to its own time and place. But if you could travel through time to visit the Institute in any year of our history, you would find a place that feels remarkably familiar: curious, rigorous, and relentlessly focused on advancing knowledge and working wisely, creatively, and effectively for the betterment of humankind.

One.MIT is a tribute to this special community. We have gathered, to the best of our ability, the names of those who have passed through the Institute on their way to building a better world or who arrived here and found the place where they would conduct their life’s work.

We have shaped the names of these individuals into three mosaics: MIT’s Great Dome (2018), the MIT Seal (2020), and an homage to the founding of the Cambridge campus a century ago (2024). These images—etched on a silicon wafer using the tools of MIT.nano—symbolize the collective sense of purpose that drives MIT to confront the questions of today and to solve the problem of tomorrow. 

Whether you were part of MIT in 1870 or 1970, 1920 or 2020, you are part of a family whose reach spans the globe and whose impact defies measurement. Many generations, one community, One.MIT.

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


