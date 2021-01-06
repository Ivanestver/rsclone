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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Character\": () => /* binding */ Character,\n/* harmony export */   \"Hero\": () => /* binding */ Hero,\n/* harmony export */   \"Villager\": () => /* binding */ Villager,\n/* harmony export */   \"DarkKnight\": () => /* binding */ DarkKnight\n/* harmony export */ });\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./main/src/classes/object.js\");\n\r\n\r\nclass Character extends _object__WEBPACK_IMPORTED_MODULE_0__.Object {\r\n    constructor(name, isWalkable, src, hp, power, isEnemy) {\r\n        super(name, isWalkable, `Characters/${src}`);\r\n        this.hp = hp;\r\n        this.power = power;\r\n        this.isEnemy = isEnemy;\r\n    }\r\n\r\n    get Hp() {\r\n        return this.hp;\r\n    }\r\n    set Hp(value) {\r\n        this.hp = value;\r\n    }\r\n\r\n    get Power() {\r\n        return this.power;\r\n    }\r\n    set Power(value) {\r\n        this.power = value;\r\n    }\r\n\r\n    get IsEnemy() {\r\n        return this.isEnemy;\r\n    }\r\n    set IsEnemy(value) {\r\n        this.isEnemy = value;\r\n    }\r\n}\r\n\r\nclass Hero extends Character {\r\n    constructor(name, hp, power) {\r\n        super(name, true, 'Hero.png', hp, power, false);\r\n    }\r\n\r\n    copy(obj) {\r\n        obj = new Hero();\r\n        obj.Name = this.Name;\r\n        obj.IsWalkable = this.IsWalkable;\r\n        obj.Src = this.Src;\r\n        obj.Hp = this.Hp;\r\n        obj.IsEnemy = this.IsEnemy;\r\n    }\r\n}\r\n\r\nclass Villager extends Character {\r\n    constructor(name, src, hp) {\r\n        super(name, true, src, hp, 0, false);\r\n    }\r\n\r\n    copy(obj) {\r\n        obj = new Hero();\r\n        obj.Name = this.Name;\r\n        obj.IsWalkable = this.IsWalkable;\r\n        obj.Src = this.Src;\r\n        obj.Hp = this.Hp;\r\n        obj.IsEnemy = this.IsEnemy;\r\n    }\r\n}\r\n\r\nclass DarkKnight extends Character {\r\n    constructor(hp) {\r\n        super('Dark Knight', false, 'DarkKnight.png', hp, 10, true);\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/classes/characters.js?");

/***/ }),

/***/ "./main/src/classes/nature.js":
/*!************************************!*\
  !*** ./main/src/classes/nature.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mountain\": () => /* binding */ Mountain,\n/* harmony export */   \"Hill\": () => /* binding */ Hill,\n/* harmony export */   \"Tree\": () => /* binding */ Tree,\n/* harmony export */   \"Grass\": () => /* binding */ Grass\n/* harmony export */ });\nconst { Object } = __webpack_require__(/*! ./object */ \"./main/src/classes/object.js\");\r\n\r\nclass Mountain extends Object {\r\n    constructor(name, src) {\r\n        super(name, false, `Mountains/${src}`);\r\n    }\r\n\r\n    copy(obj) {\r\n        obj = new Mountain();\r\n        obj.Name = this.Name;\r\n        obj.IsWalkable = this.IsWalkable;\r\n        obj.Src = this.Src;\r\n    }\r\n}\r\n\r\nclass Hill extends Object {\r\n    constructor(name, src) {\r\n        super(name, true, `Mountains/${src}`);\r\n    }\r\n\r\n    copy(obj) {\r\n        obj = new Hill();\r\n        obj.Name = this.Name;\r\n        obj.IsWalkable = this.IsWalkable;\r\n        obj.Src = this.Src;\r\n    }\r\n}\r\n\r\nclass Tree extends Object {\r\n    constructor(name, src) {\r\n        super(name, false, `Trees/${src}`);\r\n    }\r\n\r\n    copy(obj) {\r\n        obj = new Tree();\r\n        obj.Name = this.Name;\r\n        obj.IsWalkable = this.IsWalkable;\r\n        obj.Src = this.Src;\r\n    }\r\n}\r\n\r\nclass Grass extends Object {\r\n    constructor(name, src) {\r\n        super(name, true, `Grass/${src}`);\r\n    }\r\n\r\n    copy(obj) {\r\n        obj = new Grass();\r\n        obj.Name = this.Name;\r\n        obj.IsWalkable = this.IsWalkable;\r\n        obj.Src = this.Src;\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/classes/nature.js?");

