const carouselContent = document.querySelector('.carousel-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel-content img');

let counter = 1;
const imageWidth = images[0].clientWidth;

carouselContent.style.transform = `translateX(${-imageWidth * counter}px)`;

nextBtn.addEventListener('click', () => {
  if (counter >= images.length - 1) return;
  carouselContent.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselContent.style.transform = `translateX(${-imageWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselContent.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselContent.style.transform = `translateX(${-imageWidth * counter}px)`;
});

carouselContent.addEventListener('transitionend', () => {
  if (images[counter].id === 'last-clone') {
    carouselContent.style.transition = 'none';
    counter = images.length - 2;
    carouselContent.style.transform = `translateX(${-imageWidth * counter}px)`;
  }

  if (images[counter].id === 'first-clone') {
    carouselContent.style.transition = 'none';
    counter = images.length - counter;
    carouselContent.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
});
