import IMG_9682 from '/pages/astrakhantsev-oleksandr/IMG_9682.webp';
import kulkovSergiyImg from './pages/kulkov-sergiy/kulkov-sergiy.webp';
import bakhtinovCaveliiImg from '/pages/bakhtinov-cavelii/IMG_2988.webp';

const heroes = [
  {
    name: "АСТРАХАНЦЕВ ОЛЕКСАНДР",
    img: IMG_9682,
    link: '/pages/astrakhantsev-oleksandr/astrakhantsev-oleksandr.html',
    desc: `
      МАЙСТЕР КІОКУШИНКАЙ КАРАТЕ <br>
      НАРОДИВСЯ 1969 РОКУ В М. БЕРДИЧІВ
    `,
  },
     {
    name: "Бахтiнoв Cавелій",
    img: bakhtinovCaveliiImg,
    link: '/pages/bakhtinov-cavelii/bakhtinov-cavelii.html',
    desc: `
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`,
  },
  {
    name: "КУЛЬКОВ СЕРГІЙ",
    img: kulkovSergiyImg,
    link: '/pages/kulkov-sergiy/kulkov-sergiy.html',
    desc: `
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`,
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
