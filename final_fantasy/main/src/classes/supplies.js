class Supply {
    constructor(name, value, price) {
        this.name = name;
        this.value = value;
        this.price = price;
    }
}

export class Food extends Supply {
    constructor(name, value, price) {
        super(name, value, price);

        this.apply = function (hero) {
            hero.hp += this.value;
        }
    }
}

export class Drink extends Supply {
    constructor(name, value, price) {
        super(name, value, price);

        this.apply = function (hero) {
            hero.mana += this.value;
        }
    }
}

// Food
var apple = new Food('Apple', 5, 10);
var banana = new Food('Banana', 5, 10);
var bread = new Food('Bread', 10, 25);
var pizza = new Food('Pizza', 15, 30);
var fish = new Food('Fish', 50, 100);
var meat = new Food('Meat', 50, 100);

export var foods = {
    apple: apple,
    banana: banana,
    bread: bread,
    pizza: pizza,
    fish: fish,
    meat: meat
}

// Drinks
var cola = new Drink('Coca Cola', 10, 10);
var juice = new Drink('Juice', 10, 10);
var beer = new Drink('Pizza', 15, 20);
var tea = new Drink('Tea', 70, 50);
var milk = new Drink('Bread', 85, 70);
var water = new Drink('Water', 100, 150);

export var drinks = {
    cola: cola,
    juice: juice,
    beer: beer,
    tea: tea,
    milk: milk,
    water: water
}