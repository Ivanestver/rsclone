const { Object } = require("./object");

export class Armory extends Object {
    constructor(name, defence, price) {
        super(name, false, `Armories/''`);
        this.defence = defence;
        this.price = price;
    }
}

export var Clothes = new Armory('Simple Clothes', 5, 80);
export var LeatherArmory = new Armory('Leather Armor',  12, 165);
export var BoneArmor = new Armory('Bone Armor',  15, 180);
export var Corselet = new Armory('Corselet',  17, 220);
export var Cuirass = new Armory('Cuirass',  20, 250);
export var DarkArmor = new Armory('Dark Armor',  30, 700);
export var ChaosArmor = new Armory('Chaos Armor',  40, 1300);
export var IronManArmor = new Armory('Iron Man Armor',  50, 2500);

export var armories = [Clothes, LeatherArmory, BoneArmor, Corselet, Cuirass, DarkArmor, ChaosArmor, IronManArmor];