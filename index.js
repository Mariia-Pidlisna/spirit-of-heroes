(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const r="/astrakhantsev-oleksandr/IMG_9682.webp",t="/bakhtinov-cavelii/IMG_2988.webp",m="/kulkov-sergiy/IMG_9719.webp",k="/bozhko-serhii/IMG_3011.webp",c="/vasin-valerii/IMG_9629.webp",d="/dumanskyi-pavlo/IMG_9701.webp",y="/zhydkov-mykola/IMG_9666.webp",v="/zvonyk-dan/IMG_9852.webp",h="/kostakov-serhii/IMG_2935.webp",b="/malofieiev-oleksandr/IMG_9698.webp",u="/medynskyi-oleh/medynskyi-oleh-kostiantynovych.webp",p="/piskovyi-ruslan/IMG_3012.webp",g="/romanovskyi-illia/IMG_2938.webp",f="/yarmolenko-viktor/IMG_2932.webp",I="/bobrovnyk-denys/IMG_2941.webp",M="/zeleniuk-vadym/IMG_3823.webp",w="/tomashchuk-vitalii/IMG_3810.webp",G="/ponomarenko-denys/IMG_4512.webp",_=[{name:"Астраханцев Олександр",img:r,link:"./astrakhantsev-oleksandr/astrakhantsev-oleksandr.html",desc:`
      Майстер кіокушинкай карате<br>
      Народився 1969 року в м. Бердичів 
    `},{name:"Бахтiнoв Cавелій",img:t,link:"./bakhtinov-cavelii/bakhtinov-cavelii.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 1999 року у м. Буськ`},{name:"Бобровник Денис",img:I,link:"./bobrovnyk-denys/bobrovnyk-denys.html",desc:`
      Спортсмен кіокушинкай карате<br>
<br>      `},{name:"Божко Сергій",img:k,link:"./bozhko-serhii/bozhko-serhii.html",desc:`
      Молодший сержант <br>
      Народився 19 жовтня 1976 року`},{name:"Васін Валерій",img:c,link:"./vasin-valerii/vasin-valerii.html",desc:`
      Тренер з кіокушинкай карате<br>
      Народився 1975 року, м. Херсон`},{name:"Думанський Павло",img:d,link:"./dumanskyi-pavlo/dumanskyi-pavlo.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 2003 року у Львові`},{name:"Жидков Микола",img:y,link:"./zhydkov-mykola/zhydkov-mykola.html",desc:`
      Людина, яка любила футбол та карате<br>
      Народився 2001 року м. Кропивницький`},{name:"Звоник Дан",img:v,link:"./zvonyk-dan/zvonyk-dan.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 1996 року м. Донецьк`},{name:"Зеленюк Вадим",img:M,link:"./zeleniuk-vadym/zeleniuk-vadym.html",desc:`
      Спортсмен практикував дзюдо, самбо, рукопашний бій<br>
      Народився у місті Красилів на Хмельниччині`},{name:"Костаков Сергій",img:h,link:"./kostakov-serhii/kostakov-serhii.html",desc:`
      Старший солдат, Снайпер<br>
      Народився 12 травня 1972 року в м. Київ`},{name:"Кульков Cергій",img:m,link:"./kulkov-sergiy/kulkov-sergiy.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 1979 року`},{name:"Малофєєв Олександр",img:b,link:"./malofieiev-oleksandr/malofieiev-oleksandr.html",desc:`
      Майстер кіокушинкай карате, 1 дан<br>
      Народився 1975 року`},{name:"Мединський Олег",img:u,link:"./medynskyi-oleh/medynskyi-oleh.html",desc:`
      Майстер кіокушинкай карате, 2 дан<br>
      Народився 1968 року в с. Іллінка`},{name:"Пісковий Руслан",img:p,link:"./piskovyi-ruslan/piskovyi-ruslan.html",desc:`
      Професійно займався кікбоксингом<br>
      Народився 23 листопада 2001 року в м. Київ`},{name:"Пономаренко Денис",img:G,link:"./ponomarenko-denys/ponomarenko-denys.html",desc:`
      Займався рукопашним боєм<br>
      Народився 26 березня 1996 року в м. Чернігів`},{name:"Романовський Ілля",img:g,link:"./romanovskyi-illia/romanovskyi-illia.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 24 травня 2004 року у с. Мар’янівка`},{name:"Томащук Віталій",img:w,link:"./tomashchuk-vitalii/tomashchuk-vitalii.html",desc:`
      Спортсмен кіокушинкай карате<br>
      <br>`},{name:"Ярмоленко Віктор",img:f,link:"./yarmolenko-viktor/yarmolenko-viktor.html",desc:`
      Спортсмен кіокушинкай карате<br>
      Народився 2 січня 1976 року в м. Київ`}],z=document.querySelector(".gallery-ul");_.forEach(o=>{const n=document.createElement("li");n.classList.add("gallery-list"),n.innerHTML=`
    <a class="gallery-list-url" href="${o.link}">
      <img src="${o.img}" alt="${o.name}">
      <h2 class="gallery-title-img">${o.name}</h2>
      <p>${o.desc}</p>
    </a>
  `,z.appendChild(n)});
//# sourceMappingURL=index.js.map
