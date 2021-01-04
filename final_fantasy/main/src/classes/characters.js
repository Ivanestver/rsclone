import { Object } from "./object";

export class Character extends Object {
    constructor(name, isWalkable, src, hp, power, isEnemy) {
        super(name, isWalkable, `Characters/${src}`);
        this.hp = hp;
        this.power = power;
        this.isEnemy = isEnemy;
    }

    get Hp() {
        return this.hp;
    }
    set Hp(value) {
        this.hp = value;
    }

    get Power() {
        return this.power;
    }
    set Power(value) {
        this.power = value;
    }

    get IsEnemy() {
        return this.isEnemy;
    }
    set IsEnemy(value) {
        this.isEnemy = value;
    }
}

export class Hero extends Character {
    constructor(name, hp, power) {
        super(name, true, 'Hero.png', hp, power, false);
    }
}

export class Villager extends Character {
    constructor(name, src, hp) {
        super(name, true, src, hp, 0, false);
    }
}