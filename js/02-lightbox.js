import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(`.gallery`);
let htmlString = ``;
galleryItems.forEach(element => {
  htmlString += `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`;
});
gallery.insertAdjacentHTML(`beforeend`, htmlString);
const galleryBox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: `alt`,
  captionDelay: 250,
});
