/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main/src/classes/characters.js":
/*!****************************************!*\
  !*** ./main/src/classes/characters.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Character\": () => /* binding */ Character,\n/* harmony export */   \"Hero\": () => /* binding */ Hero,\n/* harmony export */   \"Villager\": () => /* binding */ Villager\n/* harmony export */ });\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./main/src/classes/object.js\");\n\r\n\r\nclass Character extends _object__WEBPACK_IMPORTED_MODULE_0__.Object {\r\n    constructor(name, isWalkable, src, hp, power, isEnemy) {\r\n        super(name, isWalkable, `Characters/${src}`);\r\n        this.hp = hp;\r\n        this.power = power;\r\n        this.isEnemy = isEnemy;\r\n    }\r\n\r\n    get Hp() {\r\n        return this.hp;\r\n    }\r\n    set Hp(value) {\r\n        this.hp = value;\r\n    }\r\n\r\n    get Power() {\r\n        return this.power;\r\n    }\r\n    set Power(value) {\r\n        this.power = value;\r\n    }\r\n\r\n    get IsEnemy() {\r\n        return this.isEnemy;\r\n    }\r\n    set IsEnemy(value) {\r\n        this.isEnemy = value;\r\n    }\r\n}\r\n\r\nclass Hero extends Character {\r\n    constructor(name, hp, power) {\r\n        super(name, true, 'Hero.png', hp, power, false);\r\n    }\r\n}\r\n\r\nclass Villager extends Character {\r\n    constructor(name, src, hp) {\r\n        super(name, true, src, hp, 0, false);\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/classes/characters.js?");

/***/ }),

/***/ "./main/src/classes/nature.js":
/*!************************************!*\
  !*** ./main/src/classes/nature.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mountain\": () => /* binding */ Mountain,\n/* harmony export */   \"Hill\": () => /* binding */ Hill,\n/* harmony export */   \"Tree\": () => /* binding */ Tree,\n/* harmony export */   \"Grass\": () => /* binding */ Grass\n/* harmony export */ });\nconst { Object } = __webpack_require__(/*! ./object */ \"./main/src/classes/object.js\");\r\n\r\nclass Mountain extends Object {\r\n    constructor(name, src) {\r\n        super(name, false, `Mountains/${src}`);\r\n    }\r\n}\r\n\r\nclass Hill extends Object {\r\n    constructor(name, src) {\r\n        super(name, true, `Mountains/${src}`);\r\n    }\r\n}\r\n\r\nclass Tree extends Object {\r\n    constructor(name, src) {\r\n        super(name, false, `Trees/${src}`);\r\n    }\r\n}\r\n\r\nclass Grass extends Object {\r\n    constructor(name, src) {\r\n        super(name, true, `Grass/${src}`);\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/classes/nature.js?");

/***/ }),

/***/ "./main/src/classes/object.js":
/*!************************************!*\
  !*** ./main/src/classes/object.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Object\": () => /* binding */ Object\n/* harmony export */ });\nclass Object {\r\n    constructor(name, isWalkable, src) {\r\n        this.name = name;\r\n        this.isWalkable = isWalkable;\r\n        this.src = `./assets/sprites/${src}`;\r\n    }\r\n\r\n    get Name() {\r\n        return this.name;\r\n    }\r\n    set Name(value) {\r\n        this.name = value;\r\n    }\r\n\r\n    get IsWalkable() {\r\n        return this.isWalkable;\r\n    }\r\n    set IsWalkable(value) {\r\n        this.isWalkable = value;\r\n    }\r\n\r\n    get Src() {\r\n        return this.src;\r\n    }\r\n    set Src(value) {\r\n        this.src = value;\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/classes/object.js?");

/***/ }),

/***/ "./main/src/main.js":
/*!**************************!*\
  !*** ./main/src/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Map\": () => /* binding */ Map\n/* harmony export */ });\n/* harmony import */ var _classes_characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/characters */ \"./main/src/classes/characters.js\");\n\r\n\r\nconst { Mountain, Grass } = __webpack_require__(/*! ./classes/nature */ \"./main/src/classes/nature.js\");\r\nconst Map = [];\r\nconst mapSize = 4;\r\nvar main = document.getElementsByClassName('main')[0];\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    // set a map \r\n    /*for (let i = 0; i < mapSize; i += 1) {\r\n        Map.push([]);\r\n    }*/\r\n\r\n    Map.push([new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')]);\r\n    Map.push([new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')]);\r\n    Map.push([new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')]);\r\n    Map.push([new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new _classes_characters__WEBPACK_IMPORTED_MODULE_0__.Hero('Hero', 100, 10), new Mountain('Mountain', 'Mountain.png')]);\r\n    paintMap();\r\n});\r\n\r\nfunction paintMap() {\r\n    for (let i = 0; i < mapSize; i++) {\r\n        for (let j = 0; j < mapSize; j++) {\r\n            let part = document.createElement('section');\r\n            let img = document.createElement('img');\r\n\r\n            part.classList.add('cell');\r\n            img.classList.add('cell-img');\r\n\r\n            img.src = Map[i][j].Src;\r\n\r\n            part.appendChild(img);\r\n\r\n            main.appendChild(part);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./main/src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;