const { Object } = require("./object");

export class Weapon extends Object {
    constructor(name, power, price) {
        super(name, false, `Weapons/${''}`);
        this.power = power;
        this.price = price;
    }
}

// Swords
var WoodenSword = new Weapon('Simple Sword', 5, 20);
var IronSword = new Weapon('Wooden Sword', 12, 50);

// Axes
var WoodenAxe = new Weapon('Wooden Axe', 6, 25);
var 