import { galleryItems } from './gallery-items.js';
// Change code below this line

let activeImageSrc = null;
let instance = null;
const galleryRef = document.querySelector('.gallery');
const markupGallery = createGalleryMarkUp(galleryItems);

function createGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item "><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
    )
    .join('');
}

galleryRef.insertAdjacentHTML('beforeend', markupGallery);
galleryRef.addEventListener('click', onClickImageGallery);

function onClickImageGallery(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  activeImageSrc = getImageSrc(event);
  openModal(activeImageSrc);
}
function getImageSrc(event) {
  return event.target.dataset.source;
}

function openModal() {
  instance = basicLightbox.create(
    `
		<img width="1280" height="852" src="${activeImageSrc}">`
  );
  instance.show(() => {
    window.addEventListener('keydown', closeModalbyEscape);
  });
}
function closeModal() {
  instance.close(() => {
    window.removeEventListener('keydown', closeModalbyEscape);
  });
}

function closeModalbyEscape(event) {
  const isEscape = event.code === 'Escape';
  if (isEscape) {
    closeModal();
  }
}
console.log(galleryRef);
