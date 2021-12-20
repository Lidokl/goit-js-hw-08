// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const  gallery = document.querySelector('.gallery');




// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи./
const listNew = galleryItems.map(({ original, preview, description }) => 
     `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
         <img
             class="gallery__image"
             src="${preview}"
             alt="${description}"
         />
     </a>
 </div>`)
.join("");

gallery.insertAdjacentHTML("beforeend", listNew);
console.log(gallery);
// 2.Реализация делегирования на div.gallery и получение url большого изображения.


// function onClick(evt) {
//     evt.preventDefault();
    
//     if(evt.target.nodeName !== 'IMG'){
//         return;
//     }
//     openModalWindow(evt.target.dataset.source);
// }

// gallery.addEventListener('click', onClick);

// 3.
const lightboxOptions = {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  };
  
  const lightboxGallery = new SimpleLightbox(".gallery a", lightboxOptions);
// 4
// function openModalWindow(pic) {
//   instance = onCreateModal(pic);
//   instance.show();
//   document.addEventListener("keyup", pressEscapeInModal);
// }


//   function pressEscapeInModal(evt) {
//     if (evt.code !== "Escape") {
//       return;
//     }
//     instance.close();
//     document.removeEventListener("keyup", pressEscapeInModal);
//   }
