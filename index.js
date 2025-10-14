(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n=[{name:"АСТРАХАНЦЕВ ОЛЕКСАНДР",img:"./pages/astrakhantsev-oleksandr/IMG_9682.webp",link:"./pages/astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
      МАЙСТЕР КІОКУШИНКАЙ КАРАТЕ <br>
      НАРОДИВСЯ 1969 РОКУ В М. БЕРДИЧІВ
    `},{name:"КУЛЬКОВ СЕРГІЙ",img:"./pages/kulkov-sergiy/kulkov-sergiy.webp",link:"./pages/kulkov-sergiy/kulkov-sergiy.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`},{name:"КУЛЬКОВ СЕРГІЙ",img:"./pages/kulkov-sergiy/kulkov-sergiy.webp",link:"./pages/kulkov-sergiy/kulkov-sergiy.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`}],a=document.querySelector(".gallery-ul");n.forEach(s=>{const t=document.createElement("li");t.classList.add("gallery-list"),t.innerHTML=`
    <a class="gallery-list-url" href="${s.link}">
      <img src="${s.img}" alt="${s.name}">
      <h2 class="gallery-title-img">${s.name}</h2>
      <p>${s.desc}</p>
    </a>
  `,a.appendChild(t)});
//# sourceMappingURL=index.js.map
