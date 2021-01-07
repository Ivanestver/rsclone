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
var apple = new Food('Apple', 5);
var banana = new Food('Banana', 5);
var bread = new Food('Bread', 10);
var pizza = new Food('Pizza', 15);
var fish = new Food('Fish', 50);
var meat = new Food('Meat', 50);

export var foods = {
    apple: apple,
    banana: banana,
    bread: bread,
    pizza: pizza,
    fish: fish,
    meat: meat
}

// Drinks
var cola = new Drink('Coca Cola', 10);
var juice = new Drink('Juice', 10);
var beer = new Drink('Pizza', 15);
var tea = new Drink('Tea', 70);
var milk = new Drink('Bread', 85);
var water = new Drink('Water', 100);

export var drinks = {
    cola: cola,
    juice: juice,
    beer: beer,
    tea: tea,
    milk: milk,
    water: water
}