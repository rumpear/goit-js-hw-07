import { galleryItems } from "./gallery-items.js";

const markup = galleryItems
  .map(
    (item) => `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`
  )
  .join("");

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", markup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
