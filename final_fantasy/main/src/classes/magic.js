class Magic {
    constructor(name, power, mana) {
        this.name = name;
        this.power = power;
        this.mana = mana;
    }
}

export var cure = new Magic('Medics may cry', 33, 5); // restores 33 HP to a hero
export var lightning = new Magic('God of lightning', 20, 5); // attack with a lightning
export var fire = new Magic('Final Fire', 20, 7); // attack with fire
export var freezing = new Magic('Dismobilized', 0, 10); // freezes an enemy
export var powerman = new Magic('PowerMan', 20, 15); // improves the power of a hero
export var getMP = new Magic('The Magic Scrolls', 30, 5); // restores 30 MP (mana points) to a hero