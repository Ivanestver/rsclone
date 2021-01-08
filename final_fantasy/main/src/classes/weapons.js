const { Object } = require("./object");

class Weapon extends Object {
    constructor(name, src, power) {
        super(name, false, `Weapons/${src}`);
        this.power = power;
    }
}

export class Sword extends Weapon {
    constructor(name, src, power) {
        super(name, src, power);
    }
}