/***/ }),

/***/ "./main/src/classes/object.js":
/*!************************************!*\
  !*** ./main/src/classes/object.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Object\": () => /* binding */ Object\n/* harmony export */ });\nclass Object {\r\n    constructor(name, isWalkable, src) {\r\n        this.name = name;\r\n        this.isWalkable = isWalkable;\r\n        this.src = `./assets/sprites/${src}`;\r\n    }\r\n\r\n    get Name() {\r\n        return this.name;\r\n    }\r\n    set Name(value) {\r\n        this.name = value;\r\n    }\r\n\r\n    get IsWalkable() {\r\n        return this.isWalkable;\r\n    }\r\n    set IsWalkable(value) {\r\n        this.isWalkable = value;\r\n    }\r\n\r\n    get Src() {\r\n        return this.src;\r\n    }\r\n    set Src(value) {\r\n        this.src = value;\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/classes/object.js?");

/***/ }),

/***/ "./main/src/fight.js":
/*!***************************!*\
  !*** ./main/src/fight.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFight\": () => /* binding */ createFight\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main/src/main.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./main/src/variables.js\");\n\r\n\r\n\r\nvar main = document.getElementsByClassName('main')[0];\r\n\r\nfunction createFight(event) {\r\n    main.innerHTML = \"\";\r\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.paintMap)(_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Arena);\r\n    createHUD();\r\n    assignActions();\r\n}\r\n\r\nfunction createHUD() {\r\n    // who's turn\r\n    let turns = document.createElement('div');\r\n    turns.classList.add('turns');\r\n    turns.classList.add('appearance');\r\n    let textTurns = document.createElement('span');\r\n    textTurns.classList.add('text');\r\n    turns.appendChild(textTurns);\r\n    textTurns.textContent = 'Your Turn!';\r\n\r\n    main.appendChild(turns);\r\n\r\n    // player's actions\r\n    let actions = document.createElement('div');\r\n    actions.classList.add('actions');\r\n    actions.classList.add('appearance');\r\n\r\n    let attack = document.createElement('span');\r\n    attack.classList.add('text');\r\n    attack.classList.add('select');\r\n    attack.style.fontSize = '2rem';\r\n    attack.textContent = 'Attack';\r\n\r\n    let magic = document.createElement('span');\r\n    magic.classList.add('text');\r\n    magic.textContent = 'Magic';\r\n    magic.style.fontSize = '2rem';\r\n\r\n    let help = document.createElement('span');\r\n    help.classList.add('text');\r\n    help.textContent = 'Help';\r\n    help.style.fontSize = '2rem';\r\n\r\n    let skip = document.createElement('span');\r\n    skip.classList.add('text');\r\n    skip.textContent = 'Skip turn';\r\n    skip.style.fontSize = '2rem';\r\n\r\n    actions.appendChild(attack);\r\n    actions.appendChild(magic);\r\n    actions.appendChild(help);\r\n    actions.appendChild(skip);\r\n\r\n    main.appendChild(actions);\r\n\r\n    // health \r\n    let panel = document.createElement('div');\r\n    panel.classList.add('healthWrapper');\r\n    panel.classList.add('appearance');\r\n    let enemysHealth = document.createElement('span');\r\n    enemysHealth.classList.add('text');\r\n    enemysHealth.textContent = `You: ${_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Arena[2][4].Hp}`;\r\n    let herosHealth = document.createElement('span');\r\n    herosHealth.classList.add('text');\r\n    herosHealth.textContent = `Enemy: ${_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y].Hp}`;\r\n\r\n    panel.appendChild(enemysHealth);\r\n    panel.appendChild(herosHealth);\r\n\r\n    main.appendChild(panel);\r\n}\r\n\r\nfunction assignActions() {\r\n    document.onkeydown = keyPressHandler;\r\n}\r\n\r\nfunction keyPressHandler(event) {\r\n    let current = document.getElementsByClassName('select')[0];\r\n    let parent = current.parentElement;\r\n    current.classList.remove('select');\r\n\r\n    let node = 0;\r\n\r\n    for (let i = 0; i < parent.children.length; i++) {\r\n        if (parent.children[i].textContent === current.textContent) {\r\n            switch (event.key) {\r\n                case 'w':\r\n                case 'W':\r\n                    if (i != 0) {\r\n                        node = i - 1;\r\n                    }\r\n                    break;\r\n                case 's':\r\n                case 'S':\r\n                    if (i != parent.children.length - 1) {\r\n                        node = i + 1;\r\n                    }\r\n                    break;\r\n            }\r\n            break;\r\n        }\r\n    }\r\n\r\n    parent.children[node].classList.add('select');\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/fight.js?");

