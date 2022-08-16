import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
let htmlGallery = "";
let lightboxInstance;

galleryItems.forEach((el) => {
  htmlGallery += `<div class="gallery__item"><a class="gallery__link" href=${el.original}><img class="gallery__image" src=${el.preview} data-source=${el.original} alt=${el.description}/></a></div>`;
});

gallery.innerHTML = htmlGallery;

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  lightboxInstance = basicLightbox.create(
    `<img src=${e.target.getAttribute("data-source")}>`
  );
  lightboxInstance.show();
});

document.addEventListener("keydown", (e) => {
  if (!basicLightbox.visible()) {
    return;
  }

  if (e.key === "Escape") {
    lightboxInstance.close();
  }
});
