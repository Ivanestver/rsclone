export class Trader {
    constructor(name, ...items, markup) {
        this.name = name;
        this.markup = markup < 1 ? markup : (markup % 10) * 0.1;
        this.items = [];

        items.forEach(item => {
            this.items.push(item);
        });

        this.getForBuy = function () {
            return this.items.map(item => item.price * (1 + this.markup))
        }

        this.getForSell = function () {
            return this.items.map(item => item.price * (1 - this.markup));
        }
    }
}