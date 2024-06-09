/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initScroll.js */ \"./scripts/modules/initScroll.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./scripts/modules/accordion.js\");\n/* harmony import */ var _modules_activeTabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/activeTabs.js */ \"./scripts/modules/activeTabs.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./scripts/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./scripts/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./scripts/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./scripts/modules/menu-mobile.js\");\n/* harmony import */ var _modules_operation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/operation.js */ \"./scripts/modules/operation.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./scripts/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./scripts/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./scripts/modules/scroll-anima.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/slide.js */ \"./scripts/modules/slide.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst ScrollSoft = new _modules_initScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"smoth\"] a[href^=\"#\"]');\nScrollSoft.init();\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-anime='accordion'] dt\");\naccordion.init();\nconst tabNav = new _modules_activeTabs_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"open\"]', '[data-modal=\"close\"]', '[ data-modal=\"container\"]');\nmodal.init();\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"[data-tooltip]\");\ntooltip.init();\nconst scrollAnima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('[data-anime=\"scroll\"]');\nscrollAnima.init();\nconst dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"[data-dropdown]\");\ndropdownMenu.init();\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\nmenuMobile.init();\nconst operation = new _modules_operation_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"[data-semana]\", \"open\");\noperation.init();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"./animaisapi.json\", \".numeros-grid\");\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\nconst slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"](\".slide\", \".slide-wrapper\");\nslide.init();\nslide.addControl(\".custom-controls\");\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/index.js?");

/***/ }),

/***/ "./scripts/modules/accordion.js":
/*!**************************************!*\
  !*** ./scripts/modules/accordion.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"active\";\n  }\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n  //Adiciona os Eventos ao Accordion\n  addAccordionEvent() {\n    this.accordionList.forEach(item => {\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\n    });\n  }\n  // Iniciar função\n  init() {\n    if (this.accordionList.length) {\n      //Ativar primeiro Item\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/accordion.js?");

/***/ }),

/***/ "./scripts/modules/activeTabs.js":
/*!***************************************!*\
  !*** ./scripts/modules/activeTabs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = \"active\";\n  }\n  activeTab(index) {\n    this.tabContent.forEach(section => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  // Adiciona os eventos as Tabs\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener(\"click\", () => this.activeTab(index));\n    });\n  }\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      // Ativar primeiro item\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/activeTabs.js?");

/***/ }),

/***/ "./scripts/modules/anima-numeros.js":
/*!******************************************!*\
  !*** ./scripts/modules/anima-numeros.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observerTarget, observerClass) {\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerTarget = document.querySelector(observerTarget);\n    this.observerClass = observerClass;\n    // bind o this do objeto  ao callback da mutaçào\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  // Recebe um elmento do Dom com numero em seu texto\n  // Incrementa a partir de 0 até o numero final\n  static incrementarNumero(numero) {\n    const total = +numero.innerText;\n    const incremento = Math.floor(total / 100);\n    let start = 0;\n    const timer = setInterval(() => {\n      start += incremento;\n      numero.innerText = start;\n      if (start > total) {\n        numero.innerText = total;\n        clearInterval(timer);\n      }\n    }, 25 * Math.random());\n  }\n\n  // Ativa incrementar numero para cada\n  // Numero selecionado do Dom\n  aninaNumeros() {\n    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));\n  }\n  // Funçào que ocorre quando a mutação ocorrer\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(this.observerClass)) {\n      this.observer.disconnect();\n      this.aninaNumeros();\n    }\n  }\n  //Adiciona o MutationObserver para verificar\n  // Quando a classe active é adicionada ao elemento target\n  addMutationObserver() {\n    this.observer = new MutationObserver(this.handleMutation);\n    this.observer.observe(this.observerTarget, {\n      attributes: true\n    });\n  }\n  init() {\n    if (this.numeros.length && this.observerTarget) {\n      this.addMutationObserver();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/anima-numeros.js?");

/***/ }),

/***/ "./scripts/modules/debounce.js":
/*!*************************************!*\
  !*** ./scripts/modules/debounce.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/debounce.js?");

/***/ }),

