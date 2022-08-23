import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
let lightboxInstance;

const htmlGallery = galleryItems.map(
  (el) =>
    `<div class="gallery__item"><a class="gallery__link" href=${el.original}><img class="gallery__image" src=${el.preview} data-source=${el.original} alt=${el.description}/></a></div>`
);

gallery.innerHTML = htmlGallery.join("");

const closeModal = function (e) {
  if (e.key === "Escape") {
    lightboxInstance.close();
  }
};

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  lightboxInstance = basicLightbox.create(
    `<img src=${e.target.getAttribute("data-source")}>`,
    {
      /*
       * Prevents the lightbox from closing when clicking its background.
       */
      closable: true,
      /*
       * One or more space separated classes to be added to the basicLightbox element.
       */
      className: "",
      /*
       * Function that gets executed before the lightbox will be shown.
       * Returning false will prevent the lightbox from showing.
       */
      onShow: (instance) => {
        document.addEventListener("keydown", closeModal);
      },
      /*
       * Function that gets executed before the lightbox closes.
       * Returning false will prevent the lightbox from closing.
       */
      onClose: (instance) => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  lightboxInstance.show();
});
