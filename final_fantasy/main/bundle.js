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

/***/ "./main/src/classes/armories.js":
/*!**************************************!*\
  !*** ./main/src/classes/armories.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Armory\": () => /* binding */ Armory\n/* harmony export */ });\nconst { Object } = __webpack_require__(/*! ./object */ \"./main/src/classes/object.js\");\r\n\r\nclass Armory extends Object {\r\n    constructor(name, src, defence) {\r\n        super(name, false, `Armories/${src}`);\r\n        this.defence = defence;\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/classes/armories.js?");

/***/ }),

/***/ "./main/src/classes/characters.js":
/*!****************************************!*\
  !*** ./main/src/classes/characters.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Character\": () => /* binding */ Character,\n/* harmony export */   \"Hero\": () => /* binding */ Hero,\n/* harmony export */   \"Villager\": () => /* binding */ Villager,\n/* harmony export */   \"DarkKnight\": () => /* binding */ DarkKnight\n/* harmony export */ });\n/* harmony import */ var _armories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./armories */ \"./main/src/classes/armories.js\");\n/* harmony import */ var _magic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./magic */ \"./main/src/classes/magic.js\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object */ \"./main/src/classes/object.js\");\n/* harmony import */ var _weapons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weapons */ \"./main/src/classes/weapons.js\");\n\r\n\r\n\r\n\r\n\r\nclass Character extends _object__WEBPACK_IMPORTED_MODULE_2__.Object {\r\n    constructor(name, isWalkable, src, hp, power, isEnemy) {\r\n        super(name, isWalkable, `Characters/${src}`);\r\n        this.hp = hp;\r\n        this.power = power;\r\n        this.isEnemy = isEnemy;\r\n    }\r\n\r\n    get Hp() {\r\n        return this.hp;\r\n    }\r\n    set Hp(value) {\r\n        this.hp = value;\r\n    }\r\n\r\n    get Power() {\r\n        return this.power;\r\n    }\r\n    set Power(value) {\r\n        this.power = value;\r\n    }\r\n\r\n    get IsEnemy() {\r\n        return this.isEnemy;\r\n    }\r\n    set IsEnemy(value) {\r\n        this.isEnemy = value;\r\n    }\r\n}\r\n\r\nclass Hero extends Character {\r\n    constructor(name, hp, power, mana) {\r\n        super(name, true, 'Hero.png', hp, power, false);\r\n\r\n        this.inventory = {\r\n            weapon: new _weapons__WEBPACK_IMPORTED_MODULE_3__.Sword('Simple Sword', 'SimpleSword.png', 5),\r\n            armory: new _armories__WEBPACK_IMPORTED_MODULE_0__.Armory('Leather armory', 'LeatherArmory.png', 5)\r\n        }\r\n\r\n        this.magic = [_magic__WEBPACK_IMPORTED_MODULE_1__.cure, _magic__WEBPACK_IMPORTED_MODULE_1__.lightning, _magic__WEBPACK_IMPORTED_MODULE_1__.fire, _magic__WEBPACK_IMPORTED_MODULE_1__.freezing, _magic__WEBPACK_IMPORTED_MODULE_1__.powerman, _magic__WEBPACK_IMPORTED_MODULE_1__.getMP];\r\n\r\n        this.mana = mana;\r\n    }\r\n\r\n    get Hp() {\r\n        return this.hp + this.inventory.armory.defence;\r\n    }\r\n\r\n    set Hp(value) {\r\n        this.hp = value;\r\n    }\r\n\r\n    get Power() {\r\n        return this.inventory.weapon.power;\r\n    }\r\n\r\n    copy(obj) {\r\n        obj = new Hero();\r\n        obj.Name = this.Name;\r\n        obj.IsWalkable = this.IsWalkable;\r\n        obj.Src = this.Src;\r\n        obj.Hp = this.Hp;\r\n        obj.IsEnemy = this.IsEnemy;\r\n    }\r\n}\r\n\r\nclass Villager extends Character {\r\n    constructor(name, src, hp) {\r\n        super(name, true, src, hp, 0, false);\r\n    }\r\n\r\n    copy(obj) {\r\n        obj = new Hero();\r\n        obj.Name = this.Name;\r\n        obj.IsWalkable = this.IsWalkable;\r\n        obj.Src = this.Src;\r\n        obj.Hp = this.Hp;\r\n        obj.IsEnemy = this.IsEnemy;\r\n    }\r\n}\r\n\r\nclass DarkKnight extends Character {\r\n    constructor(hp) {\r\n        super('Dark Knight', false, 'DarkKnight.png', hp, 10, true);\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/classes/characters.js?");