/***/ "./scripts/modules/dropdown-menu.js":
/*!******************************************!*\
  !*** ./scripts/modules/dropdown-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./scripts/modules/outsideclick.js\");\n\nclass DropdownMenu {\n  constructor(dropdownMenus, events) {\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\n    //define touch start e click como argumento padrão\n    // de events caso ususário nào defina nada\n    if (events === undefined) this.events = [\"touchstart\", \"click\"];else this.events = events;\n    this.activeClass = \"active\";\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\n  }\n\n  // Ativa o Dropdown Menu e adiciona a funçào\n  // que observa o click fora dele\n  activeDropdownMenu(event) {\n    event.preventDefault();\n    const element = event.currentTarget;\n    element.classList.add(this.activeClass);\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\n      element.classList.remove(\"active\");\n    });\n  }\n  // Adiciona os eventos ao dropdownMenu\n  addDropdownMenusEvent() {\n    this.dropdownMenus.forEach(menu => {\n      this.events.forEach(userEvent => {\n        menu.addEventListener(userEvent, this.activeDropdownMenu);\n      });\n    });\n  }\n  init() {\n    if (this.dropdownMenus.length) {\n      this.addDropdownMenusEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/dropdown-menu.js?");

/***/ }),

/***/ "./scripts/modules/fetch-animais.js":
/*!******************************************!*\
  !*** ./scripts/modules/fetch-animais.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./scripts/modules/anima-numeros.js\");\n\nfunction fetchAnimais(url, target) {\n  // Cria a div contendo informações\n  // com o total de animais\n  function createAnimal(animal) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n  // Preenche cada animal no DOM\n  const numerosGrid = document.querySelector(target);\n  function preencherAnimais(animal) {\n    const divAnimal = createAnimal(animal);\n    numerosGrid.appendChild(divAnimal);\n  }\n  // anima os numeros de cada animal\n  function animaAnimaisNumeros() {\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-numero]\", \".numeros\", \"active\");\n    animaNumeros.init();\n  }\n\n  // Puxa os animais atráves de um arquivo json\n  // e cria cada anima utilizando createAnimal\n  async function criarAnimais() {\n    try {\n      //Fetch, espera a resposta e transforma em json\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n      // Após a transformação de json, ativa as funções\n      // para preencher e animar os numeros\n      animaisJSON.forEach(animal => preencherAnimais(animal));\n      animaAnimaisNumeros();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n  return criarAnimais();\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/fetch-animais.js?");

/***/ }),

/***/ "./scripts/modules/fetch-bitcoin.js":
/*!******************************************!*\
  !*** ./scripts/modules/fetch-bitcoin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\n  fetch(url).then(response => response.json()).then(bitcoin => {\n    const btcPreco = document.querySelector(target);\n    btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);\n  }).catch(erro => {\n    console.log(Error(erro));\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./scripts/modules/initScroll.js":
/*!***************************************!*\
  !*** ./scripts/modules/initScroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollSoft)\n/* harmony export */ });\nclass scrollSoft {\n  constructor(links, options) {\n    this.linksInterno = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: \"smooth\",\n        block: \"start\"\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n  scrollToSection(event) {\n    console.log(this);\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute(\"href\");\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n  addLinkEvent() {\n    this.linksInterno.forEach(link => {\n      link.addEventListener(\"click\", this.scrollToSection);\n    });\n  }\n  init() {\n    if (this.linksInterno.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/initScroll.js?");

/***/ }),

/***/ "./scripts/modules/menu-mobile.js":
/*!****************************************!*\
  !*** ./scripts/modules/menu-mobile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./scripts/modules/outsideclick.js\");\n\nclass MenuMobile {\n  constructor(menuButton, menuList, events) {\n    this.menuButton = document.querySelector(menuButton);\n    this.menuList = document.querySelector(menuList);\n    this.activeClass = \"active\";\n    //define touch start e click como argumento padrão\n    // de events caso ususário nào defina nada\n    if (events === undefined) this.events = [\"touchstart\", \"click\"];else this.events = events;\n    this.openMenu = this.openMenu.bind(this);\n  }\n  openMenu(event) {\n    event.preventDefault();\n    this.menuList.classList.add(this.activeClass);\n    this.menuButton.classList.add(this.activeClass);\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\n      this.menuList.classList.remove(this.activeClass);\n      this.menuButton.classList.remove(this.activeClass);\n    });\n  }\n  addMenuMobileEvents() {\n    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));\n  }\n  init() {\n    if (this.menuButton && this.menuList) {\n      this.addMenuMobileEvents();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/menu-mobile.js?");

/***/ }),

