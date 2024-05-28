(()=>{"use strict";function t(t,e,s){const o=document.documentElement,i="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(i),e.forEach((t=>{o.removeEventListener(t,n)})),s())}t.hasAttribute(i)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,n)}))})),t.setAttribute(i,""))}class e{constructor(t,e,s){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=s,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,s=Math.floor(e/100);let o=0;const i=setInterval((()=>{o+=s,t.innerText=o,o>e&&(t.innerText=e,clearInterval(i))}),25*Math.random())}aninaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.aninaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInterno=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){console.log(this),t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInterno.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInterno.length&&this.addLinkEvent(),this}}('[data-menu="smoth"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="active"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}("[data-anime='accordion'] dt").init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="active"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,s){this.btnOpen=document.querySelector(t),this.btnClose=document.querySelector(e),this.sectionModal=document.querySelector(s),this.eventToggleModal=this.eventToggleModal.bind(this),this.outModal=this.outModal.bind(this)}toggleModal(){this.sectionModal.classList.toggle("active")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}outModal(t){t.target===this.sectionModal&&this.toggleModal()}addModalEvent(){this.btnOpen.addEventListener("click",this.eventToggleModal),this.btnClose.addEventListener("click",this.eventToggleModal),this.sectionModal.addEventListener("click",this.outModal)}init(){return this.btnOpen&&this.btnClose&&this.sectionModal&&this.addModalEvent(),this}}('[data-modal="open"]','[data-modal="close"]','[ data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}createTooltipBox(t){const e=document.createElement("div"),s=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=s,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.createTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowMetade=.5*window.innerHeight,this.checkDistance=this.checkDistance.bind(this)}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowMetade)}}))}checkDistance(){this.distance.forEach((t=>{window.scrollY>t.offset?t.element.classList.add("active"):t.element.classList.contains("active")&&t.element.classList.remove("active")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}toDestroy(){window.removeEventListener("scroll",this.checkDistance)}}("[data-anime='scroll']").init(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((s=>{t.addEventListener(s,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),s=document.querySelector('[data-menu="list"]'),o=["click","touchstart"];if(e){function i(){s.classList.add("active"),e.classList.add("active"),t(s,o,(()=>{s.classList.remove("active"),e.classList.remove("active")}))}o.forEach((t=>{e.addEventListener(t,i)}))}}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),s=t.dataset.horario.split(",").map(Number),o=new Date,i=o.getDay(),n=o.getHours(),a=-1!==e.indexOf(i);n>=s[0]&&n<s[1]&&a&&t.classList.add("open")}(),function(t,s){const o=document.querySelector(".numeros-grid");!async function(){try{const t=await fetch("../../animaisapi.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)}(t))),new e("[data-numero]",".numeros","active").init()}catch(t){console.log(t)}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(100/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))}))})();