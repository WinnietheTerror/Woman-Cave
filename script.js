console.log("JS LOADED");

const gallery = document.querySelector('.image-gallery');
const leftBtn = document.querySelector('.gallery-btn.left');
const rightBtn = document.querySelector('.gallery-btn.right');

const scrollAmount = 240;

leftBtn.addEventListener('click', () => {
  gallery.scrollLeft -= scrollAmount;
});

rightBtn.addEventListener('click', () => {
  gallery.scrollLeft += scrollAmount;
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const images = document.querySelectorAll('.image-gallery img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add ('show');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove ('show');
});