/***/ "./scripts/modules/modal.js":
/*!**********************************!*\
  !*** ./scripts/modules/modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(btnOPen, btnClose, sectionModal) {\n    this.btnOpen = document.querySelector(btnOPen);\n    this.btnClose = document.querySelector(btnClose);\n    this.sectionModal = document.querySelector(sectionModal);\n    //bind this ao callback para fazer referencia ao objeto da classe\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.outModal = this.outModal.bind(this);\n  }\n\n  // Abre ou fecha o Modal\n  toggleModal() {\n    this.sectionModal.classList.toggle(\"active\");\n  }\n\n  // adiciona o evento de toggle ao modal\n  eventToggleModal(event) {\n    event.preventDefault();\n    this.toggleModal();\n  }\n\n  // Fecha o Modal ao clicar do lado de fora\n  outModal(event) {\n    if (event.target === this.sectionModal) {\n      this.toggleModal();\n    }\n  }\n\n  // Adiciona os eventos ao elemento do Modal\n  addModalEvent() {\n    this.btnOpen.addEventListener(\"click\", this.eventToggleModal);\n    this.btnClose.addEventListener(\"click\", this.eventToggleModal);\n    this.sectionModal.addEventListener(\"click\", this.outModal);\n  }\n  init() {\n    if (this.btnOpen && this.btnClose && this.sectionModal) {\n      this.addModalEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/modal.js?");

/***/ }),

/***/ "./scripts/modules/operation.js":
/*!**************************************!*\
  !*** ./scripts/modules/operation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Operation)\n/* harmony export */ });\nclass Operation {\n  constructor(operation, activeClass) {\n    this.operation = document.querySelector(operation);\n    this.activeClass = activeClass;\n  }\n  dadosOperation() {\n    this.diasSemana = this.operation.dataset.semana.split(\",\").map(Number);\n    this.horarioSemana = this.operation.dataset.horario.split(\",\").map(Number);\n  }\n  dadosAgora() {\n    this.dataAgora = new Date();\n    this.diaAgora = this.dataAgora.getDay();\n    this.horarioAgora = this.dataAgora.getUTCHours() - 3;\n  }\n  estaAberto() {\n    const semanaOpen = this.diasSemana.indexOf(this.diaAgora) !== -1;\n    const horarioOpen = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];\n    return semanaOpen && horarioOpen;\n  }\n  activeOpen() {\n    if (this.estaAberto()) {\n      this.operation.classList.add(this.activeClass);\n    }\n  }\n  init() {\n    if (this.operation) {\n      this.dadosOperation();\n      this.dadosAgora();\n      this.activeOpen();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/operation.js?");

/***/ }),

/***/ "./scripts/modules/outsideclick.js":
/*!*****************************************!*\
  !*** ./scripts/modules/outsideclick.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outSideClick)\n/* harmony export */ });\nfunction outSideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n  function handleOutsideCkick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(userEvent => {\n        html.removeEventListener(userEvent, handleOutsideCkick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(userEvent => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideCkick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/outsideclick.js?");

/***/ }),

/***/ "./scripts/modules/scroll-anima.js":
/*!*****************************************!*\
  !*** ./scripts/modules/scroll-anima.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./scripts/modules/debounce.js\");\n\nclass ScrollAnima {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.6;\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 10);\n  }\n  // Pega a distancia de cada item em relação ao topo do site\n  getDistance() {\n    this.distance = [...this.sections].map(section => {\n      const offset = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offset - this.windowMetade)\n      };\n    });\n  }\n  //Verifica a distancia em cada objeto em\n  // em relaçao ao site\n\n  checkDistance() {\n    this.distance.forEach(item => {\n      if (window.scrollY > item.offset) {\n        item.element.classList.add(\"active\");\n      } else if (item.element.classList.contains(\"active\")) {\n        item.element.classList.remove(\"active\");\n      }\n    });\n  }\n  init() {\n    if (this.sections.length) {\n      this.getDistance();\n      this.checkDistance();\n      window.addEventListener(\"scroll\", this.checkDistance);\n    }\n    return this;\n  }\n  // Remove o evento de scroll\n  toDestroy() {\n    window.removeEventListener(\"scroll\", this.checkDistance);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/scroll-anima.js?");

/***/ }),

