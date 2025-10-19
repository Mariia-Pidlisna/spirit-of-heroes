(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const l="/astrakhantsev-oleksandr/IMG_9682.webp",a="/bakhtinov-cavelii/IMG_2988.webp",c="/kulkov-sergiy/kulkov-sergiy.webp",m="/bozhko-serhii/IMG_3011.webp",d="/vasin-valerii/IMG_9629.webp",k="/dumanskyi-pavlo/IMG_9701.webp",u="/zhydkov-mykola/IMG_9666.webp",v="/zvonyk-dan/IMG_9852.webp",y=[{name:"Астраханцев Олександр",img:l,link:"./astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
      Майстер кіокушинкай карате<br>
      Народився 1969 року в м. Бердичів 
    `},{name:"Бахтiнoв Cавелій",img:a,link:"./bakhtinov-cavelii/bakhtinov-cavelii.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 1999 року у м. Буськ`},{name:"Божко Сергій",img:m,link:"./bozhko-serhii/bozhko-serhii.html",desc:`
      Молодший сержант <br>
      Народився 19 жовтня 1976 року`},{name:"Васін Валерій",img:d,link:"./vasin-valerii/vasin-valerii.html",desc:`
      Тренер з кіокушинкай карате<br>
      Народився 1975 року, м. Херсон`},{name:"Думанський Павло",img:k,link:"./dumanskyi-pavlo/dumanskyi-pavlo.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 2003 року у Львові`},{name:"Жидков Микола",img:u,link:"./zhydkov-mykola/zhydkov-mykola.html",desc:`
      Людина, яка любила футбол та карате<br>
      Народився 2001 року м. Кропивницький`},{name:"Звоник Дан",img:v,link:"./zvonyk-dan/zvonyk-dan.html",desc:`
      Людина, яка любила футбол та карате<br>
      Народився 2001 року м. Кропивницький`},{name:"Кульков Cергій",img:c,link:"./kulkov-sergiy/kulkov-sergiy.html",desc:`
      Спортсмен кіокушинкай карате та Спецпризначинець<br>
      Народився 1979 року`}],h=document.querySelector(".gallery-ul");y.forEach(t=>{const n=document.createElement("li");n.classList.add("gallery-list"),n.innerHTML=`
    <a class="gallery-list-url" href="${t.link}">
      <img src="${t.img}" alt="${t.name}">
      <h2 class="gallery-title-img">${t.name}</h2>
      <p>${t.desc}</p>
    </a>
  `,h.appendChild(n)});
//# sourceMappingURL=index.js.map
