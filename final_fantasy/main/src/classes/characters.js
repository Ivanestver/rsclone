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

    copy(obj) {
        obj = new Hero();
        obj.Name = this.Name;
        obj.IsWalkable = this.IsWalkable;
        obj.Src = this.Src;
        obj.Hp = this.Hp;
        obj.IsEnemy = this.IsEnemy;
    }
}

export class Villager extends Character {
    constructor(name, src, hp) {
        super(name, true, src, hp, 0, false);
    }

    copy(obj) {
        obj = new Hero();
        obj.Name = this.Name;
        obj.IsWalkable = this.IsWalkable;
        obj.Src = this.Src;
        obj.Hp = this.Hp;
        obj.IsEnemy = this.IsEnemy;
    }
}

export class DarkKnight extends Character {
    constructor(hp) {
        super('Dark Knight', false, 'DarkKnight.png', hp, 10, true);
    }
}