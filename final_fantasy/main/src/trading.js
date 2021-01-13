import { Trader, suppliesTrader, weaponsTrader } from "./classes/trader";
import { input } from "./main";
import { variables } from "./variables";
import { Food, Drink, foods, drinks } from './classes/supplies'
import { Weapon, weapons } from "./classes/weapons";
import { armories, Armory } from "./classes/armories";

var trader = suppliesTrader;

export function trading() {
    defineATrader();
    createTrading();
    document.onkeydown = defineCategory;
}

function defineATrader() {
    if (variables.Map[variables.X][variables.Y - 1] instanceof Trader) { // from the left side
        trader = variables.Map[variables.X][variables.Y - 1];
    }
    else if (variables.Map[variables.X - 1][variables.Y] instanceof Trader) { // from above
        trader = variables.Map[variables.X - 1][variables.Y];
    }
    else if (variables.Map[variables.X][variables.Y + 1] instanceof Trader) { // from the right side
        trader = variables.Map[variables.X][variables.Y + 1];
    }
    else if (variables.Map[variables.X + 1][variables.Y] instanceof Trader) { // from below
        trader = variables.Map[variables.X + 1][variables.Y];
    }
}

function createTrading() {
    let wrap = document.createElement('div');
    wrap.id = 'trade';
    wrap.classList.add('menuWrapper');

    let tradeWrap = document.createElement('div');
    tradeWrap.style.width = '70%';
    tradeWrap.style.height = '80%';

    let header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.width = '100%';

    let category = document.createElement('div');
    category.classList.add('appearance');
    category.style.display = 'flex';
    category.style.justifyContent = 'space-evenly';
    category.style.width = '80%';

    let buy = document.createElement('span');
    buy.textContent = 'Buy';
    buy.classList.add('menu-item', 'select');

    let sell = document.createElement('span');
    sell.textContent = 'Sell';
    sell.classList.add('menu-item');

    category.appendChild(buy);
    category.appendChild(sell);

    let coins = document.createElement('div');
    coins.classList.add('appearance', 'menu-item');
    coins.textContent = variables.Hero.money;
    coins.style.width = '20%';
    coins.id = 'coins';

    header.appendChild(category);
    header.appendChild(coins);

    let items = document.createElement('div');
    items.id = 'items';
    items.classList.add('appearance');
    items.style.display = 'flex';
    items.style.flexDirection = 'column';
    items.style.justifyContent = 'space-around';
    items.style.height = '80%';
    items.style.borderRadius = '5%';

    tradeWrap.appendChild(header);
    tradeWrap.appendChild(items);

    wrap.appendChild(tradeWrap);

    document.body.appendChild(wrap);
}

function defineCategory(event) {
    let current = document.getElementsByClassName('select')[0];
    switch (event.key) {
        case 'Escape':
            document.getElementById('trade').remove();
            document.onkeydown = input;
            break;
        case 'Enter':
            current.textContent === 'Buy' ? buy() : sell();
            break;
        case 'a':
        case 'A':
        case 'LeftArrow':
            if (current.textContent === 'Sell') {
                current.parentElement.children[0].classList.add('select');
                current.classList.remove('select');
            }
            break;
        case 'd':
        case 'D':
        case 'RightArrow':
            if (current.textContent === 'Buy') {
                current.parentElement.children[1].classList.add('select');
                current.classList.remove('select');
            }
            break;
    }
}

function buy() {
    let items = trader.getForBuy();

    items.forEach((item, index) => {
        let itemWrap = document.createElement('div');
        itemWrap.style.width = '80%';
        itemWrap.style.display = 'flex';
        itemWrap.style.justifyContent = 'space-evenly';

        if (index === 0) {
            itemWrap.classList.add('select');
        }

        let itemName = document.createElement('span');
        itemName.textContent = item.name;
        itemName.classList.add('menu-item');

        let itemCount = document.createElement('span');
        itemCount.textContent = item.price;
        itemCount.classList.add('menu-item');

        itemWrap.appendChild(itemName);
        itemWrap.appendChild(itemCount);

        document.getElementById('items').appendChild(itemWrap);
    });

    document.onkeydown = moving;
}

