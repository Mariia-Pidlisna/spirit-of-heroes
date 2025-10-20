
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const images = Array.from(document.querySelectorAll('.gallery-item img'));
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.style.display = 'block';
  modalImg.src = images[currentIndex].src;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Закриття по кліку поза зображенням
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});