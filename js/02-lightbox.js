import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
let htmlGallery = "";

galleryItems.forEach((el) => {
  htmlGallery += `<li><a class="gallery__item" href=${el.original}><img class="gallery__image" src=${el.preview} alt="${el.description}"/></a></li>`;
});

gallery.innerHTML = htmlGallery;

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
