(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const n="/astrakhantsev-oleksandr/IMG_9682.webp",a="/bakhtinov-cavelii/IMG_2988.webp",c="/kulkov-sergiy/kulkov-sergiy.webp",m="/bozhko-serhii/IMG_3011.webp",d="/vasin-valerii/IMG_9629.webp",u="/assets/IMG_9701-Dum3jM24.webp",k="/assets/IMG_9666-BZ1cMUP7.webp",h=[{name:"Астраханцев Олександр",img:n,link:"./astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
      Майстер кіокушинкай карате<br>
      Народився 1969 року в м. Бердичів 
    `},{name:"Бахтiнoв Cавелій",img:a,link:"./bakhtinov-cavelii/bakhtinov-cavelii.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 1999 року у м. Буськ`},{name:"Божко Сергій",img:m,link:"./bozhko-serhii/bozhko-serhii.html",desc:`
      Молодший сержант <br>
      Народився 19 жовтня 1976 року`},{name:"Васін Валерій",img:d,link:"/vasin-valerii/vasin-valerii.html",desc:`
      Тренер з кіокушинкай карате<br>
      Народився 1975 року, м. Херсон`},{name:"Думанський Павло",img:u,link:"/dumanskyi-pavlo/dumanskyi-pavlo.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 2003 року у Львові`},{name:"Жидков Микола",img:k,link:"/public/zhydkov-mykola/zhydkov-mykola.html",desc:`
      Людина, яка любила футбол та карате<br>
      Народився 2001 року м. Кропивницький`},{name:"Кульков Cергій",img:c,link:"./kulkov-sergiy/kulkov-sergiy.html",desc:`
      Спортсмен кіокушинкай карате та Спецпризначинець<br>
      Народився 1979 року`}],v=document.querySelector(".gallery-ul");h.forEach(s=>{const t=document.createElement("li");t.classList.add("gallery-list"),t.innerHTML=`
    <a class="gallery-list-url" href="${s.link}">
      <img src="${s.img}" alt="${s.name}">
      <h2 class="gallery-title-img">${s.name}</h2>
      <p>${s.desc}</p>
    </a>
  `,v.appendChild(t)});
//# sourceMappingURL=index.js.map
