import IMG_9682 from '/pages/astrakhantsev-oleksandr/IMG_9682.webp';
import astrakhantsevOleksandr from '/pages/astrakhantsev-oleksandr/astrakhantsev-oleksandr.html';
import kulkovSergiyImg from '/pages/kulkov-sergiy/kulkov-sergiy.webp';
import kulkovSergiy from '/pages/kulkov-sergiy/kulkov-sergiy.html';

const heroes = [
  {
    name: "АСТРАХАНЦЕВ ОЛЕКСАНДР",
    img: IMG_9682,
    link: astrakhantsevOleksandr,
    desc: `
      МАЙСТЕР КІОКУШИНКАЙ КАРАТЕ <br>
      НАРОДИВСЯ 1969 РОКУ В М. БЕРДИЧІВ
    `,
  },
  {
    name: "КУЛЬКОВ СЕРГІЙ",
    img: kulkovSergiyImg,
    link: kulkovSergiy,
    desc: `
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`,
  },
   {
    name: "КУЛЬКОВ СЕРГІЙ",
    img: "/pages/kulkov-sergiy/kulkov-sergiy.webp",
    link: "/pages/kulkov-sergiy/kulkov-sergiy.html",
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
