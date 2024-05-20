(()=>{"use strict";function t(t,e,n){const o=document.documentElement,c="data-outside";function a(i){t.contains(i.target)||(t.removeAttribute(c),e.forEach((t=>{o.removeEventListener(t,a)})),n())}t.hasAttribute(c)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,a)}))})),t.setAttribute(c,""))}!function(){const t=document.querySelectorAll("[data-tab='menu'] li"),e=document.querySelectorAll("[data-tab='content'] section");e[0].classList.add("active"),t.length&&e.length&&t.forEach(((t,n)=>{t.addEventListener("click",(()=>{!function(t){e.forEach((t=>{t.classList.remove("active")}));const n=e[t].dataset.anime;e[t].classList.add("active",n)}(n)}))}))}(),function(){const t=document.querySelectorAll("[data-anime='accordion'] dt"),e="active";function n(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener("click",n)})))}(),function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-menu="smoth"] a[href^="#"]').forEach((e=>{e.addEventListener("click",t)}))}(),function(){const t=document.querySelectorAll("[data-anime='scroll']"),e=.6*window.innerHeight;function n(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("active"):t.classList.contains("active")&&t.classList.remove("active")}))}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){const t=document.querySelector('[data-modal="open"]'),e=document.querySelector('[data-modal="close"]'),n=document.querySelector('[ data-modal="container"]');if(t&&e&&n){function o(t){t.preventDefault(),n.classList.toggle("active")}function c(t){t.target===this&&o(t)}t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",c)}}(),function(){const t=document.querySelectorAll("[data-tooltip]");function e(){const t=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);o.tooltipBox=t,this.addEventListener("mousemove",o),n.tooltipBox=t,n.element=this,this.addEventListener("mouseleave",n)}const n={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",o)}},o={handleEvent(t){this.tooltipBox.style.top=`${t.pageY+20}px`,this.tooltipBox.style.left=`${t.pageX+20}px`}};t.forEach((t=>{t.addEventListener("mouseover",e)}))}(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((n=>{t.addEventListener(n,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]'),o=["click","touchstart"];if(e){function c(){n.classList.add("active"),e.classList.add("active"),t(n,o,(()=>{n.classList.remove("active"),e.classList.remove("active")}))}o.forEach((t=>{e.addEventListener(t,c)}))}}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,c=o.getDay(),a=o.getHours(),i=-1!==e.indexOf(c);a>=n[0]&&a<n[1]&&i&&t.classList.add("open")}(),async function(t){try{const t=await fetch("./animaisapi.json"),e=await t.json(),n=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);n.appendChild(e)})),function(){const t=document.querySelector(".numeros"),e=new MutationObserver((function(t){t[0].target.classList.contains("active")&&(e.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{let e=0;const n=+t.innerText,o=setInterval((()=>{const c=Math.floor(n/100);e+=c,t.innerText=e,e>n&&(t.innerText=n,clearInterval(o))}),50*Math.random())})))}));e.observe(t,{attributes:!0})}()}catch(t){console.log(t)}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(100/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))}))})();