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

/***/ "./eslint/js/modules/accordion.js"
/*!****************************************!*\
  !*** ./eslint/js/modules/accordion.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list);\r\n    this.activeClass = 'ativo';\r\n  }\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener('click', () => this.toggleAccordion(item));\r\n    });\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n  initAccordion() {\r\n    if (this.accordionList.length) {\r\n      this.toggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/accordion.js?\n}");

/***/ },

/***/ "./eslint/js/modules/animacao-scroll.js"
/*!**********************************************!*\
  !*** ./eslint/js/modules/animacao-scroll.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initScrollSite() {\r\n  const metadeWindow = window.innerHeight * 0.6;\r\n  function animaScroll() {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = sectionTop - metadeWindow < 0;\r\n      if (isSectionVisible) {\r\n        section.classList.add('ativo');\r\n      } else if (section.classList.contains('ativo')) {\r\n        section.classList.remove('ativo');\r\n      }\r\n    });\r\n  }\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  if (sections.length) {\r\n    animaScroll();\r\n    window.addEventListener('scroll', animaScroll);\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initScrollSite);\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/animacao-scroll.js?\n}");

/***/ },

/***/ "./eslint/js/modules/animacao-tabnav-menu.js"
/*!***************************************************!*\
  !*** ./eslint/js/modules/animacao-tabnav-menu.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(tabmenu, conteudo) {\r\n    this.tabMenu = document.querySelectorAll(tabmenu);\r\n    this.tabContent = document.querySelectorAll(conteudo);\r\n    this.activeClass = 'ativo';\r\n  }\r\n\r\n  ativeTab(index) {\r\n    this.tabContent.forEach((content) => {\r\n      content.classList.remove(this.activeClass);\r\n    });\r\n    const animacaoAoShow = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add('ativo', animacaoAoShow);\r\n  }\r\n  initEvent() {\r\n    this.tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener('click', () => {\r\n        this.ativeTab(index);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      this.initEvent();\r\n      this.ativeTab(0);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/animacao-tabnav-menu.js?\n}");

/***/ },

/***/ "./eslint/js/modules/bitcoin.js"
/*!**************************************!*\
  !*** ./eslint/js/modules/bitcoin.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function initBitcoin() {\r\n  try {\r\n    const bitCoin = await fetch('https://blockchain.info/ticker');\r\n    const json = await bitCoin.json();\r\n    const btcPreco = document.querySelector('.btc-preco');\r\n    btcPreco.innerText = json.BRL.buy.toFixed(4);\r\n  } catch (erro) {}\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initBitcoin);\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/bitcoin.js?\n}");

/***/ },

/***/ "./eslint/js/modules/cliqueFora.js"
/*!*****************************************!*\
  !*** ./eslint/js/modules/cliqueFora.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(elements, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n\r\n  if (!elements.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    elements.setAttribute(outside, '');\r\n  }\r\n  function handleOutsideClick(event) {\r\n    if (!elements.contains(event.target)) {\r\n      elements.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/cliqueFora.js?\n}");

/***/ },

/***/ "./eslint/js/modules/date-object.js"
/*!******************************************!*\
  !*** ./eslint/js/modules/date-object.js ***!
  \******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initDate() {}\r\nconst funcionamento = document.querySelector('[data-semana]');\r\nconst funcionamentoDias = funcionamento.dataset.semana.split(',').map(Number);\r\nconst funcionamentoHora = funcionamento.dataset.horario.split(',').map(Number);\r\n\r\nconst dataAgora = new Date();\r\nconst diaAgora = dataAgora.getDay();\r\nconst horaAgora = dataAgora.getHours();\r\n\r\nconst diaAberta = funcionamentoDias.indexOf(diaAgora) !== -1;\r\nconst horarioAberto =\r\n  horaAgora >= funcionamentoHora[0] && horaAgora < funcionamentoHora[1];\r\n\r\nif (diaAberta && horarioAberto) {\r\n  funcionamento.classList.add('aberto');\r\n} else {\r\n  funcionamento.classList.remove('aberto');\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDate);\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/date-object.js?\n}");

/***/ },

