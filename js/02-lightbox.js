import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const markupGallery = createMarkupGallery(galleryItems);

function createMarkupGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`
    )
    .join('');
}

galleryRef.insertAdjacentHTML('beforeend', markupGallery);

let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionData: 'alt',
});
console.log(gallery);