/***/ }),

/***/ "./main/src/main.js":
/*!**************************!*\
  !*** ./main/src/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paintMap\": () => /* binding */ paintMap\n/* harmony export */ });\n/* harmony import */ var _classes_characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/characters */ \"./main/src/classes/characters.js\");\n/* harmony import */ var _fight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fight */ \"./main/src/fight.js\");\n/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./move */ \"./main/src/move.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ \"./main/src/variables.js\");\n\r\n\r\n\r\n\r\n\r\nconst { Mountain, Grass } = __webpack_require__(/*! ./classes/nature */ \"./main/src/classes/nature.js\");\r\nvar main = document.getElementsByClassName('main')[0];\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n    for (let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_3__.variables.mapSize; i += 1) {\r\n        _variables__WEBPACK_IMPORTED_MODULE_3__.variables.Map.push([]);\r\n    }\r\n\r\n    for (let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_3__.variables.mapSize; i += 1) {\r\n        _variables__WEBPACK_IMPORTED_MODULE_3__.variables.Map[0].push(new Mountain('Mountain', 'Mountain.png'));\r\n        _variables__WEBPACK_IMPORTED_MODULE_3__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_3__.variables.mapSize - 1].push(new Mountain('Mountain', 'Mountain.png'));\r\n    }\r\n\r\n    _variables__WEBPACK_IMPORTED_MODULE_3__.variables.Map[1].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));\r\n    _variables__WEBPACK_IMPORTED_MODULE_3__.variables.Map[2].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));\r\n    _variables__WEBPACK_IMPORTED_MODULE_3__.variables.Map[3].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));\r\n    _variables__WEBPACK_IMPORTED_MODULE_3__.variables.Map[4].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), _variables__WEBPACK_IMPORTED_MODULE_3__.variables.Hero, new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));\r\n\r\n\r\n    //document.addEventListener('keydown', input);\r\n    document.onkeydown = input;\r\n\r\n    paintMap();\r\n});\r\n\r\n\r\nfunction paintMap(Map = _variables__WEBPACK_IMPORTED_MODULE_3__.variables.Map) {\r\n    main.innerHTML = \"\";\r\n\r\n    for (let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_3__.variables.mapSize; i++) {\r\n        for (let j = 0; j < _variables__WEBPACK_IMPORTED_MODULE_3__.variables.mapSize; j++) {\r\n            let part = document.createElement('section');\r\n            let img = document.createElement('img');\r\n\r\n            part.classList.add('cell');\r\n            img.classList.add('cell-img');\r\n\r\n            img.src = Map[i][j].Src;\r\n\r\n            part.appendChild(img);\r\n\r\n            main.appendChild(part);\r\n        }\r\n    }\r\n}\r\n\r\nfunction input(event) {\r\n    if (event.key === 'c') {\r\n        (0,_fight__WEBPACK_IMPORTED_MODULE_1__.createFight)(event);\r\n    }\r\n    else {\r\n        (0,_move__WEBPACK_IMPORTED_MODULE_2__.move)(event);\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/main.js?");

