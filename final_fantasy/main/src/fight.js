import { paintMap } from "./main";
import { variables } from "./variables";

var main = document.getElementsByClassName('main')[0];
var heroHealth;
var enemyHealth;
var canBeContinued = true;  // for delaying after attacking
var isPlayerAttacking = true;
var textTurn;

export function createFight(event) {
    main.innerHTML = "";
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

    heroHealth = document.createElement('span');
    heroHealth.classList.add('text');
    heroHealth.textContent = `You: ${variables.Map[variables.X][variables.Y].Hp}`;

    enemyHealth = document.createElement('span');
    enemyHealth.classList.add('text');
    enemyHealth.textContent = `Enemy: ${variables.Arena[2][4].Hp}`;

    panel.appendChild(heroHealth);
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
        if (document.getElementsByClassName('select').length === 2) {
            document.getElementById('magic').remove();
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
                    if (i != 0) {
                        node = i - 1;
                    }
                    break;
                case 's':
                case 'S':
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
                break;
            case 'Skip turn':
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
                Attack(magic.power);
                document.onkeydown = keyPressHandler;
            }
        });
    }
}

function Attack(power) {
    variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Hp -= power;
    enemyHealth.textContent = 'Enemy: ' + variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Hp;
    textTurn.textContent = "Enemy's turn!";
    canBeContinued = false;
    setTimeout(() => {
        canBeContinued = true;
        EnemyAttack();
    }, 1500);
}

function EnemyAttack() {
    variables.Hero.Hp -= variables.Arena[variables.enemyCoordinates.x][variables.enemyCoordinates.y].Power;
    heroHealth.textContent = 'You: ' + variables.Hero.Hp;
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