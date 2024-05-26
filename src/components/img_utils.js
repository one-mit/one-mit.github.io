import { html } from "npm:htl";

export function return_resized_img(src, width, height = width, style = "") {
  return html` <img
    src="${src}"
    width="${width}px"
    height="${height}px"
    style="${style}"
  />`;
}

export function return_resized_img_link(
  src,
  url,
  width,
  height = width,
  style = "",
) {
  return html` <a href="${url}">
    <img
      src="${src}"
      width="${width}px"
      height="${height}px"
      style="${style}"
    />
  </a>`;
}