/***/ }),

/***/ "./main/src/move.js":
/*!**************************!*\
  !*** ./main/src/move.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"move\": () => /* binding */ move\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main/src/main.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./main/src/variables.js\");\n\r\n\r\n\r\nfunction move(event) {\r\n    switch (event.key) {\r\n        case 'w':\r\n        case 'W':\r\n            if (_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X - 1][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y] !== undefined && _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X - 1][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y].IsWalkable) {\r\n                replace(_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X - 1, _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y);\r\n            }\r\n            break;\r\n        case 'a':\r\n            if (_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y - 1] !== undefined && _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y - 1].IsWalkable) {\r\n                replace(_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X, _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y - 1);\r\n            }\r\n            break;\r\n        case 's':\r\n            if (_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X + 1][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y] !== undefined && _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X + 1][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y].IsWalkable) {\r\n                replace(_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X + 1, _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y);\r\n            }\r\n            break;\r\n        case 'd':\r\n            if (_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y + 1] !== undefined && _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y + 1].IsWalkable) {\r\n                replace(_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X, _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y + 1);\r\n            }\r\n            break;\r\n    } \r\n}\r\n\r\n// replaces a cell with a hero\r\nfunction replace(row, column) { \r\n    let helpCell = _variables__WEBPACK_IMPORTED_MODULE_1__.variables.currentPlace;\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.variables.currentPlace = _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[row][column];\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[row][column] = _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y];\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Map[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.X][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y] = helpCell;\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.variables.X = row;\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Y = column;\r\n\r\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.paintMap)();\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/move.js?");

/***/ }),

/***/ "./main/src/variables.js":
/*!*******************************!*\
  !*** ./main/src/variables.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"variables\": () => /* binding */ variables\n/* harmony export */ });\n/* harmony import */ var _classes_characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/characters */ \"./main/src/classes/characters.js\");\n/* harmony import */ var _classes_nature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/nature */ \"./main/src/classes/nature.js\");\n\r\n\r\n\r\nclass Variables {\r\n    constructor() {\r\n        this.Map = [];\r\n        this.Arena = [];\r\n        this.mapSize = 6;\r\n        this.imgWidth = 320;\r\n        this.Hero = new _classes_characters__WEBPACK_IMPORTED_MODULE_0__.Hero('Hero', 100, 10);\r\n\r\n        // Coordinates of a hero\r\n        this.X = 4;\r\n        this.Y = 3;\r\n\r\n        this.currentPlace = new _classes_nature__WEBPACK_IMPORTED_MODULE_1__.Grass('green grass', 'Grass.png'); // where a hero is staying. It defines what type of ground is under him.\r\n\r\n        for (let i = 0; i < this.mapSize; i++) {\r\n            this.Arena.push([]);\r\n            for (let j = 0; j < this.mapSize; j++) {\r\n                if (i === 2 && j === 4) {\r\n                    this.Arena[i].push(new _classes_characters__WEBPACK_IMPORTED_MODULE_0__.DarkKnight(100));\r\n                    continue;\r\n                }\r\n\r\n                if (i === 2 && j === 1) {\r\n                    this.Arena[i].push(this.Hero);\r\n                    continue;\r\n                }\r\n\r\n                this.Arena[i].push(new _classes_nature__WEBPACK_IMPORTED_MODULE_1__.Grass('Grass', 'Grass.png'));\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nvar variables = new Variables();\n\n//# sourceURL=webpack://final_fantasy/./main/src/variables.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./main/src/main.js");
/******/ })()
;