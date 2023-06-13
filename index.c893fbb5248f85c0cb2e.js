/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _accets_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accets/fonts/fonts.css */ \"./src/accets/fonts/fonts.css\");\n/* harmony import */ var _js_changeSteps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/changeSteps */ \"./src/js/changeSteps.js\");\n/* harmony import */ var _js_radioClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/radioClick */ \"./src/js/radioClick.js\");\n/* harmony import */ var _js_checkboxClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/checkboxClick */ \"./src/js/checkboxClick.js\");\n/* harmony import */ var _js_generateStepNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/generateStepNumber */ \"./src/js/generateStepNumber.js\");\n/* harmony import */ var _js_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/select */ \"./src/js/select.js\");\n/* harmony import */ var _js_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_select__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _js_contactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/contactForm */ \"./src/js/contactForm.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/index.js?");

/***/ }),

/***/ "./src/js/changeSteps.js":
/*!*******************************!*\
  !*** ./src/js/changeSteps.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slideRight\": () => (/* binding */ slideRight),\n/* harmony export */   \"steps\": () => (/* binding */ steps)\n/* harmony export */ });\nconst arrLeft = document.querySelectorAll('.step__btn_left');\nconst arrRight = document.querySelectorAll('.step__btn_right');\nconst steps = document.querySelectorAll('.step');\nlet stepNumber = 0;\nfunction slideRight(arrSteps) {\n  stepNumber += 1;\n  arrSteps[stepNumber].classList.remove('hidden');\n  arrSteps[stepNumber].classList.add('step_animated');\n  arrSteps[stepNumber - 1].classList.add('hidden');\n  arrSteps[stepNumber - 1].classList.remove('step_animated');\n}\nfunction slideLeft(arrSteps) {\n  arrSteps[stepNumber - 1].classList.remove('hidden');\n  arrSteps[stepNumber - 1].classList.add('step_animated');\n  arrSteps[stepNumber].classList.add('hidden');\n  arrSteps[stepNumber].classList.remove('step_animated');\n  stepNumber -= 1;\n}\narrRight.forEach(button => {\n  button.addEventListener('click', event => {\n    event.preventDefault();\n    slideRight(steps);\n  });\n});\narrLeft.forEach(button => {\n  button.addEventListener('click', event => {\n    event.preventDefault();\n    slideLeft(steps);\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/changeSteps.js?");

/***/ }),

/***/ "./src/js/checkboxClick.js":
/*!*********************************!*\
  !*** ./src/js/checkboxClick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n\nfunction getCheckedValues(checkbox, question) {\n  const checkboxesCheckedValues = Array.from(document.getElementsByName(checkbox.name)).filter(c => c.checked).map(c => c.labels[0].innerHTML);\n  const selectedValuesField = checkbox.closest('.step__main').querySelector('.select__selected-values');\n  selectedValuesField.innerHTML = checkboxesCheckedValues.join(', ');\n  _request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(question, checkboxesCheckedValues);\n}\nfunction removeBtnAtrDisabled(checkbox) {\n  const parentStep = checkbox.closest('.step');\n  const currentRightBtn = parentStep.querySelector('.step__btn_right');\n  currentRightBtn.removeAttribute('disabled');\n}\ndocument.querySelectorAll('.step__checkbox').forEach(checkbox => {\n  const question = checkbox.closest('.step').querySelector('.step__question').innerHTML;\n  checkbox.addEventListener('click', () => {\n    removeBtnAtrDisabled(checkbox);\n    getCheckedValues(checkbox, question);\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeBtnAtrDisabled);\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/checkboxClick.js?");

/***/ }),

/***/ "./src/js/contactForm.js":
/*!*******************************!*\
  !*** ./src/js/contactForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _fetchMock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchMock */ \"./src/js/fetchMock.js\");\n\n\nconst feedbackInputs = Array.from(document.getElementsByName('feedback'));\nconst contactSendBtn = document.querySelector('.contact-send');\nconst finishScreen = document.querySelector('.finish');\nconst quizWindow = document.querySelector('.quiz-window');\nconst quizWindowInfo = document.querySelector('.quiz-window__info');\ncontactSendBtn.addEventListener('click', event => {\n  event.preventDefault();\n  let valid = true;\n  feedbackInputs.forEach(field => {\n    field.checkValidity();\n    valid = valid && field.reportValidity();\n  });\n  if (!valid) return;\n  feedbackInputs.forEach(field => {\n    _request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(field.id, field.value);\n  });\n  (0,_fetchMock__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/url', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json;charset=utf-8'\n    },\n    body: Object.fromEntries(_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  }).then(() => {\n    contactSendBtn.closest('.step').classList.add('hidden');\n    finishScreen.classList.remove('hidden');\n    quizWindowInfo.classList.add('hidden');\n    quizWindow.style.maxWidth = '40rem';\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/contactForm.js?");

/***/ }),

/***/ "./src/js/fetchMock.js":
/*!*****************************!*\
  !*** ./src/js/fetchMock.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction fetch() {\n  return new Promise(resolve => {\n    resolve('done');\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetch);\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/fetchMock.js?");

/***/ }),

/***/ "./src/js/generateStepNumber.js":
/*!**************************************!*\
  !*** ./src/js/generateStepNumber.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _changeSteps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeSteps */ \"./src/js/changeSteps.js\");\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  for (let i = 0; i < _changeSteps__WEBPACK_IMPORTED_MODULE_0__.steps.length; i++) {\n    const stepNumber = _changeSteps__WEBPACK_IMPORTED_MODULE_0__.steps[i].querySelector('.step__number');\n    stepNumber.innerHTML = `Шаг ${i + 1}/${_changeSteps__WEBPACK_IMPORTED_MODULE_0__.steps.length}`;\n  }\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/generateStepNumber.js?");

/***/ }),

/***/ "./src/js/radioClick.js":
/*!******************************!*\
  !*** ./src/js/radioClick.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _changeSteps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeSteps */ \"./src/js/changeSteps.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _checkboxClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkboxClick */ \"./src/js/checkboxClick.js\");\n\n\n\nfunction getCheckedValuesRadio(radio, question) {\n  const checkedRadioInput = radio.closest('.step').querySelector('.step__input:checked');\n  const radioInputCheckedValue = checkedRadioInput.labels[0].innerHTML;\n  _request__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(question, radioInputCheckedValue);\n}\ndocument.querySelectorAll('.step__input').forEach(radio => {\n  const question = radio.closest('.step').querySelector('.step__question').innerHTML;\n  radio.addEventListener('click', () => {\n    (0,_checkboxClick__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(radio);\n    getCheckedValuesRadio(radio, question);\n    setTimeout(_changeSteps__WEBPACK_IMPORTED_MODULE_0__.slideRight, 100, _changeSteps__WEBPACK_IMPORTED_MODULE_0__.steps);\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/radioClick.js?");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst request = new Map();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/request.js?");

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/***/ (() => {

eval("const arrowsSelect = document.querySelectorAll('.select__icon');\narrowsSelect.forEach(arrow => {\n  arrow.addEventListener('click', () => {\n    const parentStep = arrow.closest('.step');\n    const currentCheckboxes = parentStep.querySelector('.step__chekboxes');\n    currentCheckboxes.classList.toggle('hidden');\n    arrow.classList.toggle('select__icon_clicked');\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/select.js?");

/***/ }),

/***/ "./src/accets/fonts/fonts.css":
/*!************************************!*\
  !*** ./src/accets/fonts/fonts.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/accets/fonts/fonts.css?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/main.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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