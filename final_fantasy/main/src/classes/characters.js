import { Clothes, LeatherArmory } from "./armories";
import { levels } from "./level";
import { cure, fire, freezing, lightning, powerman, getMP, magics } from "./magic";
import { Object } from "./object";
//import { Task, TaskProgress } from "./task";
import { IronAxe, Stick, Weapon, WoodenSword } from "./weapons";

export class Character extends Object {
    constructor(name, isWalkable, src, hp, power, isEnemy, money, xp, dialogFlow) {
        super(name, isWalkable, `Characters/${src}`);
        this.hp = hp;
        this.power = power;
        this.isEnemy = isEnemy;
        this.money = money;
        this.xp = xp;

        this.dialogFlow = dialogFlow; // it is a function for dialog. It defines all logic of it
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
        if (options.length > 2) {
            super(options[0], true, options[4], options[1], options[2], false, 0, 0);
        }
        else {
            super(options[0].name, true, options[0].src, options[0].hp, options[0].power, false, options[0].money, options[0].xp);
        }

        if (options.length > 2) {
            this.inventory = {
                weapon: WoodenSword,
                armory: Clothes,
                food: {
                    apple: 1,
                    bread: 1,
                    meat: 1
                },
                drinks: {
                    water: 1,
                    tea: 1,
                    cola: 1
                },
                weapons: [IronAxe, Stick],
                armories: [LeatherArmory]
            }

            this.addPower = 0;

            this.magic = [cure, lightning, fire, freezing, powerman, getMP];

            this.mana = options[3];

            this.level = 1;

            this.maxHp = levels[1].maxHp;
            this.maxMp = levels[1].maxMp;

            this.task = null;
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

            this.task = options[0].task;

            this.task.check = null;
            this.task.add = null;
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
        if (value < this.hp) {
            this.hp = value;
        }
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

export class Enemy extends Character {
    constructor(name, src, hp, money, xp, power) {
        super(name, false, src, hp, power, true, money, xp);
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