/***/ }),

/***/ "./main/src/classes/magic.js":
/*!***********************************!*\
  !*** ./main/src/classes/magic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Magic\": () => /* binding */ Magic,\n/* harmony export */   \"SkillMagic\": () => /* binding */ SkillMagic,\n/* harmony export */   \"cure\": () => /* binding */ cure,\n/* harmony export */   \"lightning\": () => /* binding */ lightning,\n/* harmony export */   \"fire\": () => /* binding */ fire,\n/* harmony export */   \"freezing\": () => /* binding */ freezing,\n/* harmony export */   \"powerman\": () => /* binding */ powerman,\n/* harmony export */   \"getMP\": () => /* binding */ getMP\n/* harmony export */ });\nclass Magic {\r\n    constructor(name, power, mana) {\r\n        this.name = name;\r\n        this.power = power;\r\n        this.mana = mana;\r\n\r\n        // if a magic is not for attacking, override this function\r\n        this.apply = function (AttackFunc, hero) {\r\n            AttackFunc(this.power);\r\n            hero.mana -= this.mana;\r\n        }\r\n    }\r\n}\r\n\r\nclass SkillMagic extends Magic {\r\n    constructor(name, power, mana, apply) {\r\n        super(name, power, mana);\r\n        this.apply = apply;\r\n    }\r\n}\r\n\r\nvar cure = new SkillMagic('Medics may cry', 33, 5, function(hero) {\r\n    hero.Hp += this.power;\r\n    hero.mana -= this.mana;\r\n}); // restores 33 HP to a hero\r\nvar lightning = new Magic('God of lightning', 20, 5); // attack with a lightning\r\nvar fire = new Magic('Final Fire', 20, 7); // attack with fire\r\nvar freezing = new Magic('Dismobilized', 0, 10); // freezes an enemy\r\nvar powerman = new SkillMagic('PowerMan', 20, 15, function(hero) {\r\n    hero.power += this.power;\r\n    hero.mana -= this.mana;\r\n}); // improves the power of a hero\r\nvar getMP = new SkillMagic('The Magic Scrolls', 30, 5, function(hero) {\r\n    hero.mana += this.power;\r\n    hero.mana -= this.mana;\r\n}); // restores 30 MP (mana points) to a hero\n\n//# sourceURL=webpack://final_fantasy/./main/src/classes/magic.js?");

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

/***/ "./main/src/classes/weapons.js":
/*!*************************************!*\
  !*** ./main/src/classes/weapons.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sword\": () => /* binding */ Sword\n/* harmony export */ });\nconst { Object } = __webpack_require__(/*! ./object */ \"./main/src/classes/object.js\");\r\n\r\nclass Weapon extends Object {\r\n    constructor(name, src, power) {\r\n        super(name, false, `Weapons/${src}`);\r\n        this.power = power;\r\n    }\r\n}\r\n\r\nclass Sword extends Weapon {\r\n    constructor(name, src, power) {\r\n        super(name, src, power);\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/classes/weapons.js?");

/***/ }),

