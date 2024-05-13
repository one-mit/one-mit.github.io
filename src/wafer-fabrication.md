---
title: Fabricating the Wafer
toc: false
theme: [air,alt,wide]
---

```js
// YOUTUBE VIDEO RESIZE

const youtube_src = "https://www.youtube.com/embed/qCX2iEi5X1o?start=2870&end=3012";
function return_resized_iframe(width,height) {
  return html`<iframe width="${width}" height="${height}" src="${youtube_src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}
```


<div class= "grid grid-cols-2">
  <div class="card">
    <h1> Fabricating the Wafer </h1>
    
The very first wafer was fabricated in 2018 by Dennis Ward and Kris Payer in the now-closed Microsystems Technology Laboratory cleanrooms in Building 39, before the newly-built MIT.nano shared central facility was completed and opened to users. Since then, every wafer that you can see displayed on the walls has been fabricated in the cleanrooms of MIT.nano by teams that include MIT undergraduates, graduate students, staff, faculty, and alumni!  

(photo of people in cleanroom bunny suits)

Despite the complexity of computationally generating the image and layout files, patterning the tiny text on a silicon wafer is easy - for someone familiar with the fabrication processes used every day for micro- and nano- technology. First, the specially cleaned wafer is loaded into deposition chambers to grow a thin silicon nitride layer followed by an aluminum layer. The two layers combined measure approximately 100nm in thickness, or 500-1000 times thinner than a single human hair. The wafer is then coated with photoresist and exposed in a direct-write photolithography tool to make an etch mask. Finally, the aluminum is selectively etched and the photoresist removed to create the image on the wafer.  

(photo from Apr 2022)
The MIT Seal design wafer (One.MIT 2020) was fabricated in April 2022 inside MIT.nano by undergraduate students Eryn Cornelius ’23, Syd Robinson ’25, James Greer ’22, and Aashini Shah ’22 led by Jorg Scholvin of MIT.nano.



  </div>

  <div class="card">
    ${resize((width,height)=> return_resized_iframe(width,height))}
  </div>
</div>
