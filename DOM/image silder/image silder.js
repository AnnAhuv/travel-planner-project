// Select all <img> elements within the "slider" div
const slides = document.querySelectorAll('#slider img');

// Initialize currentIndex to keep track of the currently displayed image
let currentIndex = 0;

// Function to move between slides
function moveSlide(direction) {
  // Remove the "active" class from the currently displayed image
  slides[currentIndex].classList.remove('active');

  // Adjust the currentIndex
  currentIndex += direction;

  // Handle boundary conditions
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= slides.length) {
    currentIndex = slides.length - 1;
  }

  // Add the "active" class to the new current image
  slides[currentIndex].classList.add('active');
}
