class Supply {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

class Food extends Supply {
    constructor(name, value) {
        super(name, value);

        this.apply = function (hero) {
            hero.Hp += this.value;
        }
    }
}

class Drink extends Supply {
    constructor(name, value) {
        super(name, value);

        this.apply = function (hero) {
            hero.mana += this.value;
        }
    }
}

// Food
export var apple = new Food('Apple', 5);
export var banana = new Food('Banana', 5);
export var bread = new Food('Bread', 10);
export var pizza = new Food('Pizza', 15);
export var fish = new Food('Fish', 50);
export var meat = new Food('Meat', 50);

// Drinks
export var cola = new Drink('Coca Cola', 10);
export var juice = new Drink('Juice', 10);
export var beer = new Drink('Pizza', 15);
export var tea = new Drink('Tea', 70);
export var milk = new Drink('Bread', 85);
export var water = new Drink('Water', 100);