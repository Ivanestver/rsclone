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
export var DiamondSword = new Weapon('Diamond Sword', 20, 50);
export var TitaniumSword = new Weapon('Titanium Sword', 30, 50);

// Axes
export var WoodenAxe = new Weapon('Wooden Axe', 6, 25);
export var IronAxe = new Weapon('Iron Axe', 13, 60);
export var DiamondAxe = new Weapon('Diamond Axe', 18, 42);
export var TitaniumAxe = new Weapon('Titanium Axe', 31, 58);

// Hammers
export var WoodenHammer = new Weapon('Wooden Hammer', 6, 25);
export var IronHammer = new Weapon('Iron Hammer', 13, 60);
export var DiamondHammer = new Weapon('Diamond Hammer', 18, 42);
export var TitaniumHammer = new Weapon('Titanium Hammer', 31, 58);

export var Stick = new Weapon('Stick', 3, 10); // Дубина

export var Mace = new Weapon('Stick', 3, 10); // Булава

export var weapons = [WoodenSword, IronSword, DiamondSword, TitaniumSword,// Swords
                      WoodenAxe, IronAxe, DiamondAxe, TitaniumAxe, // Axes
                      WoodenHammer, IronHammer, DiamondHammer, TitaniumHammer, // Hammers
                      Stick,
                      Mace]; 