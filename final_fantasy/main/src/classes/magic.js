export class Magic {
    constructor(name, power, mana) {
        this.name = name;
        this.power = power;
        this.mana = mana;

        // if a magic is not for attacking, override this function
        this.apply = function (AttackFunc, hero) {
            AttackFunc(this.power);
            hero.mana -= this.mana;
        }
    }
}

export class SkillMagic extends Magic {
    constructor(name, power, mana, apply) {
        super(name, power, mana);
        this.apply = apply;
    }
}

export var cure = new SkillMagic('Medics may cry', 33, 5, function(hero) {
    hero.Hp += this.power;
    hero.mana -= this.mana;
}); // restores 33 HP to a hero
export var lightning = new Magic('God of lightning', 20, 5); // attack with a lightning
export var fire = new Magic('Final Fire', 20, 7); // attack with fire
export var freezing = new Magic('Dismobilized', 0, 10); // freezes an enemy
export var powerman = new SkillMagic('PowerMan', 20, 15, function(hero) {
    hero.addPower += this.power;
    hero.mana -= this.mana;
}); // improves the power of a hero
export var getMP = new SkillMagic('The Magic Scrolls', 30, 5, function(hero) {
    hero.mana += this.power;
    hero.mana -= this.mana;
}); // restores 30 MP (mana points) to a hero

export var magics = [cure, lightning, fire, freezing, powerman, getMP];