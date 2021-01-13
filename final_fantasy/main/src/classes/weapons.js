const { Object } = require("./object");

export class Weapon extends Object {
    constructor(name, power, price) {
        super(name, false, `Weapons/${''}`);
        this.power = power;
        this.price = price;
    }
}

// Swords
export var WoodenSword = new Weapon('Wooden Sword', 5, 20);
export var IronSword = new Weapon('Iron Sword', 12, 50);

// Axes
export var WoodenAxe = new Weapon('Wooden Axe', 6, 25);
export var IronAxe = new Weapon('Iron Axe', 13, 60);

export var weapons = [WoodenSword, IronSword, // Swords
                      WoodenAxe, IronAxe]; // Axes