import { variables } from "./variables";

export function equipment() {
    createEquip();
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