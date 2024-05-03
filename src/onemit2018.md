---
title: One.MIT 2018
toc: false
theme: [air,alt,wide]
sql:
  onemit2018: ./data/onemit2018.parquet
---

```js
// SEARCH BACKGROUND IMAGE

const background_img_src = FileAttachment("./imgs/onemit2018-search_background.jpg").href;
function return_resized_img(width,height) {
  return html`<img src="${background_img_src}" height="${height}px" width="${width}px" style="object-fit:cover; border-radius: 0.75rem;">`
}
```

```js
// TEXT BOX SEARCH

const text_input_mit_input = Inputs.text({
  placeholder: "William Barton Rogers",
  autocapitalize: false,
  autocomplete: false,
});
const text_input_mit = Generators.input(text_input_mit_input);
```

```js
// QUERY RESULTS

const name_mit_array = text_input_mit.toUpperCase().trim().split(" ");
const name_mit_glob = name_mit_array.reduce((acc,val) => acc + val + "*","*");
const name_mit_glob_reversed = name_mit_array.toReversed().reduce((acc,val) => acc + val + "*","*");

const text_selection_mit_input = Inputs.table(
  sql`SELECT * FROM "onemit2018" WHERE "name" GLOB ${name_mit_glob} OR "name" GLOB ${name_mit_glob_reversed} LIMIT 10`,
  {
    columns: ["name"],
    required: false,
    multiple: false,
    height: 240,
    layout: "auto",
  }
);
const text_selection_mit = Generators.input(text_selection_mit_input)
```

```js
// SVG PATHS

const server_prefix = "https://onemit.mit.edu/onemit-2018";
const svg_urls = [
  server_prefix + text_selection_mit.location.slice(0, -4) + "_1.svg",
  server_prefix + text_selection_mit.location.slice(0, -4) + "_2.svg",
  server_prefix + text_selection_mit.location.slice(0, -4) + "_3.svg"
];

// reset text box
text_input_mit_input.value = "";
text_input_mit_input.dispatchEvent(new Event("input", {bubbles: true}));
```

<style type="text/css">

  .svg-container img {
    position: absolute;
    left:50%;
    transform: translateX(-50%);
}

  .search-box-container {
   position: relative;
   height: 512px;
}
  
  .centered-text {
    position: absolute;
    left: 50%;
    top: 75%;
    transform: translate(-50%,-75%);
    height:240px;
}

  .search-heading {
    color:white;
    text-align:center;
}

  th {
    display: none;
}

  table {
    background-color: rgba(255,255,255,0.5);
}

  input {
    text-align:center;
}

</style>

<div class="grid grid-cols-3" style="grid-auto-rows: min-content;">
  <div class="grid-colspan-3 search-box-container">
    ${resize((width,height)=> return_resized_img(width,height))}
    <div class="centered-text">
      <div class="search-heading"> Start typing a name..</div>
      ${text_input_mit_input}
      ${text_input_mit.length > 0 ? text_selection_mit_input : ""}
    </div>
  </div>
  <div class="card svg-container" style="min-height: 264px;">
  ${resize((width,height)=>html`<img src="${svg_urls[0]}" height="${Math.min(width,height)}">`)}
  </div>
  <div class="card svg-container" style="min-height: 264px;">
  ${resize((width,height)=>html`<img src="${svg_urls[1]}" height="${Math.min(width,height)}">`)}
  </div>
  <div class="card svg-container" style="min-height: 264px;">
  ${resize((width,height)=>html`<img src="${svg_urls[2]}" height="${Math.min(width,height)}">`)}
  </div>
</div>
<div class="grid grid-cols-3" style="grid-auto-rows: auto; text-align:center;">
  <div class="grid-colspan-3"> ${html`<a target="_blank" href="${server_prefix + text_selection_mit.location}">Download PDF</a>`} </div>
</div>
 
