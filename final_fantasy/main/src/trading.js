import { Trader } from "./classes/trader";
import { variables } from "./variables";

var trader = null;

export function trading() {
    defineATrader();
    createTrading();
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

    header.appendChild(category);
    header.appendChild(coins);

    let items = document.createElement('div');
    items.classList.add('appearance');
    items.style.display = 'flex';
    items.style.flexDirection = 'column';
    items.style.justifyContent = 'space-around';

    tradeWrap.appendChild(header);
    tradeWrap.appendChild(items);

    wrap.appendChild(tradeWrap);

    document.body.appendChild(wrap);
}