const { Object } = require("./object");

export class Armory extends Object {
    constructor(name, defence, price) {
        super(name, false, `Armories/''`);
        this.defence = defence;
        this.price = price;
    }
}

export var Clothes = new Armory('Simple Clothes', 5, 20);
export var LeatherArmory = new Armory('Leather Armor',  15, 50);
export var BoneArmor = new Armory('Bone Armor',  15, 50);
export var Corselet = new Armory('Corselet',  15, 50);
export var Cuirass = new Armory('Cuirass',  15, 50);
export var DarkArmor = new Armory('Dark Armor',  15, 50);
export var ChaosArmor = new Armory('Chaos Armor',  15, 50);
export var IronManArmor = new Armory('Iron Man Armor',  15, 50);

export var armories = [Clothes, LeatherArmory, BoneArmor, Corselet, Cuirass, DarkArmor, ChaosArmor, IronManArmor];