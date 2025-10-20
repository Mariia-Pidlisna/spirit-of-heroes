(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const l="/astrakhantsev-oleksandr/IMG_9682.webp",a="/bakhtinov-cavelii/IMG_2988.webp",c="/kulkov-sergiy/kulkov-sergiy.webp",m="/bozhko-serhii/IMG_3011.webp",d="/vasin-valerii/IMG_9629.webp",k="/dumanskyi-pavlo/IMG_9701.webp",u="/zhydkov-mykola/IMG_9666.webp",v="/zvonyk-dan/IMG_9852.webp",h=[{name:"Астраханцев Олександр",img:l,link:"./astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
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
      Спортсмен кіокушинкай карате<br>
      Народився 1996 року м. Донецьк`},{name:"Костаков Сергій",img:kostakovSerhii,link:"./kostakov-serhii/kostakov-serhii.html",desc:`
      Старший солдат, Снайпер<br>
      Народився 12 травня 1972 року в м. Київ`},{name:"Кульков Cергій",img:c,link:"./kulkov-sergiy/kulkov-sergiy.html",desc:`
      Спортсмен кіокушинкай карате та Спецпризначинець<br>
      Народився 1979 року`}],y=document.querySelector(".gallery-ul");h.forEach(o=>{const t=document.createElement("li");t.classList.add("gallery-list"),t.innerHTML=`
    <a class="gallery-list-url" href="${o.link}">
      <img src="${o.img}" alt="${o.name}">
      <h2 class="gallery-title-img">${o.name}</h2>
      <p>${o.desc}</p>
    </a>
  `,y.appendChild(t)});
//# sourceMappingURL=index.js.map
