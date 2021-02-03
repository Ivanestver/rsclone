const { Object } = require("./object");

export class Weapon extends Object {
    constructor(name, power, price) {
        super(name, false, `Weapons/${''}`);
        this.power = power;
        this.price = price;
    }
}

// Swords
export var WoodenSword = new Weapon('Wooden Sword', 5, 70);
export var IronSword = new Weapon('Iron Sword', 12, 145);
export var DiamondSword = new Weapon('Diamond Sword', 20, 480);
export var TitaniumSword = new Weapon('Titanium Sword', 30, 2315);

// Axes
export var WoodenAxe = new Weapon('Wooden Axe', 6, 75);
export var IronAxe = new Weapon('Iron Axe', 13, 150);
export var DiamondAxe = new Weapon('Diamond Axe', 18, 468);
export var TitaniumAxe = new Weapon('Titanium Axe', 31, 2320);

// Hammers
export var WoodenHammer = new Weapon('Wooden Hammer', 4, 50);
export var IronHammer = new Weapon('Iron Hammer', 14, 78);
export var DiamondHammer = new Weapon('Diamond Hammer', 21, 500);
export var TitaniumHammer = new Weapon('Titanium Hammer', 29, 2310);

export var Stick = new Weapon('Stick', 3, 10); // Дубина

export var Mace = new Weapon('Stick', 3, 10); // Булава

export var weapons = [WoodenSword, IronSword, DiamondSword, TitaniumSword,// Swords
                      WoodenAxe, IronAxe, DiamondAxe, TitaniumAxe, // Axes
                      WoodenHammer, IronHammer, DiamondHammer, TitaniumHammer, // Hammers
                      Stick,
                      Mace]; 