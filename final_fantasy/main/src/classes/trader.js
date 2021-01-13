import { drinks, foods } from './supplies';
import { weapons } from './weapons'; 

export class Trader {
    constructor(name, markup, ...items) {
        this.name = name;
        this.markup = markup < 1 ? markup : (markup % 10) * 0.1;
        this.items = [];

        items[0].forEach(item => {
            this.items.push(item);
        });

        this.getForBuy = function () {
            return this.items.map(item => {
                return {
                    name: item.name,
                    price: item.price * (1 + this.markup)
                }
            });
        }

        this.getForSell = function () {
            return this.items.map(item => item.price * (1 - this.markup));
        }
    }
}

export var suppliesTrader = new Trader('Supplies', 0.2, [foods['apple'], foods['banana'], drinks['cola']]);
export var weaponsTrader = new Trader("Weapons", 0.2, weapons);