function moving(event) {
    let current = document.getElementsByClassName('select')[0];
    switch (event.key) {
        case 'Escape':
            document.getElementById('items').innerHTML = 0;
            document.onkeydown = defineCategory;
            break;
        case 'Enter':
            if (variables.Hero.money <= 0) {
                return;
            }
            for (let i = 0; i < document.getElementById('items').children.length; i++) {
                if (document.getElementById('items').children[i].classList.contains('select')) {
                    defineClass(trader.items[i], document.getElementsByClassName('select')[1].children[0].textContent);
                    break;
                }
            }
            break;
        case 'w':
        case 'W':
        case 'ArrowUp':
            chooseItem();
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            chooseItem(0);
            break;
    }
}

function chooseItem(up = 1) {
    let current = document.getElementsByClassName('select')[1];

    for (let i = 0; i < current.parentElement.children.length; i++) {
        if (current.parentElement.children[i].children[0].textContent === current.children[0].textContent) {
            let number = i + ((-1) ** up);

            if (number === current.parentElement.children.length || number === -1) {
                return;
            }

            current.parentElement.children[number].classList.add('select');
            current.classList.remove('select');
            return;
        }
    }
}

function defineClass(item, name) { // an item belonging to the trader; name of chosen item
    if (item instanceof Food) {
        findItem(foods, name);
    }

    if (item instanceof Drink) {
        findItem(drinks, name);
    }

    if (item instanceof Weapon) {
        findItem(weapons, name);
    }

    if (item instanceof Armory) {
        findItem(armories, name);
    }
}

function findItem(place, name) {
    if (place === undefined || name === '') {
        alert('Place or Name in trading.js is not defined');
        return;
    }

    if (typeof place.forEach === 'function') {
        place.forEach(item => {
            if (item.name === name) {
                item instanceof Weapon ? variables.Hero.inventory.weapons.push(item) : variables.Hero.inventory.armories.push(item);
                variables.Hero.money -= item.price;
                document.getElementById('coins').textContent = variables.Hero.money;
                return;
            }
        });
    }
    else {
        let keys = Object.keys(place);
        for (let i = 0; i < keys.length; i++) {
            let where = place[keys[i]].__proto__.constructor.name === 'Food' ? variables.Hero.inventory.food : variables.Hero.inventory.drinks;
            let heroKeys = Object.keys(where);
            if (place[keys[i]].name === name) { // find an object of the chosen item
                if (heroKeys.indexOf(keys[i]) === -1) {
                    where[heroKeys[heroKeys.indexOf(keys[i])]] = 1;
                }
                else {
                    where[heroKeys[heroKeys.indexOf(keys[i])]] += 1
                }
                variables.Hero.money -= place[keys[i]].price;
                document.getElementById('coins').textContent = variables.Hero.money;
                return;
            }
        }
    }
}

function sell() {
    let array = [variables.Hero.food, variables.Hero.drinks, variables.Hero.weapons, variables.Hero.armories];

    let create = function (place, keys) {
        for (let i = 0; i < keys.length; i++) {
            let itemWrap = document.createElement('div');
            itemWrap.style.width = '80%';
            itemWrap.style.display = 'flex';
            itemWrap.style.justifyContent = 'space-evenly';

            let itemName = document.createElement('span');
            itemName.textContent = place[keys[i]].name;
            itemName.classList.add('menu-item');

            let itemCount = document.createElement('span');
            itemCount.textContent = place[keys[i]].price * (1 - trader.markup);
            itemCount.classList.add('menu-item');

            itemWrap.appendChild(itemName);
            itemWrap.appendChild(itemCount);

            document.getElementById('items').appendChild(itemWrap);
        }
    }

    // set food
    create(foods, Object.keys(variables.Hero.inventory.food));
    document.getElementById('items').children[0].classList.add('select');

    // set drinks
    create(drinks, Object.keys(variables.Hero.inventory.drinks));

    // set weapons
    create(weapons, Object.keys(variables.Hero.inventory.weapons));

    // set armories
    create(armories, Object.keys(variables.Hero.inventory.armories));

    document.onkeydown = moving;
}