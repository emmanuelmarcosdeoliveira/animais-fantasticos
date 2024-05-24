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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initScroll.js */ \"./scripts/modules/initScroll.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./scripts/modules/accordion.js\");\n/* harmony import */ var _modules_activeTabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/activeTabs.js */ \"./scripts/modules/activeTabs.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./scripts/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./scripts/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./scripts/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./scripts/modules/menu-mobile.js\");\n/* harmony import */ var _modules_operation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/operation.js */ \"./scripts/modules/operation.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./scripts/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./scripts/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_animationScroll_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/animationScroll.js */ \"./scripts/modules/animationScroll.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst ScrollSoft = new _modules_initScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"smoth\"] a[href^=\"#\"]');\nScrollSoft.init();\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-anime='accordion'] dt\");\naccordion.init();\nconst tabNav = new _modules_activeTabs_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"open\"]', '[data-modal=\"close\"]', '[ data-modal=\"container\"]');\nmodal.init();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_operation_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_animationScroll_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/index.js?");

/***/ }),

/***/ "./scripts/modules/accordion.js":
/*!**************************************!*\
  !*** ./scripts/modules/accordion.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"active\";\n  }\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n  //Adiciona os Eventos ao Accordion\n  addAccordionEvent() {\n    this.accordionList.forEach(item => {\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\n    });\n  }\n  // Iniciar função\n  init() {\n    if (this.accordionList.length) {\n      //Ativar primeiro Item\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/accordion.js?");

/***/ }),

/***/ "./scripts/modules/activeTabs.js":
/*!***************************************!*\
  !*** ./scripts/modules/activeTabs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = \"active\";\n  }\n  activeTab(index) {\n    this.tabContent.forEach(section => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  // Adiciona os eventos as Tabs\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener(\"click\", () => this.activeTab(index));\n    });\n  }\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      // Ativar primeiro item\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/activeTabs.js?");

/***/ }),

/***/ "./scripts/modules/anima-numeros.js":
/*!******************************************!*\
  !*** ./scripts/modules/anima-numeros.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function aninaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n    numeros.forEach(numeros => {\n      let start = 0;\n      const total = +numeros.innerText;\n      const timer = setInterval(() => {\n        const incremento = Math.floor(total / 100);\n        start = start + incremento;\n        numeros.innerText = start;\n        if (start > total) {\n          numeros.innerText = total;\n          clearInterval(timer);\n        }\n      }, 50 * Math.random());\n    });\n  }\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('active')) {\n      observer.disconnect();\n      aninaNumeros();\n    }\n  }\n  const observerTarget = document.querySelector('.numeros');\n  const observer = new MutationObserver(handleMutation);\n  observer.observe(observerTarget, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/anima-numeros.js?");

/***/ }),

/***/ "./scripts/modules/animationScroll.js":
/*!********************************************!*\
  !*** ./scripts/modules/animationScroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationScroll)\n/* harmony export */ });\nfunction initAnimationScroll() {\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\n  const windowMetade = window.innerHeight * 0.6;\n  function animaScroll() {\n    sections.forEach(section => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) {\n        section.classList.add('active');\n      } else if (section.classList.contains('active')) {\n        section.classList.remove('active');\n      }\n    });\n  }\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/animationScroll.js?");

/***/ }),

/***/ "./scripts/modules/dropdown-menu.js":
/*!******************************************!*\
  !*** ./scripts/modules/dropdown-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./scripts/modules/outsideclick.js\");\n\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n  dropdownMenus.forEach(menu => {\n    ;\n    ['touchstart', 'click'].forEach(userEvent => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/dropdown-menu.js?");

/***/ }),

/***/ "./scripts/modules/fetch-animais.js":
/*!******************************************!*\
  !*** ./scripts/modules/fetch-animais.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./scripts/modules/anima-numeros.js\");\n\nfunction initFetchAnimais() {\n  async function fetchAnimais(url) {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n      const numerosGrid = document.querySelector('.numeros-grid');\n      animaisJSON.forEach(animal => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);\n      });\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n  fetchAnimais('./animaisapi.json');\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/fetch-animais.js?");

/***/ }),

/***/ "./scripts/modules/fetch-bitcoin.js":
/*!******************************************!*\
  !*** ./scripts/modules/fetch-bitcoin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch('https://blockchain.info/ticker').then(response => response.json()).then(bitcoin => {\n    const btcPreco = document.querySelector('.btc-preco');\n    btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);\n  }).catch(erro => {\n    console.log(Error(erro));\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/fetch-bitcoin.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./scripts/modules/outsideclick.js\");\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click', 'touchstart'];\n  if (menuButton) {\n    function openMenu() {\n      menuList.classList.add('active');\n      menuButton.classList.add('active');\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n        menuList.classList.remove('active');\n        menuButton.classList.remove('active');\n      });\n    }\n    eventos.forEach(userEvent => {\n      menuButton.addEventListener(userEvent, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/menu-mobile.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initOperation)\n/* harmony export */ });\nfunction initOperation() {\n  const operation = document.querySelector('[data-semana]');\n  const diasSemana = operation.dataset.semana.split(',').map(Number);\n  const horarioSemana = operation.dataset.horario.split(',').map(Number);\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n  const semanaOpen = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioOpen = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n  if (horarioOpen && semanaOpen) {\n    operation.classList.add('open');\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/operation.js?");

/***/ }),

/***/ "./scripts/modules/outsideclick.js":
/*!*****************************************!*\
  !*** ./scripts/modules/outsideclick.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outSideClick)\n/* harmony export */ });\nfunction outSideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n  function handleOutsideCkick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(userEvent => {\n        html.removeEventListener(userEvent, handleOutsideCkick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(userEvent => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideCkick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/outsideclick.js?");

/***/ }),

/***/ "./scripts/modules/tooltip.js":
/*!************************************!*\
  !*** ./scripts/modules/tooltip.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InitTolltip)\n/* harmony export */ });\nfunction InitTolltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n  function onMouseOver() {\n    const tooltipBox = createTolltipBox(this);\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    }\n  };\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    }\n  };\n  function createTolltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n  tooltips.forEach(item => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./scripts/modules/tooltip.js?");

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