import { audio } from "./classes/audio";
import { pauseMenu } from "./PauseMenu";
import { variables } from "./variables";

export function createSpecifications() {
    createWindow();
    document.onkeydown = function (event) {
        if (event.key === 'Escape') {
            audio.Cancel();
            pauseMenu();
            document.getElementById('spec').remove();
        }
    }
}

function createWindow() {
    let specWrap = document.createElement('div');
    specWrap.id = 'spec';
    specWrap.classList.add('menuWrapper');
    specWrap.style.justifyContent = 'center';

    // set player's photo
    let imgWrap = document.createElement('div');
    imgWrap.classList.add('spec-img', 'appearance');

    let img = document.createElement('img');
    img.src = variables.Hero.src;
    img.style.width = '60%';

    let name = document.createElement('span');
    name.textContent = variables.Hero.Name;
    name.classList.add('menu-item');

    imgWrap.appendChild(img);
    imgWrap.appendChild(name);

    // set specifications
    let spec = document.createElement('table');
    spec.classList.add('appearance');
    spec.style.width = '50%';
    spec.style.height = '60%';

    // set level
    let levelWrap = document.createElement('tr');

    let level = document.createElement('td');
    level.textContent = 'Level';
    level.classList.add('menu-item');

    let levelAmount = document.createElement('td');
    levelAmount.textContent = variables.Hero.level;
    levelAmount.classList.add('menu-item');

    levelWrap.appendChild(level);
    levelWrap.appendChild(levelAmount);

    // set money
    let moneyWrap = document.createElement('tr');

    let money = document.createElement('td');
    money.textContent = 'Money';
    money.classList.add('menu-item');

    let moneyAmount = document.createElement('td');
    moneyAmount.textContent = variables.Hero.money;
    moneyAmount.classList.add('menu-item');

    moneyWrap.appendChild(money);
    moneyWrap.appendChild(moneyAmount);

    // set health
    let healthWrap = document.createElement('tr');

    let health = document.createElement('td');
    health.textContent = 'Health';
    health.classList.add('menu-item');

    let healthAmount = document.createElement('td');
    healthAmount.textContent = variables.Hero.hp;
    healthAmount.classList.add('menu-item');

    healthWrap.appendChild(health);
    healthWrap.appendChild(healthAmount);

    // set mana
    let manaWrap = document.createElement('tr');

    let mana = document.createElement('td');
    mana.textContent = 'Mana';
    mana.classList.add('menu-item');

    let manaAmount = document.createElement('td');
    manaAmount.textContent = variables.Hero.mana;
    manaAmount.classList.add('menu-item');

    manaWrap.appendChild(mana);
    manaWrap.appendChild(manaAmount);

    // set power
    let powerWrap = document.createElement('tr');

    let power = document.createElement('td');
    power.textContent = 'Power';
    power.classList.add('menu-item');

    let powerAmount = document.createElement('td');
    powerAmount.textContent = variables.Hero.Power;
    powerAmount.classList.add('menu-item');

    powerWrap.appendChild(power);
    powerWrap.appendChild(powerAmount);

    // set defence
    let defenceWrap = document.createElement('tr');

    let defence = document.createElement('td');
    defence.textContent = 'Defence';
    defence.classList.add('menu-item');

    let defenceAmount = document.createElement('td');
    defenceAmount.textContent = variables.Hero.Defence;
    defenceAmount.classList.add('menu-item');

    defenceWrap.appendChild(defence);
    defenceWrap.appendChild(defenceAmount);

    spec.appendChild(levelWrap);
    spec.appendChild(healthWrap);
    spec.appendChild(moneyWrap);
    spec.appendChild(manaWrap);
    spec.appendChild(powerWrap);
    spec.appendChild(defenceWrap);

    specWrap.appendChild(imgWrap);
    specWrap.appendChild(spec);

    document.body.appendChild(specWrap);
}