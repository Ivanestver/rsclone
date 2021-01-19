import { initMap, paintMap } from "./main";
import { variables } from "./variables";
import { foods, drinks } from "./classes/supplies";
import { checkLevel } from "./classes/level";

var main = document.getElementsByClassName('main')[0];
var heroHealth;
var heroMP;
var enemyHealth;
var canBeContinued = true;  // for delaying after player's attacking
var textTurn;

export function createFight() {
    main.innerHTML = "";
    variables.Arena.map[variables.enemyCoordinates.x][variables.enemyCoordinates.y] = variables.Map.enemies[Math.floor(Math.random() * (variables.Map.enemies.length - 1))];
    paintMap(variables.Arena);
    createHUD();
    document.onkeydown = keyPressHandler;
}

function createHUD() {
    // who's turn
    let turns = document.createElement('div');
    turns.classList.add('turns');
    turns.classList.add('appearance');

    textTurn = document.createElement('span');
    textTurn.classList.add('text');
    textTurn.textContent = 'Your Turn!';
    turns.appendChild(textTurn);

    main.appendChild(turns);

    // player's actions
    let actions = document.createElement('div');
    actions.classList.add('actions');
    actions.classList.add('appearance');
    actions.style.borderRadius = '30px';

    let attack = document.createElement('span');
    attack.classList.add('text');
    attack.classList.add('select');
    attack.style.fontSize = '2rem';
    attack.textContent = 'Attack';

    let magic = document.createElement('span');
    magic.classList.add('text');
    magic.textContent = 'Magic';
    magic.style.fontSize = '2rem';

    let help = document.createElement('span');
    help.classList.add('text');
    help.textContent = 'Help';
    help.style.fontSize = '2rem';

    let skip = document.createElement('span');
    skip.classList.add('text');
    skip.textContent = 'Skip turn';
    skip.style.fontSize = '2rem';

    actions.appendChild(attack);
    actions.appendChild(magic);
    actions.appendChild(help);
    actions.appendChild(skip);

    main.appendChild(actions);

    // health 
    let panel = document.createElement('div');
    panel.classList.add('healthWrapper');
    panel.classList.add('appearance');

    let hero = document.createElement('div');
    hero.classList.add('hero');

    heroHealth = document.createElement('span');
    heroHealth.classList.add('text');
    heroHealth.textContent = `Your HP: ${variables.Hero.Hp}`;

    heroMP = document.createElement('span');
    heroMP.classList.add('text');
    heroMP.textContent = `Your MP: ${variables.Hero.mana}`;

    hero.appendChild(heroHealth);
    hero.appendChild(heroMP);

    enemyHealth = document.createElement('span');
    enemyHealth.classList.add('text');
    enemyHealth.textContent = `Enemy: ${variables.Arena.map[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Hp}`;

    panel.appendChild(hero);
    panel.appendChild(enemyHealth);

    main.appendChild(panel);
}

function keyPressHandler(event, numberElement = 0) {
    if (!canBeContinued) {
        return;
    }

    if (event.key === 'Escape') {
        if (document.getElementById('magic') !== null) {
            document.getElementById('magic').remove();
            document.onkeydown = keyPressHandler;
            return;
        }

        if (document.getElementById('help') !== null) {
            document.getElementById('help').remove();
            document.onkeydown = keyPressHandler;
            return;
        }
    }

    let current = document.getElementsByClassName('select')[numberElement];

    if (event.key === 'Enter') {
        Enter(current.textContent);
        return;
    }

    let parent = current.parentElement;
    if (document.getElementById('help') !== null) {
        parent = parent.parentElement;
    }

    current.classList.remove('select');
    if (document.getElementById('help') !== null) {
        current.parentElement.children[1].classList.remove('select');
    }

    let node = 0;

    for (let i = 0; i < parent.children.length; i++) {
        let text = document.getElementById('help') === null ? parent.children[i].textContent : parent.children[i].children[0].textContent;
        if (text === current.textContent) {
            switch (event.key) {
                case 'w':
                case 'W':
                case 'ArrowUp':
                    if (i != 0) {
                        node = i - 1;
                    }
                    break;
                case 's':
                case 'S':
                case 'ArrowDown':
                    if (i != parent.children.length - 1) {
                        node = i + 1;
                    }
                    break;
            }
            break;
        }
    }

    if (document.getElementById('help') !== null) {
        parent.children[node].children[0].classList.add('select');
        parent.children[node].children[1].classList.add('select');
        return;
    }

    parent.children[node].classList.add('select');
}

