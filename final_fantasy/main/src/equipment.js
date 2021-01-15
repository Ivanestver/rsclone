import { pauseMenu } from "./PauseMenu";
import { variables } from "./variables";
import { Weapon } from "./classes/weapons";
import { Armory } from "./classes/armories";

var place = null;

export function equipment() {
    createEquip();

    document.onkeydown = input;
}

function createEquip() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('menuWrapper');
    wrapper.id = 'equipment';

    let equipWrap = document.createElement('div');
    equipWrap.style.display = 'flex';
    equipWrap.style.width = '60vw';
    equipWrap.style.height = '60vh';

    // img and battle stats
    let imgAndBattleWrap = document.createElement('div');
    imgAndBattleWrap.style.width = '40%';

    // set img
    let imgWrap = document.createElement('div');
    imgWrap.style.display = 'flex';
    imgWrap.style.flexDirection = 'column';
    imgWrap.style.justifyContent = 'space-evenly';
    imgWrap.style.alignItems = 'center';
    imgWrap.style.height = '60%';
    imgWrap.classList.add('appearance');

    let img = document.createElement('img');
    img.src = variables.Hero.Src;
    img.classList.add('menu-item');
    img.style.width = '50%';

    let name = document.createElement('span');
    name.textContent = variables.Hero.Name;
    name.classList.add('menu-item');

    imgWrap.appendChild(img);
    imgWrap.appendChild(name);

    // set stats
    let statsWrap = document.createElement('div');
    statsWrap.classList.add('appearance');
    statsWrap.style.display = 'flex';
    statsWrap.style.flexDirection = 'column';
    statsWrap.style.justifyContent = 'space-evenly';
    statsWrap.style.height = '40%';
    statsWrap.style.borderRadius = '70px';

    let damage = document.createElement('span');
    damage.textContent = `Damage: ${variables.Hero.Power}`;
    damage.classList.add('menu-item');

    let defence = document.createElement('span');
    defence.textContent = `Defence: ${variables.Hero.Defence}`;
    defence.classList.add('menu-item');

    statsWrap.appendChild(damage);
    statsWrap.appendChild(defence);

    imgAndBattleWrap.appendChild(imgWrap);
    imgAndBattleWrap.appendChild(statsWrap);

    // items
    let itemsWrap = document.createElement('div');
    itemsWrap.classList.add('appearance');
    itemsWrap.style.display = 'flex';
    itemsWrap.style.flexDirection = 'column';
    itemsWrap.style.justifyContent = 'space-evenly';
    itemsWrap.style.alignItems = 'center';
    itemsWrap.style.width = '60%';

    let weaponWrap = document.createElement('div');
    weaponWrap.classList.add('select');
    weaponWrap.style.display = 'flex';
    weaponWrap.style.justifyContent = 'space-around';
    weaponWrap.style.width = '100%';

    let weapon = document.createElement('span');
    weapon.textContent = variables.Hero.inventory.weapon.name;
    weapon.classList.add('menu-item');

    let weaponName = document.createElement('span');
    weaponName.textContent = variables.Hero.inventory.weapon.power;
    weaponName.classList.add('menu-item');

    weaponWrap.appendChild(weapon);
    weaponWrap.appendChild(weaponName);

    let armoryWrap = document.createElement('div');
    armoryWrap.style.display = 'flex';
    armoryWrap.style.justifyContent = 'space-around';
    armoryWrap.style.width = '100%';

    let armory = document.createElement('span');
    armory.textContent = variables.Hero.inventory.armory.name;
    armory.classList.add('menu-item');

    let armoryName = document.createElement('span');
    armoryName.textContent = variables.Hero.inventory.armory.defence;
    armoryName.classList.add('menu-item');

    armoryWrap.appendChild(armory);
    armoryWrap.appendChild(armoryName);

    itemsWrap.appendChild(weaponWrap);
    itemsWrap.appendChild(armoryWrap);

    equipWrap.appendChild(imgAndBattleWrap);
    equipWrap.appendChild(itemsWrap);

    wrapper.appendChild(equipWrap);

    document.body.appendChild(wrapper);
}

function input(event) {
    let current = document.getElementsByClassName('select')[1];
    let move = (place) => {
        if (current.parentNode.children[place] !== current) {
            current.parentNode.children[place].classList.add('select');
            current.classList.remove('select');
        }
    };
    switch (event.key) {
        case 'Escape':
            document.getElementById('equipment').remove();
            pauseMenu();
            break;
        case 'Enter':
            Enter(current.parentNode.children[0] == current);
            break;
        case 'w':
        case 'W':
        case 'ArrowUp':
            move(0);
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            move(1);
            break;
    }
}

function Enter(isWeapon) {
    place = isWeapon ? variables.Hero.inventory.weapons : variables.Hero.inventory.armories;

    let itemsWrap = document.createElement('div');
    itemsWrap.classList.add('list-items-in-equip');
    itemsWrap.id = 'items';

    place.forEach(item => {
        let itemWrap = document.createElement('div');
        itemWrap.classList.add('appearance', 'select');
        itemWrap.style.width = '100%';
        itemWrap.style.display = 'flex';
        itemWrap.style.justifyContent = 'space-evenly';

        let itemName = document.createElement('span');
        itemName.classList.add('menu-item');
        itemName.style.fontSize = '2rem';
        itemName.textContent = item.name;

        let itemValue = document.createElement('span');
        itemValue.classList.add('menu-item');
        itemValue.style.fontSize = '2rem';
        itemValue.textContent = isWeapon ? item.power : item.defence;

        itemWrap.appendChild(itemName);
        itemWrap.appendChild(itemValue);

        itemsWrap.appendChild(itemWrap);
    });

    document.getElementById('equipment').children[0].appendChild(itemsWrap);

    document.onkeydown = chooseAnItem;
}

function chooseAnItem(event) {
    let current = document.getElementsByClassName('select')[2];

    let move = (down) => { // 0 - false, 1 - true;
        for (let i = 0; i < current.parentElement.children.length; i++) {
            if (current.parentElement.children === current) {
                let number = i + ((-1) ** down);
                if (number < 0 || number === current.parentElement.children.length) {
                    break;
                }

                current.parentElement.children[number].classList.add('select');
                current.classList.remove('select');
            }
        }
    };

    switch (event.key) {
        case 'Escape':
            document.getElementById('items').remove();
            document.onkeydown = input;
            break;
        case 'Enter':
            EnterChoose(current.children[0].textContent);
            break;
        case 'w':
        case 'W':
        case 'ArrowUp':
            move(1);
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            move(0);
            break;
    }
}

function EnterChoose(name) {
    let item = null;
    let itemIndex = 0;

    for (let i = 0; i < place.length; i++) {
        if (place[i].name === name) {
            item = place[i];
            itemIndex = i;
            break;
        }
    }

    place.splice(itemIndex, 1);
    if (item instanceof Weapon) {
        place.push(variables.Hero.inventory.weapon)
        variables.Hero.inventory.weapon = item;
    }
    else {
        place.push(variables.Hero.inventory.armory)
        variables.Hero.inventory.armory = item;
    }

    document.getElementById('equipment').remove();
    equipment();
}