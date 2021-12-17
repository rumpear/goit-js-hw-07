import { galleryItems } from "./gallery-items.js";

const markup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`
  )
  .join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", markup);

console.log(markup);
console.log(galleryRef);
console.log(galleryItems);
