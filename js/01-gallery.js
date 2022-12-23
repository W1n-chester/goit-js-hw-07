import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(`.gallery`);
let htmlString = ``;
galleryItems.forEach(element => {
  htmlString += `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
});
gallery.insertAdjacentHTML(`beforeend`, htmlString);
gallery.addEventListener(`click`, imgClick);
function imgClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains(`gallery__image`)) {
    return;
  }
  const urlOriginal = evt.target.dataset.source;
  const options = {
    onShow: () => {
      window.addEventListener('keydown', onEscape);
    },
    onClose: () => {
      window.removeEventListener('keydown', onEscape);
    },
  };
  const instance = basicLightbox.create(
    `<img src="${urlOriginal}" width="800" height="600">`,
    options
  );

  instance.show();

  function onEscape(evt) {
    console.log(evt);
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