/***/ "./scripts/modules/slide.js":
/*!**********************************!*\
  !*** ./scripts/modules/slide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slide: () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./scripts/modules/debounce.js\");\n\nclass Slide {\n  constructor(slide, wrapper) {\n    this.slide = document.querySelector(slide);\n    this.wrapper = document.querySelector(wrapper);\n    this.dist = {\n      finalposition: 0,\n      startX: 0,\n      movement: 0\n    };\n    this.activeClass = \"active\";\n    this.changeEvent = new Event(\"changeEvent\");\n  }\n  transition(active) {\n    this.slide.style.transition = active ? \"transform .3s\" : \"\";\n  }\n  moveSlide(distX) {\n    this.dist.movePosition = distX;\n    this.slide.style.transform = `translate3d(${distX}px , 0, 0)`;\n  }\n  updatePosition(clientX) {\n    this.dist.movement = (this.dist.startX - clientX) * 1.4;\n    return this.dist.finalposition - this.dist.movement;\n  }\n  onStart(event) {\n    let movetype;\n    if (event.type === \"mousedown\") {\n      event.preventDefault();\n      this.dist.startX = event.clientX;\n      movetype = \"mousemove\";\n    } else {\n      this.dist.startX = event.changedTouches[0].clientX;\n      movetype = \"touchmove\";\n    }\n    this.wrapper.addEventListener(movetype, this.onMove);\n    this.transition(false);\n  }\n  onMove(event) {\n    const pointerPosition = event.type === \"mousemove\" ? event.clientX : event.changedTouches[0].clientX;\n    const finalposition = this.updatePosition(pointerPosition);\n    this.moveSlide(finalposition);\n  }\n  onEnd(event) {\n    const movetype = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\n    this.wrapper.removeEventListener(movetype, this.onMove);\n    this.dist.finalposition = this.dist.movePosition;\n    this.transition(true);\n    this.changeSlideondEnd();\n  }\n  changeSlideondEnd() {\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\n      this.activeNextSlide();\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\n      this.activePreveSlide();\n    } else {\n      this.changeSlide(this.index.active);\n    }\n  }\n  addSlideEvents() {\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\n  }\n\n  // slides Config\n  slideposition(slide) {\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n    return -(slide.offsetLeft - margin);\n  }\n  slidesConfig() {\n    this.slideArray = [...this.slide.children].map(element => {\n      const position = this.slideposition(element);\n      return {\n        position,\n        element\n      };\n    });\n  }\n  slideIndexnav(index) {\n    const last = this.slideArray.length - 1;\n    this.index = {\n      prev: index ? index - 1 : undefined,\n      active: index,\n      next: index === last ? undefined : index + 1\n    };\n  }\n  changeSlide(index) {\n    const activeSlide = this.slideArray[index];\n    this.moveSlide(activeSlide.position);\n    this.slideIndexnav(index);\n    this.dist.finalposition = activeSlide.position;\n    this.changeActiveClass();\n    this.wrapper.dispatchEvent(this.changeEvent);\n  }\n  changeActiveClass() {\n    this.slideArray.forEach(item => item.element.classList.remove(this.activeClass));\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\n  }\n  activePreveSlide() {\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\n  }\n  activeNextSlide() {\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\n  }\n  onResize() {\n    setTimeout(() => {\n      this.slidesConfig();\n      this.changeSlide(this.index.active);\n    }, 1000);\n  }\n  addResizeEvent() {\n    window.addEventListener(\"resize\", this.onResize);\n  }\n  bindEvents() {\n    this.onStart = this.onStart.bind(this);\n    this.onMove = this.onMove.bind(this);\n    this.onEnd = this.onEnd.bind(this);\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\n    this.activePreveSlide = this.activePreveSlide.bind(this);\n    this.activeNextSlide = this.activeNextSlide.bind(this);\n  }\n  init() {\n    this.bindEvents();\n    this.transition(true);\n    this.addSlideEvents();\n    this.slidesConfig();\n    this.addResizeEvent();\n    this.changeSlide(3);\n    return this;\n  }\n}\nclass SlideNav extends Slide {\n  constructor(slide, wrapper) {\n    super(slide, wrapper);\n    this.bindControlEvents();\n  }\n  addArrow(prev, next) {\n    this.prevElement = document.querySelector(prev);\n    this.nextElement = document.querySelector(next);\n    this.addArrowEvent();\n  }\n  addArrowEvent() {\n    this.prevElement.addEventListener(\"click\", this.activePreveSlide);\n    this.nextElement.addEventListener(\"click\", this.activeNextSlide);\n  }\n  createControl() {\n    const control = document.createElement(\"ul\");\n    control.dataset.control = \"slide\";\n    this.slideArray.forEach((item, index) => {\n      control.innerHTML += `<li><a href=\"#slide ${index + 1}\">${index + 1}</a></li>`;\n    });\n    this.wrapper.appendChild(control);\n    return control;\n  }\n  eventControl(item, index) {\n    item.addEventListener(\"click\", event => {\n      event.preventDefault();\n      this.changeSlide(index);\n    });\n    this.wrapper.addEventListener(\"changeEvent\", this.activeControlItem);\n  }\n  activeControlItem() {\n    this.controlArray.forEach(item => item.classList.remove(this.activeClass));\n    this.controlArray[this.index.active].classList.add(this.activeClass);\n  }\n  addControl(customControl) {\n    this.control = document.querySelector(customControl) || this.createControl();\n    this.controlArray = [...this.control.children];\n    this.controlArray.forEach(this.eventControl);\n    this.activeControlItem();\n  }\n  bindControlEvents() {\n    this.eventControl = this.eventControl.bind(this);\n    this.activeControlItem = this.activeControlItem.bind(this);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/slide.js?");

/***/ }),