/***/ "./eslint/js/modules/dropdown.js"
/*!***************************************!*\
  !*** ./eslint/js/modules/dropdown.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDown)\n/* harmony export */ });\n/* harmony import */ var _cliqueFora_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliqueFora.js */ \"./eslint/js/modules/cliqueFora.js\");\n\r\nfunction initDropDown() {\r\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\r\n\r\n  dropdownMenus.forEach((menu) => {\r\n    ['touchstart', 'click'].forEach((eventoUsuario) => {\r\n      menu.addEventListener(eventoUsuario, handleClick);\r\n    });\r\n  });\r\n\r\n  function handleClick(e) {\r\n    e.preventDefault();\r\n    this.classList.add('active');\r\n    (0,_cliqueFora_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['click', 'touchstart'], () => {\r\n      this.classList.remove('active');\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/dropdown.js?\n}");

/***/ },

/***/ "./eslint/js/modules/fetchAnimais.js"
/*!*******************************************!*\
  !*** ./eslint/js/modules/fetchAnimais.js ***!
  \*******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numeros.js */ \"./eslint/js/modules/numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  async function fetchApi(url) {\r\n    try {\r\n      const divGrid = document.querySelector('.numeros-grid');\r\n      const response = await fetch(url);\r\n      const responseJSON = await response.json();\r\n      responseJSON.forEach((animal) => {\r\n        const divNova = criarDiv(animal);\r\n\r\n        divGrid.appendChild(divNova);\r\n      });\r\n      (0,_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (erro) {}\r\n  }\r\n\r\n  function criarDiv(animal) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('numeros-animal');\r\n    div.innerHTML = `<h3 class=\"titulo\">${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n    return div;\r\n  }\r\n\r\n  fetchApi('./animaisapi.json');\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFetchAnimais);\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/fetchAnimais.js?\n}");

/***/ },

/***/ "./eslint/js/modules/mobile-menu.js"
/*!******************************************!*\
  !*** ./eslint/js/modules/mobile-menu.js ***!
  \******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cliqueFora_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliqueFora.js */ \"./eslint/js/modules/cliqueFora.js\");\n\r\nfunction initMobile() {\r\n  const eventos = ['touchstart', 'click'];\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  function openMenu(event) {\r\n    menuButton.classList.add('active');\r\n    menuList.classList.add('active');\r\n    (0,_cliqueFora_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n      menuList.classList.remove('active');\r\n      menuButton.classList.remove('active');\r\n    });\r\n  }\r\n  eventos.forEach((evento) => {\r\n    menuButton.addEventListener(evento, openMenu);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMobile);\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/mobile-menu.js?\n}");

/***/ },

/***/ "./eslint/js/modules/modal.js"
/*!************************************!*\
  !*** ./eslint/js/modules/modal.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(botaoAbrir, botaoFechar, containerModal) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n    this.eventModal = this.eventModal.bind(this);\r\n    this.clicarForaModal = this.clicarForaModal.bind(this);\r\n  }\r\n\r\n  toggleEvent() {\r\n    this.containerModal.classList.toggle('ativo');\r\n  }\r\n  eventModal(event) {\r\n    event.preventDefault();\r\n    this.toggleEvent();\r\n  }\r\n\r\n  clicarForaModal(event) {\r\n    if (event.target === this.containerModal) {\r\n      this.toggleEvent();\r\n    }\r\n  }\r\n\r\n  modalEvents() {\r\n    this.botaoAbrir.addEventListener('click', this.eventModal);\r\n\r\n    this.botaoFechar.addEventListener('click', this.eventModal);\r\n\r\n    this.containerModal.addEventListener('click', this.clicarForaModal);\r\n  }\r\n  initModal() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.modalEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/modal.js?\n}");

/***/ },

