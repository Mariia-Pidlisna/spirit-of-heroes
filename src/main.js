import '/pages/astrakhantsev-oleksandr/IMG_9682.webp';
import './pages/astrakhantsev-oleksandr/astrakhantsev-oleksandr.html';

const heroes = [
  {
    name: "АСТРАХАНЦЕВ ОЛЕКСАНДР",
    img: "/pages/astrakhantsev-oleksandr/IMG_9682.webp",
    link: "/pages/astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",
    desc: `
      МАЙСТЕР КІОКУШИНКАЙ КАРАТЕ <br>
      НАРОДИВСЯ 1969 РОКУ В М. БЕРДИЧІВ
    `,
  },
  {
    name: "КУЛЬКОВ СЕРГІЙ",
    img: "/pages/kulkov-sergiy/kulkov-sergiy.webp",
    link: "/pages/kulkov-sergiy/kulkov-sergiy.html",
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
