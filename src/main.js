
import IMG_9682 from '/astrakhantsev-oleksandr/IMG_9682.webp';
import bakhtinovCaveliiImg from '/bakhtinov-cavelii/IMG_2988.webp';
import kulkovSergiyImg from '/kulkov-sergiy/kulkov-sergiy.webp';
import IMG_3011 from '/bozhko-serhii/IMG_3011.webp';
import vasinValerii from '/vasin-valerii/IMG_9629.webp';
import dumanskyiPavlo from './public/dumanskyi-pavlo/IMG_9701.webp'


const heroes = [
  {
    name: "Астраханцев Олександр",
    img: IMG_9682,
    link: './astrakhantsev-oleksandr/astrakhantsev-oleksandr.html',
    desc: `
      Майстер кіокушинкай карате<br>
      Народився 1969 року в м. Бердичів 
    `,
  },
     {
    name: "Бахтiнoв Cавелій",
    img: bakhtinovCaveliiImg,
    link: './bakhtinov-cavelii/bakhtinov-cavelii.html',
    desc: `
      Спортсмен кіокушинкай карате<br>
      Народився 1999 року у м. Буськ`,
  },
   {
    name: "Божко Сергій",
    img: IMG_3011,
    link: './bozhko-serhii/bozhko-serhii.html',
    desc: `
      Молодший сержант <br>
      Народився 19 жовтня 1976 року`,
  },
  {
    name: "Васін Валерій",
    img: vasinValerii,
    link: '/vasin-valerii/vasin-valerii.html',
    desc: `
      Тренер з кіокушинкай карате<br>
      Народився 1975 року, м. Херсон`,
  },
   {
    name: "Думанський Павло",
    img: dumanskyiPavlo ,
    link: '/dumanskyi-pavlo/dumanskyi-pavlo.html',
    desc: `
      Спортсмен кіокушинкай карате<br>
      Народився 2003 року у Львові`,
  },
  {
    name: "Кульков Cергій",
    img: kulkovSergiyImg,
    link: './kulkov-sergiy/kulkov-sergiy.html',
    desc: `
      Спортсмен кіокушинкай карате та Спецпризначинець<br>
      Народився 1979 року`,
  },
 
];


const gallery = document.querySelector(".gallery-ul");

heroes.forEach((hero) => {
  const li = document.createElement("li");
  li.classList.add("gallery-list");

  li.innerHTML = `
    <a class="gallery-list-url" href="${hero.link}">
      <img src="${hero.img}" alt="${hero.name}">
      <h2 class="gallery-title-img">${hero.name}</h2>
      <p>${hero.desc}</p>
    </a>
  `;

  gallery.appendChild(li);
});




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