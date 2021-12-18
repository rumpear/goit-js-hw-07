import { galleryItems } from "./gallery-items.js";

const markup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
  <a class="gallery__link" href=${item.original} onclick='event.preventDefault()'>
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
galleryRef.addEventListener("click", onOpenModal);

let imgPicker = "";

function onOpenModal(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  imgPicker = basicLightbox.create(`<img src=${e.target.dataset.source}>`);
  imgPicker.show();

  window.addEventListener("keydown", onCloseModal);
}

function onCloseModal(e) {
  if (e.code === "Escape") {
    imgPicker.close();
  }

  window.removeEventListener("keydown", onCloseModal);
}
