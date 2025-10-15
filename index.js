(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n="/spirit-of-heroes/assets/IMG_9682-CBkhicbj.webp",c="/spirit-of-heroes/assets/kulkov-sergiy-CcMWNsZ5.webp",a=[{name:"АСТРАХАНЦЕВ ОЛЕКСАНДР",img:n,link:"/pages/astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
      МАЙСТЕР КІОКУШИНКАЙ КАРАТЕ <br>
      НАРОДИВСЯ 1969 РОКУ В М. БЕРДИЧІВ
    `},{name:"КУЛЬКОВ СЕРГІЙ",img:c,link:"/pages/kulkov-sergiy/kulkov-sergiy.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`},{name:"КУЛЬКОВ СЕРГІЙ",img:"/pages/kulkov-sergiy/kulkov-sergiy.webp",link:"/pages/kulkov-sergiy/kulkov-sergiy.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`}],u=document.querySelector(".gallery-ul");a.forEach(t=>{const s=document.createElement("li");s.classList.add("gallery-list"),s.innerHTML=`
    <a class="gallery-list-url" href="${t.link}">
      <img src="${t.img}" alt="${t.name}">
      <h2 class="gallery-title-img">${t.name}</h2>
      <p>${t.desc}</p>
    </a>
  `,u.appendChild(s)});
//# sourceMappingURL=index.js.map
