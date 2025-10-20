(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const a="/astrakhantsev-oleksandr/IMG_9682.webp",r="/bakhtinov-cavelii/IMG_2988.webp",m="/kulkov-sergiy/IMG_9719.webp",c="/bozhko-serhii/IMG_3011.webp",k="/vasin-valerii/IMG_9629.webp",d="/dumanskyi-pavlo/IMG_9701.webp",y="/zhydkov-mykola/IMG_9666.webp",h="/zvonyk-dan/IMG_9852.webp",v="/kostakov-serhii/IMG_2935.webp",u="/malofieiev-oleksandr/IMG_9698.webp",p="/medynskyi-oleh/medynskyi-oleh-kostiantynovych.webp",b="/assets/IMG_3012-CkbKWJlJ.webp",g=[{name:"Астраханцев Олександр",img:a,link:"./astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
      Майстер кіокушинкай карате<br>
      Народився 1969 року в м. Бердичів 
    `},{name:"Бахтiнoв Cавелій",img:r,link:"./bakhtinov-cavelii/bakhtinov-cavelii.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 1999 року у м. Буськ`},{name:"Божко Сергій",img:c,link:"./bozhko-serhii/bozhko-serhii.html",desc:`
      Молодший сержант <br>
      Народився 19 жовтня 1976 року`},{name:"Васін Валерій",img:k,link:"./vasin-valerii/vasin-valerii.html",desc:`
      Тренер з кіокушинкай карате<br>
      Народився 1975 року, м. Херсон`},{name:"Думанський Павло",img:d,link:"./dumanskyi-pavlo/dumanskyi-pavlo.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 2003 року у Львові`},{name:"Жидков Микола",img:y,link:"./zhydkov-mykola/zhydkov-mykola.html",desc:`
      Людина, яка любила футбол та карате<br>
      Народився 2001 року м. Кропивницький`},{name:"Звоник Дан",img:h,link:"./zvonyk-dan/zvonyk-dan.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 1996 року м. Донецьк`},{name:"Костаков Сергій",img:v,link:"./kostakov-serhii/kostakov-serhii.html",desc:`
      Старший солдат, Снайпер<br>
      Народився 12 травня 1972 року в м. Київ`},{name:"Кульков Cергій",img:m,link:"./kulkov-sergiy/kulkov-sergiy.html",desc:`
      Спортсмен кіокушинкай карате та Спецпризначинець<br>
      Народився 1979 року`},{name:"Малофєєв Олександр",img:u,link:"./malofieiev-oleksandr/malofieiev-oleksandr.html",desc:`
      Майстер кіокушинкай карате, 1 дан<br>
      Народився 1975 року`},{name:"Мединський Олег",img:p,link:"./medynskyi-oleh/medynskyi-oleh.html",desc:`
      Майстер кіокушинкай карате, 2 дан<br>
      Народився 1968 року в с. Іллінка`},{name:"Пісковий Руслан",img:b,link:"./piskovyi-ruslan/piskovyi-ruslan.html",desc:`
      Професійно займався кікбоксингом<br>
      Народився 23 листопада 2001 року в м. Київ`}],f=document.querySelector(".gallery-ul");g.forEach(n=>{const s=document.createElement("li");s.classList.add("gallery-list"),s.innerHTML=`
    <a class="gallery-list-url" href="${n.link}">
      <img src="${n.img}" alt="${n.name}">
      <h2 class="gallery-title-img">${n.name}</h2>
      <p>${n.desc}</p>
    </a>
  `,f.appendChild(s)});
//# sourceMappingURL=index.js.map
