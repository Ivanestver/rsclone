import { drinks, foods } from "./classes/supplies";
import { pauseMenu } from "./PauseMenu";
import { variables } from "./variables";

export function inventory() {
    createInventory();
    document.onkeydown = input;
}

function createInventory() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('menuWrapper');
    wrapper.id = 'inventory';

    let inventoryView = document.createElement('table');
    inventoryView.classList.add('appearance');
    inventoryView.style.width = '55%';
    inventoryView.style.height = '75%';

    let head = document.createElement('tr');
    for (let i = 0; i < 2; i++) {
        let headItem = document.createElement('th');
        headItem.textContent = i === 0 ? 'Item' : 'Amount';
        headItem.classList.add('menu-item');
        head.appendChild(headItem);
    }
    inventoryView.appendChild(head);

    let foodNameRow = document.createElement('tr');
    let foodName = document.createElement('td');
    foodName.textContent = 'FOOD';
    foodName.colSpan = 2;
    foodName.classList.add('menu-item');
    foodNameRow.appendChild(foodName);
    inventoryView.appendChild(foodNameRow);

    let keys = Object.keys(variables.Hero.inventory.food);
    for (let i = 0; i < keys.length; i++) {
        let row = document.createElement('tr');
        if (i === 0) {
            row.classList.add('select');
        }

        let item = document.createElement('td');
        item.textContent = foods[keys[i]].name;
        item.classList.add('menu-item');

        let amount = document.createElement('td');
        amount.textContent = variables.Hero.inventory.food[keys[i]];
        amount.classList.add('menu-item');

        row.appendChild(item);
        row.appendChild(amount);

        inventoryView.appendChild(row);
    }

    let drinkNameRow = document.createElement('tr');
    let drinkName = document.createElement('td');
    drinkName.textContent = 'DRINKS';
    drinkName.colSpan = 2;
    drinkName.classList.add('menu-item');
    drinkNameRow.appendChild(drinkName);
    inventoryView.appendChild(drinkNameRow);

    keys = Object.keys(variables.Hero.inventory.drinks);
    for (let i = 0; i < keys.length; i++) {
        let row = document.createElement('tr');

        let item = document.createElement('td');
        item.textContent = drinks[keys[i]].name;
        item.classList.add('menu-item');

        let amount = document.createElement('td');
        amount.textContent = variables.Hero.inventory.drinks[keys[i]];
        amount.classList.add('menu-item');

        row.appendChild(item);
        row.appendChild(amount);

        inventoryView.appendChild(row);
    }

    wrapper.appendChild(inventoryView);

    document.body.appendChild(wrapper);
}

function input(event) {
    switch (event.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
            chooseItem(1);
            break;
        case 'a':
        case 'A':
        case 'LeftArrow':
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            chooseItem();
            break;
        case 'd':
        case 'D':
        case 'RightArrow':
            break;
        case 'Enter':
            Enter(document.getElementsByClassName('select')[1].children[0].textContent);
            break;
        case 'Escape':
            document.getElementById('inventory').remove();
            pauseMenu();
            break;
    }
}

export function chooseItem(up = 0) {
    let current = document.getElementsByClassName('select')[1];

    for (let i = 2; i < current.parentElement.children.length; i++) {
        if (current.parentElement.children[i].children[0].textContent === current.children[0].textContent) {
            let number = i + ((-1) ** up);

            if (number === current.parentElement.children.length || number === 1) {
                return;
            }

            if (current.parentElement.children[number].children.length === 1) {
                number += ((-1) ** up);
            }

            current.parentElement.children[number].classList.add('select');
            current.classList.remove('select');
            return;
        }
    }
}

function Enter(option) {
    let keys = Object.keys(variables.Hero.inventory.food);

    for (let i = 0; i < keys.length; i++) {
        if (foods[keys[i]].name === option) {
            if (variables.Hero.inventory.food[keys[i]] === 0) {
                return;
            }

            foods[keys[i]].apply(variables.Hero);

            variables.Hero.inventory.food[keys[i]] -= 1;

            if (variables.Hero.inventory.food[keys[i]] === 0) {
                let current = document.getElementsByClassName('select')[1];
                chooseItem();
                current.remove();
                return;
            }

            document.getElementsByClassName('select')[1].children[1].textContent = variables.Hero.inventory.food[keys[i]];
            return;
        }
    }

    keys = Object.keys(variables.Hero.inventory.drinks);

    for (let i = 0; i < keys.length; i++) {
        if (drinks[keys[i]].name === option) {
            if (variables.Hero.inventory.drinks[keys[i]] === 0) {
                return;
            }

            drinks[keys[i]].apply(variables.Hero);

            variables.Hero.inventory.drinks[keys[i]] -= 1;

            if (variables.Hero.inventory.drinks[keys[i]] === 0) {
                let current = document.getElementsByClassName('select')[1];
                delete variables.Hero.inventory.drinks[keys[i]];

                if (i === keys.length - 1) {
                    if (current.parentElement.children[current.parentElement.children.length - 2].children.length === 1) {
                        current.parentElement.children[current.parentElement.children.length - 3].classList.add('select');
                    }
                    else {
                        current.parentElement.children[current.parentElement.children.length - 2].classList.add('select');
                    }
                }
                else {
                    chooseItem();
                }

                current.remove();
                return;
            }

            document.getElementsByClassName('select')[1].children[1].textContent = variables.Hero.inventory.drinks[keys[i]];
            return;
        }
    }
}