(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}})();const m="/astrakhantsev-oleksandr/IMG_9682.webp",u="/bakhtinov-cavelii/IMG_2988.webp",y="/kulkov-sergiy/kulkov-sergiy.webp",g="/bozhko-serhii/IMG_3011.webp",v="/vasin-valerii/IMG_9629.webp",k="/assets/IMG_9701-Dum3jM24.webp",h=[{name:"Астраханцев Олександр",img:m,link:"./astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
      Майстер кіокушинкай карате<br>
      Народився 1969 року в м. Бердичів 
    `},{name:"Бахтiнoв Cавелій",img:u,link:"./bakhtinov-cavelii/bakhtinov-cavelii.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 1999 року у м. Буськ`},{name:"Божко Сергій",img:g,link:"./bozhko-serhii/bozhko-serhii.html",desc:`
      Молодший сержант <br>
      Народився 19 жовтня 1976 року`},{name:"Васін Валерій",img:v,link:"/vasin-valerii/vasin-valerii.html",desc:`
      Тренер з кіокушинкай карате<br>
      Народився 1975 року, м. Херсон`},{name:"Думанський Павло",img:k,link:"/dumanskyi-pavlo/dumanskyi-pavlo.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 2003 року у Львові`},{name:"Кульков Cергій",img:y,link:"./kulkov-sergiy/kulkov-sergiy.html",desc:`
      Спортсмен кіокушинкай карате та Спецпризначинець<br>
      Народився 1979 року`}],p=document.querySelector(".gallery-ul");h.forEach(e=>{const n=document.createElement("li");n.classList.add("gallery-list"),n.innerHTML=`
    <a class="gallery-list-url" href="${e.link}">
      <img src="${e.img}" alt="${e.name}">
      <h2 class="gallery-title-img">${e.name}</h2>
      <p>${e.desc}</p>
    </a>
  `,p.appendChild(n)});document.querySelectorAll(".gallery-item img").forEach(e=>{e.addEventListener("click",()=>{const n=document.getElementById("modal"),s=document.getElementById("modal-img");n.style.display="block",s.src=e.src})});document.querySelector(".close").addEventListener("click",()=>{document.getElementById("modal").style.display="none"});const o=document.getElementById("modal"),a=document.getElementById("modal-img"),f=document.querySelector(".close"),b=document.querySelector(".prev"),I=document.querySelector(".next"),i=Array.from(document.querySelectorAll(".gallery-item img"));let r=0;function E(e){r=e,o.style.display="block",a.src=i[r].src}function L(){r=(r+1)%i.length,a.src=i[r].src}function M(){r=(r-1+i.length)%i.length,a.src=i[r].src}i.forEach((e,n)=>{e.addEventListener("click",()=>E(n))});f.addEventListener("click",()=>{o.style.display="none"});I.addEventListener("click",L);b.addEventListener("click",M);o.addEventListener("click",e=>{e.target===o&&(o.style.display="none")});
//# sourceMappingURL=index.js.map