function Enter(option) {
    if (document.getElementsByClassName('select').length === 1) {
        switch (option) {
            case 'Attack':
                Attack(variables.Hero.Power);
                break;
            case 'Magic':
                ApplyMagic();
                break;
            case 'Help':
                ApplyHelp();
                break;
            case 'Skip turn':
                textTurn.textContent = "Enemy's turn!";
                setTimeout(() => {
                    canBeContinued = true;
                    EnemyAttack();
                }, 1500);
                break;
        }
    }
    else {
        if (document.getElementsByClassName('select')[0].textContent === 'Magic') {
            variables.Hero.magic.forEach(magic => {
                if (magic.name === option) {
                    document.getElementById('magic').remove();
                    defineMagic(magic);
                    document.onkeydown = keyPressHandler;
                    setTimeout(() => {
                        canBeContinued = true;
                        EnemyAttack();
                    }, 1500);
                }
            });
        }
        else {
            let keys = Object.keys(variables.Hero.inventory.food);

            for (let i = 0; i < keys.length; i++) {
                if (foods[keys[i]].name === option) {
                    if (variables.Hero.inventory.food[keys[i]] === 0) {
                        return;
                    }

                    foods[keys[i]].apply(variables.Hero);

                    variables.Hero.inventory.food[keys[i]] -= 1;

                    document.getElementById('help').remove();
                    document.onkeydown = keyPressHandler;
                    setTimeout(() => {
                        canBeContinued = true;
                        EnemyAttack();
                    }, 1500);
                    heroHealth.textContent = 'Your HP: ' + variables.Hero.Hp;
                    heroMP.textContent = 'Your MP: ' + variables.Hero.mana;
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

                    document.getElementById('help').remove();
                    document.onkeydown = keyPressHandler;
                    setTimeout(() => {
                        canBeContinued = true;
                        EnemyAttack();
                    }, 1500);
                    heroHealth.textContent = 'Your HP: ' + variables.Hero.Hp;
                    heroMP.textContent = 'Your MP: ' + variables.Hero.mana;
                    return;
                }
            }
        }
    }
}

