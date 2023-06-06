const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active", "previous");
  });

  slides[index].classList.add("active");

  if (index === 0) {
    slides[slides.length - 1].classList.add("previous");
  } else {
    slides[index - 1].classList.add("previous");
  }
}

function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 2000);