/***/ "./eslint/js/modules/numeros.js"
/*!**************************************!*\
  !*** ./eslint/js/modules/numeros.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initNumeros() {\r\n  const numerosTodos = document.querySelectorAll('[data-numero]');\r\n\r\n  function animaNumeros() {\r\n    numerosTodos.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n        if (start > total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains('ativo')) {\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    }\r\n  }\r\n\r\n  const observerTarget = document.querySelector('.numeros');\r\n  const observer = new MutationObserver(handleMutation);\r\n  observer.observe(observerTarget, { attributes: true });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initNumeros);\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/numeros.js?\n}");

/***/ },

/***/ "./eslint/js/modules/scroll-suave.js"
/*!*******************************************!*\
  !*** ./eslint/js/modules/scroll-suave.js ***!
  \*******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linkInterno = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: 'smooth', block: 'start' };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollSection = this.scrollSection.bind(this);\r\n  }\r\n\r\n  scrollSection(e) {\r\n    e.preventDefault();\r\n    const href = e.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start',\r\n    });\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linkInterno.forEach((link) => {\r\n      link.addEventListener('click', this.scrollSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linkInterno.length) {\r\n      this.addLinkEvent();\r\n      return this;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/scroll-suave.js?\n}");

/***/ },

/***/ "./eslint/js/modules/tooltip.js"
/*!**************************************!*\
  !*** ./eslint/js/modules/tooltip.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const onMouseLeave = {\r\n    tooltipBox: '',\r\n    element: '',\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener('mouseleave', onMouseLeave);\r\n      this.element.removeEventListener('mousemove', onMouseMove);\r\n    },\r\n  };\r\n\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = event.pageY + 20 + 'px';\r\n      this.tooltipBox.style.left = event.pageX + 20 + 'px';\r\n    },\r\n  };\r\n  function criarTooltip(elemento) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = elemento.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n  function onMouseOver(event) {\r\n    const tooltipBox = criarTooltip(this);\r\n    tooltipBox.style.top = event.pageY + 'px';\r\n    tooltipBox.style.left = event.pageX + 'px';\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    this.addEventListener('mouseleave', onMouseLeave);\r\n    onMouseLeave.element = this;\r\n    this.addEventListener('mousemove', onMouseMove);\r\n  }\r\n\r\n  const tooltips = document.querySelectorAll('[data-tooltip]');\r\n  if (tooltips.length) {\r\n    tooltips.forEach((i) => {\r\n      i.addEventListener('mouseover', onMouseOver);\r\n    });\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTooltip);\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/modules/tooltip.js?\n}");

/***/ },

/***/ "./eslint/js/script.js"
/*!*****************************!*\
  !*** ./eslint/js/script.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./eslint/js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animacao-scroll.js */ \"./eslint/js/modules/animacao-scroll.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./eslint/js/modules/accordion.js\");\n/* harmony import */ var _modules_animacao_tabnav_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animacao-tabnav-menu.js */ \"./eslint/js/modules/animacao-tabnav-menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./eslint/js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./eslint/js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./eslint/js/modules/dropdown.js\");\n/* harmony import */ var _modules_mobile_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mobile-menu.js */ \"./eslint/js/modules/mobile-menu.js\");\n/* harmony import */ var _modules_date_object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/date-object.js */ \"./eslint/js/modules/date-object.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./eslint/js/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/bitcoin.js */ \"./eslint/js/modules/bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_mobile_menu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_date_object_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-accordion=\"accordion\"] dt');\r\naccordion.initAccordion();\r\nscrollSuave.init();\r\nconst tabNav = new _modules_animacao_tabnav_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n  '[data-tab=\"menu\"] li',\r\n  '[data-tab=\"content\"] section',\r\n);\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]',\r\n);\r\nmodal.initModal();\r\n// [data-modal=\"abrir\"]');\r\n\r\n// [data-modal=\"fechar\"]');\r\n\r\n// '\r\n\r\ntabNav.init();\r\nconsole.log('chao');\r\n\n\n//# sourceURL=webpack://refatoracao/./eslint/js/script.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./eslint/js/script.js");
/******/ 	
/******/ })()
;