import { Armory } from "./armories";
import { levels } from "./level";
import { cure, fire, freezing, lightning, powerman, getMP, magics } from "./magic";
import { Object } from "./object";
import { Weapon } from "./weapons";

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
    
    constructor(...options) {
        if (options.length > 1) {
            super(options[0], true, options[4], options[1], options[2], false, 0, 0);
        }
        else {
            super(options[0].name, true, options[0].src, options[0].hp, options[0].power, false, options[0].money, options[0].xp);
        }

        if (options.length > 1) {
            this.inventory = {
                weapon: new Weapon('Simple Sword', 'SimpleSword.png', 5),
                armory: new Armory('Leather armory', 'LeatherArmory.png', 5),
                food: {
                    apple: 1,
                    bread: 1,
                    meat: 1
                },
                drinks: {
                    water: 1,
                    tea: 1,
                    cola: 1
                }
            }

            this.addPower = 0;

            this.magic = [cure, lightning, fire, freezing, powerman, getMP];

            this.mana = options[3];

            this.level = 1;

            this.maxHp = levels[1].maxHp;
            this.maxMp = levels[1].maxMp;
        }
        else {
            this.inventory = options[0].inventory;

            this.addPower = options[0].addPower;

            this.magic = [];
            options[0].magic.forEach(magic => {
                for (let i = 0; i < magics.length; i++) {
                    if (magic.name === magics[i].name) {
                        this.magic.push(magics[i]);
                    }
                }
            });

            this.mana = options[0].mana;

            this.level = options[0].level;

            this.maxHp = levels[this.level].maxHp;
            this.maxMp = levels[this.level].maxMp;
        }
    }

    get Name() {
        return this.name;
    }

    set Name(value) {
        this.name = value;
    }

    get Hp() {
        return this.hp + this.inventory.armory.defence;
    }

    set Hp(value) {
        this.hp = value;
    }

    get Power() {
        return this.power + this.inventory.weapon.power + this.addPower;
    }

    get Defence() {
        return this.inventory.armory.defence;
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