(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n="/spirit-of-heroes/assets/IMG_9682-CBkhicbj.webp",a="/spirit-of-heroes/assets/kulkov-sergiy-CcMWNsZ5.webp",c="/spirit-of-heroes/assets/IMG_2988-ICBNS46e.webp",u=[{name:"АСТРАХАНЦЕВ ОЛЕКСАНДР",img:n,link:"/pages/astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
      МАЙСТЕР КІОКУШИНКАЙ КАРАТЕ <br>
      НАРОДИВСЯ 1969 РОКУ В М. БЕРДИЧІВ
    `},{name:"Бахтiнoв Cавелій",img:c,link:"/pages/bakhtinov-cavelii/bakhtinov-cavelii.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`},{name:"КУЛЬКОВ СЕРГІЙ",img:a,link:"/pages/kulkov-sergiy/kulkov-sergiy.html",desc:`
      СПОРТСМЕН КІОКУШИНКАЙ КАРАТЕ ТА СПЕЦПРИЗНАЧИНЕЦЬ <br>
      НАРОДИВСЯ 1979 РОКУ.`}],d=document.querySelector(".gallery-ul");u.forEach(r=>{const s=document.createElement("li");s.classList.add("gallery-list"),s.innerHTML=`
    <a class="gallery-list-url" href="${r.link}">
      <img src="${r.img}" alt="${r.name}">
      <h2 class="gallery-title-img">${r.name}</h2>
      <p>${r.desc}</p>
    </a>
  `,d.appendChild(s)});
//# sourceMappingURL=index.js.map