function Attack(power) {
    variables.Arena.map[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Hp -= power;
    enemyHealth.textContent = 'Enemy: ' + variables.Arena.map[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Hp;
    if (variables.Arena.map[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Hp <= 0) {
        win();
        return;
    }
    textTurn.textContent = "Enemy's turn!";
    canBeContinued = false;
    setTimeout(() => {
        canBeContinued = true;
        EnemyAttack();
    }, 1500);
}

function EnemyAttack() {
    variables.Hero.Hp = variables.Hero.Hp - variables.Arena.map[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Power;
    if (variables.Hero.Hp <= 0) {
        heroHealth.textContent = 'Your HP: 0';
        lose();
        return;
    }
    heroHealth.textContent = 'Your HP: ' + variables.Hero.Hp;
    textTurn.textContent = 'Your turn!';
}

function ApplyMagic() {
    let magicDiv = document.createElement('div');
    magicDiv.classList.add('magic');
    magicDiv.classList.add('appearance');

    for (let i = 0; i < variables.Hero.magic.length; i++) {
        let magic = document.createElement('span');
        magic.style.fontSize = '1.5rem';
        magic.style.color = '#fff';
        magic.style.paddingLeft = '15%';
        magic.textContent = variables.Hero.magic[i].name;

        magicDiv.appendChild(magic);
    }
    magicDiv.children[0].classList.add('select');
    magicDiv.id = 'magic';
    main.appendChild(magicDiv);

    document.onkeydown = (event) => { keyPressHandler(event, 1); };
}

function defineMagic(magic) {
    if (magic.__proto__.constructor.name === 'Magic') {
        magic.apply(Attack, variables.Hero);
    }
    else if (magic.__proto__.constructor.name === 'SkillMagic') {
        magic.apply(variables.Hero);
        heroHealth.textContent = 'Your HP: ' + variables.Hero.Hp;
    }

    heroMP.textContent = 'Your MP: ' + variables.Hero.mana;
}

function win() {
    textTurn.textContent = 'You won!';
    variables.Hero.xp += variables.Arena.map[variables.enemyCoordinates.x][variables.enemyCoordinates.y].xp;
    let delay = checkLevel(variables.Hero, textTurn);
    setTimeout(() => {
        textTurn.textContent = `You got ${variables.Arena.map[variables.enemyCoordinates.x][variables.enemyCoordinates.y].money} coins`;
        variables.Hero.money += variables.Arena.map[variables.enemyCoordinates.x][variables.enemyCoordinates.y].money;
    }, 2000);

    setTimeout(() => {
        textTurn.textContent = `You got ${variables.Arena.map[variables.enemyCoordinates.x][variables.enemyCoordinates.y].xp} xp`;
    }, 4000);

    setTimeout(() => {
        initMap();
    }, delay);
}

function lose() {
    textTurn.textContent = 'You lose!';
    setTimeout(() => {
        initMap();
    }, 2000);
}

function ApplyHelp() {
    let help = document.createElement('div');
    help.classList.add('help', 'appearance');
    help.id = 'help';
    let keys = Object.keys(variables.Hero.inventory.food);
    for (let i = 0; i < keys.length; i++) {
        let foodWrapper = document.createElement('div');
        foodWrapper.style.display = 'flex';
        foodWrapper.style.width = '100%';
        foodWrapper.style.justifyContent = 'space-around';

        let food = document.createElement('span');
        food.style.fontSize = '1.5rem';
        food.style.color = '#fff';
        food.textContent = foods[keys[i]].name;

        let foodCount = document.createElement('span');
        foodCount.style.fontSize = '1.5rem';
        foodCount.style.color = '#fff';
        foodCount.textContent = variables.Hero.inventory.food[keys[i]];

        foodWrapper.appendChild(food);
        foodWrapper.appendChild(foodCount);

        help.appendChild(foodWrapper);
    }

    keys = Object.keys(variables.Hero.inventory.drinks);
    for (let i = 0; i < keys.length; i++) {
        let drinkWrapper = document.createElement('div');
        drinkWrapper.style.display = 'flex';
        drinkWrapper.style.width = '100%';
        drinkWrapper.style.justifyContent = 'space-around';

        let drink = document.createElement('span');
        drink.style.fontSize = '1.5rem';
        drink.style.color = '#fff';
        drink.style.paddingLeft = '15%';
        drink.textContent = drinks[keys[i]].name;

        let drinkCount = document.createElement('span');
        drinkCount.style.fontSize = '1.5rem';
        drinkCount.style.color = '#fff';
        drinkCount.textContent = variables.Hero.inventory.drinks[keys[i]];

        drinkWrapper.appendChild(drink);
        drinkWrapper.appendChild(drinkCount);

        help.appendChild(drinkWrapper);
    }

    help.children[0].children[0].classList.add('select');
    help.children[0].children[1].classList.add('select');

    main.appendChild(help);

    document.onkeydown = (event) => { keyPressHandler(event, 1); };
}

export function isFight() {
    if (variables.Map.enemies.length === 0) {
        return false;
    }

    let number = Math.floor(Math.random() * 9);
    if (number === 0) {
        return true;
    }

    return false;
}