const { Object } = require("./object");

export class Armory extends Object {
    constructor(name, src, defence) {
        super(name, false, `Armories/${src}`);
        this.defence = defence;
    }
}