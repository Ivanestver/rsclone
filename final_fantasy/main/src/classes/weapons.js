const { Object } = require("./object");

export class Weapon extends Object {
    constructor(name, src, power) {
        super(name, false, `Weapons/${src}`);
        this.power = power;
    }
}