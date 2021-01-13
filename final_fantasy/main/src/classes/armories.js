const { Object } = require("./object");

export class Armory extends Object {
    constructor(name, src, defence, price) {
        super(name, false, `Armories/${src}`);
        this.defence = defence;
        this.price = price;
    }
}

export var leatherArmory = new Armory('Leather Armory', 15, 50);
export var clothes = new Armory('Simple Clothes', 5, 20);

export var armories = [leatherArmory, clothes];