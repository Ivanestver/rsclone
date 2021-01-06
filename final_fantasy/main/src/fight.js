import { paintMap } from "./main";
import { variables } from "./variables";

var main = document.getElementsByClassName('main')[0];

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
    let textTurns = document.createElement('span');
    textTurns.classList.add('text');
    turns.appendChild(textTurns);
    textTurns.textContent = 'Your Turn!';

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
    let enemysHealth = document.createElement('span');
    enemysHealth.classList.add('text');
    enemysHealth.textContent = `You: ${variables.Arena[2][4].Hp}`;
    let herosHealth = document.createElement('span');
    herosHealth.classList.add('text');
    herosHealth.textContent = `Enemy: ${variables.Map[variables.X][variables.Y].Hp}`;

    panel.appendChild(enemysHealth);
    panel.appendChild(herosHealth);

    main.appendChild(panel);
}

function assignActions() {
    document.onkeydown = keyPressHandler;
}

function keyPressHandler(event) {
    let current = document.getElementsByClassName('select')[0];
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