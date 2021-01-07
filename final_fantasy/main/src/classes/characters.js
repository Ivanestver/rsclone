import { Armory } from "./armories";
import { cure, fire, freezing, lightning, powerman, getMP } from "./magic";
import { Object } from "./object";
import { apple, bread, cola, meat, tea, water } from "./supplies";
import { Sword } from "./weapons";

export class Character extends Object {
    constructor(name, isWalkable, src, hp, power, isEnemy, money, xp) {
        super(name, isWalkable, `Characters/${src}`);
        this.hp = hp;
        this.power = power;
        this.isEnemy = isEnemy;
        this.money = money;
        this.xp = xp;
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
    constructor(name, hp, power, mana) {
        super(name, true, 'Hero.png', hp, power, false, 0, 0);

        this.inventory = {
            weapon: new Sword('Simple Sword', 'SimpleSword.png', 5),
            armory: new Armory('Leather armory', 'LeatherArmory.png', 5),
            food: [apple, bread, meat],
            drinks: [water, tea, cola]
        }

        this.magic = [cure, lightning, fire, freezing, powerman, getMP];

        this.mana = mana;
    }

    get Hp() {
        return this.hp + this.inventory.armory.defence;
    }

    set Hp(value) {
        this.hp = value;
    }

    get Power() {
        return this.inventory.weapon.power;
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
    constructor(hp, money, xp) {
        super('Dark Knight', false, 'DarkKnight.png', hp, 10, true, money, xp);
    }
}