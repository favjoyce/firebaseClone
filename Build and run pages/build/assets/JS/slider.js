// function scrollSlider(direction) {
//   const slider = document.getElementById('cardSlider');
//   const card = slider.querySelector('.card');
//   const scrollAmount = card.offsetWidth + 40;

//   slider.scrollBy({
//     left: direction * scrollAmount,
//     behavior: 'smooth'
//   });
//



  // Paste the entire slider JavaScript here
 const cards = document.getElementById('cards');
const dots = document.querySelectorAll('.dot');
const totalCards = 3;
let currentIndex = 0;

const cardWidth = 320;  // width of each card, update if you change CSS

let currentTranslate = 0;
let prevTranslate = 0;

function updateCarousel() {
  const offset = currentIndex * cardWidth;
  cards.style.transition = 'transform 0.5s ease';
  cards.style.transform = `translateX(-${offset}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
  currentTranslate = -offset;
}

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.dataset.index);
    updateCarousel();
  });
});

// Drag to slide functionality
const carousel = document.getElementById('carousel');
let isDragging = false;
let startX = 0;

function getPositionX(event) {
  return event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
}

function animation() {
  cards.style.transform = `translateX(${currentTranslate}px)`;
  if (isDragging) requestAnimationFrame(animation);
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);
window.addEventListener('mouseup', dragEnd);
window.addEventListener('touchend', dragEnd);
window.addEventListener('touchcancel', dragEnd);
window.addEventListener('mousemove', dragMove);
window.addEventListener('touchmove', dragMove);

function dragStart(event) {
  isDragging = true;
  startX = getPositionX(event);
  prevTranslate = currentTranslate;
  cards.style.transition = 'none';
  carousel.style.cursor = 'grabbing';
  event.preventDefault();
}

function dragMove(event) {
  if (!isDragging) return;
  const currentPosition = getPositionX(event);
  const diff = currentPosition - startX;
  currentTranslate = prevTranslate + diff;
  requestAnimationFrame(animation);
}

function dragEnd() {
  if (!isDragging) return;
  isDragging = false;
  carousel.style.cursor = 'grab';
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < totalCards - 1) {
    currentIndex++;
  } else if (movedBy > 100 && currentIndex > 0) {
    currentIndex--;
  }
  updateCarousel();
}

// REMOVE the hover auto-slide feature:
// Just don't add event listeners for mouseenter/mouseleave anymore.

// Initialize slider position
updateCarousel();
