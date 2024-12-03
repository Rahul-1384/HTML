let currentIndex = 0;

function scrollCarousel(direction) {
  const carousel = document.querySelector(".carousel-items");
  const itemWidth = document.querySelector(".carousel-item").offsetWidth + 15;
  const maxScroll = carousel.scrollWidth - carousel.offsetWidth;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex * itemWidth > maxScroll) {
    currentIndex = Math.floor(maxScroll / itemWidth);
  }
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
