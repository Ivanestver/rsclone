import { Trader } from "./classes/trader";
import { input } from "./main";
import { variables } from "./variables";
import { Food, Drink, foods, drinks } from './classes/supplies'
import { Weapon, weapons } from "./classes/weapons";
import { armories, Armory } from "./classes/armories";
import { audio } from "./classes/audio";

var trader = null;

export function trading(_trader) {
    trader = _trader;
    createTrading();
    document.onkeydown = defineCategory;
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

    let items = document.createElement('table');
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
            audio.Cancel();
            document.getElementById('trade').remove();
            document.onkeydown = input;
            break;
        case 'Enter':
            audio.Choose();
            current.textContent === 'Buy' ? buy() : sell();
            document.onkeydown = moving;
            break;
        case 'a':
        case 'A':
        case 'LeftArrow':
            if (current.textContent === 'Sell') {
                audio.MenuMove();
                current.parentElement.children[0].classList.add('select');
                current.classList.remove('select');
            }
            break;
        case 'd':
        case 'D':
        case 'RightArrow':
            if (current.textContent === 'Buy') {
                audio.MenuMove();
                current.parentElement.children[1].classList.add('select');
                current.classList.remove('select');
            }
            break;
    }
}

function buy() {
    let items = trader.getForBuy();
    document.getElementById('items').style.columnCount = 2;

    items.forEach((item, index) => {
        let itemWrap = document.createElement('tr');
        itemWrap.style.width = '80%';
        itemWrap.style.display = 'flex';
        itemWrap.style.justifyContent = 'space-evenly';

        if (index === 0) {
            itemWrap.classList.add('select');
        }

        let itemName = document.createElement('td');
        itemName.textContent = item.name;
        itemName.classList.add('menu-item');

        let itemCount = document.createElement('td');
        itemCount.textContent = item.price;
        itemCount.classList.add('menu-item');

        itemWrap.appendChild(itemName);
        itemWrap.appendChild(itemCount);

        document.getElementById('items').appendChild(itemWrap);
    });
}

function moving(event) {
    switch (event.key) {
        case 'Escape':
            audio.Cancel();
            document.getElementById('items').innerHTML = 0;
            document.onkeydown = defineCategory;
            break;
        case 'Enter':
            if (document.getElementsByClassName('select')[0].textContent === 'Buy') {
                if (variables.Hero.money <= 0 // if a player doesn't have money
                    || variables.Hero.money - Number.parseInt(document.getElementsByClassName('select')[1].children[1].textContent) < 0) { // or their amount is not enough
                    return;
                }
                for (let i = 0; i < document.getElementById('items').children.length; i++) {
                    if (document.getElementById('items').children[i].classList.contains('select')) {
                        defineClass(trader.items[i], document.getElementsByClassName('select')[1].children[0].textContent);
                        break;
                    }
                }
            }
            else {
                sellItem(document.getElementsByClassName('select')[1]);
            }

            audio.Money();
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
    audio.MenuMove();
    let current = document.getElementsByClassName('select')[1];

    for (let i = 0; i < current.parentElement.children.length; i++) {
        if (current.parentElement.children[i].children[0].textContent === current.children[0].textContent) {
            let number = i + ((-1) ** up);

            if (number === current.parentElement.children.length || number === -1 || current.parentElement.children[number].children[0].textContent === 'Name') {
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
                    where[keys[i]] = 1;
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
    document.getElementById('items').style.columnCount = 3;
    let create = function (place, heroPlace, isWeaponOrArmory = false) {
        let keys = Object.keys(heroPlace);
        for (let i = 0; i < keys.length; i++) {
            let itemWrap = document.createElement('tr');
            //itemWrap.style.width = '80%';
            itemWrap.style.display = 'flex';
            itemWrap.style.justifyContent = 'space-evenly';

            let itemName = document.createElement('td');
            itemName.textContent = place[keys[i]].name;
            itemName.classList.add('menu-item');

            let itemCount = document.createElement('td');
            itemCount.textContent = isWeaponOrArmory ? '1' : heroPlace[keys[i]];
            itemCount.classList.add('menu-item');

            let itemPrice = document.createElement('td');
            itemPrice.textContent = place[keys[i]].price * (1 - trader.markup);
            itemPrice.classList.add('menu-item');

            itemWrap.appendChild(itemName);
            itemWrap.appendChild(itemCount);
            itemWrap.appendChild(itemPrice);

            document.getElementById('items').appendChild(itemWrap);
        }
    }

    // set header of a table
    let itemWrap = document.createElement('tr');
    //itemWrap.style.width = '80%';
    itemWrap.style.display = 'flex';
    itemWrap.style.justifyContent = 'space-evenly';

    let itemName = document.createElement('td');
    itemName.textContent = 'Name';
    itemName.classList.add('menu-item');

    let itemCount = document.createElement('td');
    itemCount.textContent = 'Count';
    itemCount.classList.add('menu-item');

    let itemPrice = document.createElement('td');
    itemPrice.textContent = 'Price';
    itemPrice.classList.add('menu-item');

    itemWrap.appendChild(itemName);
    itemWrap.appendChild(itemCount);
    itemWrap.appendChild(itemPrice);

    document.getElementById('items').appendChild(itemWrap);

    // set food
    create(foods, variables.Hero.inventory.food);
    document.getElementById('items').children[1].classList.add('select');

    // set drinks
    create(drinks, variables.Hero.inventory.drinks);

    // set weapons
    create(weapons, variables.Hero.inventory.weapons, true);

    // set armories
    create(armories, variables.Hero.inventory.armories, true);

    document.onkeydown = moving;
}

function sellItem(item) {
    let categories = [foods, drinks, weapons, armories];
    let Item = null; // what an item we want to sell
    let ItemName = '';
    for (let i = 0; i < categories.length; i++) { // find the Item
        let items = Object.keys(categories[i]).filter(thing => categories[i][thing].name === item.children[0].textContent)[0];
        if (items !== undefined) {
            Item = categories[i][items];
            ItemName = items;
            break;
        }
    }

    variables.Hero.money += Number.parseInt(item.children[2].textContent); // add money to Hero
    document.getElementById('coins').textContent = variables.Hero.money; // and show it

    let removeItemFromInventory = (place, name) => {
        place[name] -= 1;
        if (place[name] === 0) {
            delete place[name];
        }
    };

    if (Item instanceof Food) {
        removeItemFromInventory(variables.Hero.inventory.food, ItemName);
    }

    if (Item instanceof Drink) {
        removeItemFromInventory(variables.Hero.inventory.drinks, ItemName);
    }

    if (Item instanceof Weapon) {
        removeItemFromInventory(variables.Hero.inventory.weapons, ItemName);
    }

    if (Item instanceof Armory) {
        removeItemFromInventory(variables.Hero.inventory.armories, ItemName);
    }

    document.getElementById('items').innerHTML = '';

    sell();

    audio.Money();
}