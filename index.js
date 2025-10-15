(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n="/spirit-of-heroes/astrakhantsev-oleksandr/IMG_9682.webp",a="/spirit-of-heroes/bakhtinov-cavelii/IMG_2988.webp",c="/spirit-of-heroes/kulkov-sergiy/kulkov-sergiy.webp",u=[{name:"АСТРАХАНЦЕВ ОЛЕКСАНДР",img:n,link:"./astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
      МАЙСТЕР КІОКУШИНКАЙ КАРАТЕ <br>
      НАРОДИВСЯ 1969 РОКУ В М. БЕРДИЧІВ
    `},{name:"Бахтiнoв Cавелій",img:a,link:"/bakhtinov-cavelii/bakhtinov-cavelii.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`},{name:"КУЛЬКОВ СЕРГІЙ",img:c,link:"/kulkov-sergiy/kulkov-sergiy.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`}],d=document.querySelector(".gallery-ul");u.forEach(i=>{const r=document.createElement("li");r.classList.add("gallery-list"),r.innerHTML=`
    <a class="gallery-list-url" href="${i.link}">
      <img src="${i.img}" alt="${i.name}">
      <h2 class="gallery-title-img">${i.name}</h2>
      <p>${i.desc}</p>
    </a>
  `,d.appendChild(r)});
//# sourceMappingURL=index.js.map
