import { initMap, paintMap } from "./main";
import { variables } from "./variables";
import { Magic, SkillMagic } from "./classes/magic";
import { DarkKnight } from "./classes/characters";

var main = document.getElementsByClassName('main')[0];
var heroHealth;
var heroMP;
var enemyHealth;
var canBeContinued = true;  // for delaying after player's attacking
var isPlayerAttacking = true;
var textTurn;

export function createFight(event) {
    main.innerHTML = "";
    variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y] = new DarkKnight(100, 10, 10);
    paintMap(variables.Arena);
    createHUD();
    assignActions();
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
    enemyHealth.textContent = `Enemy: ${variables.Arena[2][4].Hp}`;

    panel.appendChild(hero);
    panel.appendChild(enemyHealth);

    main.appendChild(panel);
}

function assignActions() {
    document.onkeydown = keyPressHandler;
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
    }

    let parent = current.parentElement;
    current.classList.remove('select');

    let node = 0;

    for (let i = 0; i < parent.children.length; i++) {
        if (parent.children[i].textContent === current.textContent) {
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
}

function Attack(power) {
    variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Hp -= power;
    enemyHealth.textContent = 'Enemy: ' + variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Hp;
    if (variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Hp === 0) {
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
    variables.Hero.Hp -= variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Power;
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
        heroMP.textContent = 'Your MP: ' + variables.Hero.mana;
    }
    else if (magic.__proto__.constructor.name === 'SkillMagic') {
        magic.apply(variables.Hero);
        heroHealth.textContent = 'Your HP: ' + variables.Hero.Hp;
        heroMP.textContent = 'Your MP: ' + variables.Hero.mana;
    }
}

function win() {
    textTurn.textContent = 'You won!';

    setTimeout(() => {
        textTurn.textContent = `You got ${variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].money} coins`;
        variables.Hero.money += variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].money;
    }, 2000);

    setTimeout(() => {
        textTurn.textContent = `You got ${variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].xp} xp`;
        variables.Hero.xp += variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].xp;
    }, 4000);

    setTimeout(() => {
        initMap();
    }, 6000);
}

function ApplyHelp() {
    let help = document.createElement('div');
    help.classList.add('help', 'appearance');
    help.id = 'help';
    for (let i = 0; i < variables.Hero.inventory.food.length; i++) {
        let food = document.createElement('span');
        food.style.fontSize = '1.5rem';
        food.style.color = '#fff';
        food.style.paddingLeft = '15%';
        food.textContent = variables.Hero.inventory.food[i].name;
        help.appendChild(food);
    }

    for (let i = 0; i < variables.Hero.inventory.drinks.length; i++) {
        let drink = document.createElement('span');
        drink.style.fontSize = '1.5rem';
        drink.style.color = '#fff';
        drink.style.paddingLeft = '15%';
        drink.textContent = variables.Hero.inventory.drinks[i].name;
        help.appendChild(drink);
    }

    help.children[0].classList.add('select');

    main.appendChild(help);

    document.onkeydown = (event) => { keyPressHandler(event, 1); };
}