/***/ "./scripts/modules/tooltip.js":
/*!************************************!*\
  !*** ./scripts/modules/tooltip.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\n  constructor(tooltips) {\n    this.tooltips = document.querySelectorAll(tooltips);\n\n    // bind do objeto da classe aos callbacks\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseOver = this.onMouseOver.bind(this);\n  }\n\n  // Move a tooltip com base em seus estilos\n  // de acordo com a posição do mouse\n  onMouseMove(event) {\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\n    if (event.pageX + 240 > window.innerWidth) {\n      this.tooltipBox.style.left = `${event.pageX - 190}px`;\n    } else {\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    }\n  }\n\n  // Remove a tooltip e os eventos de mousemove e mouseleave\n  onMouseLeave({\n    currentTarget\n  }) {\n    this.tooltipBox.remove();\n    currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave);\n    currentTarget.removeEventListener(\"mousemove\", this.onMouseMove);\n  }\n\n  // Cria a tooltip box e coloca no body\n  createTooltipBox(element) {\n    const tooltipBox = document.createElement(\"div\");\n    const text = element.getAttribute(\"aria-label\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    this.tooltipBox = tooltipBox;\n  }\n\n  // Cria a tooltip e adiciona os eventos\n  // de mousemove e mouseleave ao target\n  onMouseOver({\n    currentTarget\n  }) {\n    // cria a tooltipbox e coloca em uma propriedade\n    this.createTooltipBox(currentTarget);\n    currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\n    currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave);\n  }\n\n  // Adiciona os eventos de mouseover a cada tooltip\n  addTooltipsEvent() {\n    this.tooltips.forEach(item => {\n      item.addEventListener(\"mouseover\", this.onMouseOver);\n    });\n  }\n  init() {\n    if (this.tooltips.length) {\n      this.addTooltipsEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/tooltip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;