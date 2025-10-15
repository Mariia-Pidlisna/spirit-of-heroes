(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}})();const n="/spirit-of-heroes/astrakhantsev-oleksandr/IMG_9682.webp",a="/spirit-of-heroes/bakhtinov-cavelii/IMG_2988.webp",c="/spirit-of-heroes/kulkov-sergiy/kulkov-sergiy.webp",d="/spirit-of-heroes/bozhko-serhii/IMG_3011.webp",m="/spirit-of-heroes/vasin-valerii/IMG_9629.webp",u=[{name:"АСТРАХАНЦЕВ ОЛЕКСАНДР",img:n,link:"ю/astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
      МАЙСТЕР КІОКУШИНКАЙ КАРАТЕ <br>
      НАРОДИВСЯ 1969 РОКУ В М. БЕРДИЧІВ
    `},{name:"Бахтiнoв Cавелій",img:a,link:"ю/bakhtinov-cavelii/bakhtinov-cavelii.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`},{name:"Божко Сергій Миколайович",img:d,link:"ю/bozhko-serhii/bozhko-serhii.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`},{name:"Васін Валерій",img:m,link:"ю/vasin-valerii/vasin-valerii.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`},{name:"КУЛЬКОВ СЕРГІЙ",img:c,link:"ю/kulkov-sergiy/kulkov-sergiy.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`}],f=document.querySelector(".gallery-ul");u.forEach(t=>{const r=document.createElement("li");r.classList.add("gallery-list"),r.innerHTML=`
    <a class="gallery-list-url" href="${t.link}">
      <img src="${t.img}" alt="${t.name}">
      <h2 class="gallery-title-img">${t.name}</h2>
      <p>${t.desc}</p>
    </a>
  `,f.appendChild(r)});
//# sourceMappingURL=index.js.map
