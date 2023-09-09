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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\r\n\r\n    const contentDiv = document.querySelector('#content');\r\n\r\n    //remove any existing DOM children if present\r\n    contentDiv.innerHTML = \"\";\r\n\r\n    //Dom for heading \r\n    const heading = document.createElement('h1');\r\n    heading.textContent = \"This is how to contact us!\";\r\n    heading.classList.add('heading');\r\n    contentDiv.appendChild(heading);\r\n\r\n    //DOM for phone number\r\n    const phnNum = document.createElement('h3');\r\n    phnNum.textContent = \"Phone: 070444 94849\";\r\n    contentDiv.appendChild(phnNum);\r\n\r\n    //Dom for address\r\n    const address = document.createElement('p')\r\n    address.textContent = \"Address: Little Flower Valley, 266/4, Grand Trunk Rd, Vivekananda Colony, Liluah, Howrah, West Bengal 711204\"\r\n    contentDiv.appendChild(address);\r\n}\n\n//# sourceURL=webpack://respage/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();\r\n\r\n\r\n//Tab switching Module\r\nlet tabSwitchingModule = function () {\r\n\r\n    const homeTab = document.querySelector('.home');\r\n    homeTab.addEventListener('click', _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad);\r\n\r\n    const menuTab = document.querySelector('.menu');\r\n    menuTab.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.menubar);\r\n    \r\n    const contactTab = document.querySelector('.contact');\r\n    contactTab.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__.contact);\r\n\r\n\r\n};\r\ntabSwitchingModule();\r\nconsole.log('hi i amsdfasdf form ./src/index.js');\r\n\n\n//# sourceURL=webpack://respage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menubar: () => (/* binding */ menubar)\n/* harmony export */ });\nfunction menubar() {\r\n\r\n    const contentDiv = document.querySelector('#content');\r\n\r\n    //remove any existing DOM children if present\r\n    contentDiv.innerHTML = \"\";\r\n   \r\n    const picDiv = document.createElement('div');\r\n    picDiv.classList.add('pic-div');\r\n    //Dom for heading \r\n    const heading = document.createElement('h1');\r\n    heading.textContent = \"These are what we serve!\";\r\n    heading.classList.add('heading');\r\n    contentDiv.appendChild(heading);\r\n\r\n    //DOM for red sause pasta\r\n    const redPasta = document.createElement('img');\r\n    redPasta.src = \"https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80\"\r\n    redPasta.alt = \"Pic of our dish, Red sause pasta\";\r\n    redPasta.classList.add('menu-img');\r\n    picDiv.appendChild(redPasta);\r\n\r\n    //Dom for Chowmin\r\n    const chow = document.createElement('img')\r\n    chow.src = \"https://images.unsplash.com/photo-1617622141573-2e00d8818f3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvd21laW4lMjBub29kbGVzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60\";\r\n    chow.classList.add('menu-img');\r\n    picDiv.appendChild(chow);\r\n\r\n    contentDiv.appendChild(picDiv);\r\n\r\n}\n\n//# sourceURL=webpack://respage/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)\n/* harmony export */ });\nfunction initialPageLoad() {\r\n\r\n    const contentDiv = document.querySelector('#content');\r\n\r\n    contentDiv.innerHTML = \"\";\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Welcome to Veggieeee Corner\";\r\n    heading.classList.add('heading');\r\n    contentDiv.appendChild(heading);\r\n\r\n    const mainImg = document.createElement(\"img\");\r\n    mainImg.src = \"https://lh3.googleusercontent.com/p/AF1QipPqL83ZS5EEaQ_YXhHEwOe4xlMSM7ABV7Ow4yGt=s1360-w1360-h1020\";\r\n    mainImg.alt = \"Image of VEGGIE Corner,a resturant in Liluah\"\r\n    contentDiv.appendChild(mainImg);\r\n\r\n    const para=document.createElement(\"p\");\r\n    para.textContent=\"We serve the best food, Come dine with us!\";\r\n    contentDiv.appendChild(para);\r\n}\n\n//# sourceURL=webpack://respage/./src/pageLoad.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;