/***/ "./main/src/fight.js":
/*!***************************!*\
  !*** ./main/src/fight.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFight\": () => /* binding */ createFight\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main/src/main.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./main/src/variables.js\");\n/* harmony import */ var _classes_magic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/magic */ \"./main/src/classes/magic.js\");\n\r\n\r\n\r\n\r\nvar main = document.getElementsByClassName('main')[0];\r\nvar heroHealth;\r\nvar heroMP;\r\nvar enemyHealth;\r\nvar canBeContinued = true;  // for delaying after attacking\r\nvar isPlayerAttacking = true;\r\nvar textTurn;\r\n\r\nfunction createFight(event) {\r\n    main.innerHTML = \"\";\r\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.paintMap)(_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Arena);\r\n    createHUD();\r\n    assignActions();\r\n}\r\n\r\nfunction createHUD() {\r\n    // who's turn\r\n    let turns = document.createElement('div');\r\n    turns.classList.add('turns');\r\n    turns.classList.add('appearance');\r\n\r\n    textTurn = document.createElement('span');\r\n    textTurn.classList.add('text');\r\n    textTurn.textContent = 'Your Turn!';\r\n    turns.appendChild(textTurn);\r\n\r\n    main.appendChild(turns);\r\n\r\n    // player's actions\r\n    let actions = document.createElement('div');\r\n    actions.classList.add('actions');\r\n    actions.classList.add('appearance');\r\n\r\n    let attack = document.createElement('span');\r\n    attack.classList.add('text');\r\n    attack.classList.add('select');\r\n    attack.style.fontSize = '2rem';\r\n    attack.textContent = 'Attack';\r\n\r\n    let magic = document.createElement('span');\r\n    magic.classList.add('text');\r\n    magic.textContent = 'Magic';\r\n    magic.style.fontSize = '2rem';\r\n\r\n    let help = document.createElement('span');\r\n    help.classList.add('text');\r\n    help.textContent = 'Help';\r\n    help.style.fontSize = '2rem';\r\n\r\n    let skip = document.createElement('span');\r\n    skip.classList.add('text');\r\n    skip.textContent = 'Skip turn';\r\n    skip.style.fontSize = '2rem';\r\n\r\n    actions.appendChild(attack);\r\n    actions.appendChild(magic);\r\n    actions.appendChild(help);\r\n    actions.appendChild(skip);\r\n\r\n    main.appendChild(actions);\r\n\r\n    // health \r\n    let panel = document.createElement('div');\r\n    panel.classList.add('healthWrapper');\r\n    panel.classList.add('appearance');\r\n\r\n    let hero = document.createElement('div');\r\n    hero.classList.add('hero');\r\n\r\n    heroHealth = document.createElement('span');\r\n    heroHealth.classList.add('text');\r\n    heroHealth.textContent = `Your HP: ${_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.Hp}`;\r\n\r\n    heroMP = document.createElement('span');\r\n    heroMP.classList.add('text');\r\n    heroMP.textContent = `Your MP: ${_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.mana}`;\r\n\r\n    hero.appendChild(heroHealth);\r\n    hero.appendChild(heroMP);\r\n\r\n    enemyHealth = document.createElement('span');\r\n    enemyHealth.classList.add('text');\r\n    enemyHealth.textContent = `Enemy: ${_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Arena[2][4].Hp}`;\r\n\r\n    panel.appendChild(hero);\r\n    panel.appendChild(enemyHealth);\r\n\r\n    main.appendChild(panel);\r\n}\r\n\r\nfunction assignActions() {\r\n    document.onkeydown = keyPressHandler;\r\n}\r\n\r\nfunction keyPressHandler(event, numberElement = 0) {\r\n    if (!canBeContinued) {\r\n        return;\r\n    }\r\n\r\n    if (event.key === 'Escape') {\r\n        if (document.getElementsByClassName('select').length === 2) {\r\n            document.getElementById('magic').remove();\r\n            document.onkeydown = keyPressHandler;\r\n            return;\r\n        }\r\n    }\r\n\r\n    let current = document.getElementsByClassName('select')[numberElement];\r\n\r\n    if (event.key === 'Enter') {\r\n        Enter(current.textContent);\r\n    }\r\n\r\n    let parent = current.parentElement;\r\n    current.classList.remove('select');\r\n\r\n    let node = 0;\r\n\r\n    for (let i = 0; i < parent.children.length; i++) {\r\n        if (parent.children[i].textContent === current.textContent) {\r\n            switch (event.key) {\r\n                case 'w':\r\n                case 'W':\r\n                    if (i != 0) {\r\n                        node = i - 1;\r\n                    }\r\n                    break;\r\n                case 's':\r\n                case 'S':\r\n                    if (i != parent.children.length - 1) {\r\n                        node = i + 1;\r\n                    }\r\n                    break;\r\n            }\r\n            break;\r\n        }\r\n    }\r\n\r\n    parent.children[node].classList.add('select');\r\n}\r\n\r\nfunction Enter(option) {\r\n    if (document.getElementsByClassName('select').length === 1) {\r\n        switch (option) {\r\n            case 'Attack':\r\n                Attack(_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.Power);\r\n                break;\r\n            case 'Magic':\r\n                ApplyMagic();\r\n                break;\r\n            case 'Help':\r\n                break;\r\n            case 'Skip turn':\r\n                setTimeout(() => {\r\n                    canBeContinued = true;\r\n                    EnemyAttack();\r\n                }, 1500);\r\n                break;\r\n        }\r\n    }\r\n    else {\r\n        _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.magic.forEach(magic => {\r\n            if (magic.name === option) {\r\n                document.getElementById('magic').remove();\r\n                defineMagic(magic);\r\n                document.onkeydown = keyPressHandler;\r\n                setTimeout(() => {\r\n                    canBeContinued = true;\r\n                    EnemyAttack();\r\n                }, 1500);\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nfunction Attack(power) {\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Arena[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.enemyCoordinates.x][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.enemyCoordinates.y].Hp -= power;\r\n    enemyHealth.textContent = 'Enemy: ' + _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Arena[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.enemyCoordinates.x][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.enemyCoordinates.y].Hp;\r\n    textTurn.textContent = \"Enemy's turn!\";\r\n    canBeContinued = false;\r\n    setTimeout(() => {\r\n        canBeContinued = true;\r\n        EnemyAttack();\r\n    }, 1500);\r\n}\r\n\r\nfunction EnemyAttack() {\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.Hp -= _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Arena[_variables__WEBPACK_IMPORTED_MODULE_1__.variables.enemyCoordinates.x][_variables__WEBPACK_IMPORTED_MODULE_1__.variables.enemyCoordinates.y].Power;\r\n    heroHealth.textContent = 'Your HP: ' + _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.Hp;\r\n    textTurn.textContent = 'Your turn!';\r\n}\r\n\r\nfunction ApplyMagic() {\r\n    let magicDiv = document.createElement('div');\r\n    magicDiv.classList.add('magic');\r\n    magicDiv.classList.add('appearance');\r\n\r\n    for (let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.magic.length; i++) {\r\n        let magic = document.createElement('span');\r\n        magic.style.fontSize = '1.5rem';\r\n        magic.style.color = '#fff';\r\n        magic.style.paddingLeft = '15%';\r\n        magic.textContent = _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.magic[i].name;\r\n        magicDiv.appendChild(magic);\r\n    }\r\n    magicDiv.children[0].classList.add('select');\r\n    magicDiv.id = 'magic';\r\n    main.appendChild(magicDiv);\r\n\r\n    document.onkeydown = (event) => { keyPressHandler(event, 1); };\r\n}\r\n\r\nfunction defineMagic(magic) {\r\n    if (magic.__proto__.constructor.name === 'Magic') {\r\n        magic.apply(Attack, _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero);\r\n        heroMP.textContent = 'Your MP: ' + _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.mana;\r\n    }\r\n    else if (magic.__proto__.constructor.name === 'SkillMagic') {\r\n        magic.apply(_variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero);\r\n        heroHealth.textContent = 'Your HP: ' + _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.Hp;\r\n        heroMP.textContent = 'Your MP: ' + _variables__WEBPACK_IMPORTED_MODULE_1__.variables.Hero.mana;\r\n    }\r\n}\n\n//# sourceURL=webpack://final_fantasy/./main/src/fight.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"variables\": () => /* binding */ variables\n/* harmony export */ });\n/* harmony import */ var _classes_characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/characters */ \"./main/src/classes/characters.js\");\n/* harmony import */ var _classes_nature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/nature */ \"./main/src/classes/nature.js\");\n\r\n\r\n\r\nclass Variables {\r\n    constructor() {\r\n        this.Map = [];\r\n        this.Arena = [];\r\n        this.mapSize = 6;\r\n        this.imgWidth = 320;\r\n        this.Hero = new _classes_characters__WEBPACK_IMPORTED_MODULE_0__.Hero('Hero', 100, 10, 100);\r\n\r\n        // Coordinates of a hero\r\n        this.X = 4;\r\n        this.Y = 3;\r\n        this.enemyCoordinates = { x: 2, y: 4 };\r\n\r\n        this.currentPlace = new _classes_nature__WEBPACK_IMPORTED_MODULE_1__.Grass('green grass', 'Grass.png'); // where a hero is staying. It defines what type of ground is under him.\r\n\r\n        for (let i = 0; i < this.mapSize; i++) {\r\n            this.Arena.push([]);\r\n            for (let j = 0; j < this.mapSize; j++) {\r\n                if (i === 2 && j === 4) {\r\n                    this.Arena[i].push(new _classes_characters__WEBPACK_IMPORTED_MODULE_0__.DarkKnight(100));\r\n                    continue;\r\n                }\r\n\r\n                if (i === 2 && j === 1) {\r\n                    this.Arena[i].push(this.Hero);\r\n                    continue;\r\n                }\r\n\r\n                this.Arena[i].push(new _classes_nature__WEBPACK_IMPORTED_MODULE_1__.Grass('Grass', 'Grass.png'));\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nvar variables = new Variables();\n\n//# sourceURL=webpack://final_fantasy/./main/src/variables.js?");

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