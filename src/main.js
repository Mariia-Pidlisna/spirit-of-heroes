
import IMG_9682 from '/astrakhantsev-oleksandr/IMG_9682.webp';
import bakhtinovCaveliiImg from '/bakhtinov-cavelii/IMG_2988.webp';
import kulkovSergiyImg from '/kulkov-sergiy/IMG_9719.webp';
import IMG_3011 from '/bozhko-serhii/IMG_3011.webp';
import vasinValerii from '/vasin-valerii/IMG_9629.webp';
import dumanskyiPavlo from '/dumanskyi-pavlo/IMG_9701.webp';
import zhydkovMykola from '/zhydkov-mykola/IMG_9666.webp';
import zvonykDan from '/zvonyk-dan/IMG_9852.webp';
import kostakovSerhii from '/kostakov-serhii/IMG_2935.webp';
import malofieievOleksandr from '/malofieiev-oleksandr/IMG_9698.webp';
import medynskyiOleh from '/medynskyi-oleh/medynskyi-oleh-kostiantynovych.webp';
import piskovyiRuslan from './public/piskovyi-ruslan/IMG_3012.webp';

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
    link: './vasin-valerii/vasin-valerii.html',
    desc: `
      Тренер з кіокушинкай карате<br>
      Народився 1975 року, м. Херсон`,
  },
   {
    name: "Думанський Павло",
    img: dumanskyiPavlo,
    link: './dumanskyi-pavlo/dumanskyi-pavlo.html',
    desc: `
      Спортсмен кіокушинкай карате<br>
      Народився 2003 року у Львові`,
  },
    {
    name: "Жидков Микола",
    img: zhydkovMykola,
    link: './zhydkov-mykola/zhydkov-mykola.html',
    desc: `
      Людина, яка любила футбол та карате<br>
      Народився 2001 року м. Кропивницький`,
  },
    {
    name: "Звоник Дан",
    img: zvonykDan,
    link: './zvonyk-dan/zvonyk-dan.html',
    desc: `
      Спортсмен кіокушинкай карате<br>
      Народився 1996 року м. Донецьк`,
  },
     {
    name: "Костаков Сергій",
    img: kostakovSerhii,
    link: './kostakov-serhii/kostakov-serhii.html',
    desc: `
      Старший солдат, Снайпер<br>
      Народився 12 травня 1972 року в м. Київ`,
  },
  {
    name: "Кульков Cергій",
    img: kulkovSergiyImg,
    link: './kulkov-sergiy/kulkov-sergiy.html',
    desc: `
      Спортсмен кіокушинкай карате та Спецпризначинець<br>
      Народився 1979 року`,
  },
   {
    name: "Малофєєв Олександр",
    img: malofieievOleksandr,
    link: './malofieiev-oleksandr/malofieiev-oleksandr.html',
    desc: `
      Майстер кіокушинкай карате, 1 дан<br>
      Народився 1975 року`,
  },
      {
    name: "Мединський Олег",
    img: medynskyiOleh,
    link: './medynskyi-oleh/medynskyi-oleh.html',
    desc: `
      Майстер кіокушинкай карате, 2 дан<br>
      Народився 1968 року в с. Іллінка`,
  },
       {
    name: "Пісковий Руслан",
    img: piskovyiRuslan,
    link: './piskovyi-ruslan/piskovyi-ruslan.html',
    desc: `
      Професійно займався кікбоксингом<br>
      Народився 23 листопада 2001 року в м. Київ`,
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



