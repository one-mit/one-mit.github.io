import { html } from "npm:htl";

export function return_resized_img(src, width, height = width) {
  return html` <img src="${src}" width="${width}px" height="${height}px" />`;
}

export function return_resized_img_link(src, url, width, height = width) {
  return html` <a href="${url}">
    <img src="${src}" width="${width}px" height="${height}px" />
  </a>`;
}
