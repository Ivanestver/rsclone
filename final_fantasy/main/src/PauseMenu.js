import { variables } from "./variables";
import { input as Input } from "./main";
import { mainMenu } from "./mainMenu";
import { inventory } from "./inventory";
import { createSpecifications } from "./specifications";
import { saveGame } from "./save";
import { loadGame } from "./load";
import { equipment } from "./equipment";
import { audio } from "./classes/audio";
import { mission } from "./mission";

export function pauseMenu() {
    if (document.getElementById('pause') === null) {
        createMenu();
    }
    
    document.onkeydown = input;
}

function createMenu() {
    let pauseWrapper = document.createElement('div');
    pauseWrapper.style.justifyContent = 'center';
    pauseWrapper.classList.add('menuWrapper');
    pauseWrapper.id = 'pause';

    let imgWrapper = document.createElement('div');
    imgWrapper.classList.add('appearance');
    imgWrapper.style.display = 'flex';
    imgWrapper.style.width = '30%';
    imgWrapper.style.height = '55%';
    imgWrapper.style.justifyContent = 'center';
    imgWrapper.style.alignItems = 'center';

    let img = document.createElement('img');
    img.src = variables.Hero.src;
    img.style.width = '45%';

    imgWrapper.appendChild(img);

    let pause = document.createElement('div');
    pause.classList.add('pause', 'appearance');

    let continueGame = document.createElement('span');
    continueGame.textContent = 'Continue';
    continueGame.classList.add('menu-item', 'select');
    continueGame.style.fontSize = '3rem';

    let character = document.createElement('span');
    character.textContent = 'Character';
    character.classList.add('menu-item');
    character.style.fontSize = '3rem';

    let inventory = document.createElement('span');
    inventory.textContent = 'Inventory';
    inventory.classList.add('menu-item');
    inventory.style.fontSize = '3rem';

    let equipment = document.createElement('span');
    equipment.textContent = 'Equipment';
    equipment.classList.add('menu-item');
    equipment.style.fontSize = '3rem';

    let mission = document.createElement('span');
    mission.textContent = 'Mission';
    mission.classList.add('menu-item');
    mission.style.fontSize = '3rem';

    let save = document.createElement('span');
    save.textContent = 'Save game';
    save.classList.add('menu-item');
    save.style.fontSize = '3rem';

    let load = document.createElement('span');
    load.textContent = 'Load game';
    load.classList.add('menu-item');
    load.style.fontSize = '3rem';

    let exit = document.createElement('span');
    exit.textContent = 'Main menu';
    exit.classList.add('menu-item');
    exit.style.fontSize = '3rem';

    pause.appendChild(continueGame);
    pause.appendChild(character);
    pause.appendChild(inventory);
    pause.appendChild(equipment);
    pause.appendChild(mission);
    pause.appendChild(save);
    pause.appendChild(load);
    pause.appendChild(exit);

    pauseWrapper.appendChild(imgWrapper);
    pauseWrapper.appendChild(pause);

    document.body.appendChild(pauseWrapper);
}

function input(event) {
    if (event.key === 'Escape') {
        if (document.getElementById('pause') !== null) {
            audio.Cancel();
            audio.Continue();
            document.getElementById('pause').remove();
            document.onkeydown = Input;
            return;
        }
    }

    let current = document.getElementsByClassName('select')[0];

    if (event.key === 'Enter') {
        Enter(current.textContent);
        return;
    }

    let parent = current.parentElement;

    current.classList.remove('select');

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

    parent.children[node].classList.add('select');

    audio.MenuMove();
}

function Enter(option) {
    audio.Choose();

    switch (option) {
        case 'Continue':
            if (document.getElementById('pause') !== null) {
                document.getElementById('pause').remove();
                document.onkeydown = Input;
                audio.Continue();
                return;
            }
            break;
        case 'Character':
            character();
            break;
        case 'Inventory':
            //document.getElementById('pause').remove();
            inventory();
            break;
        case 'Equipment':
            equipment();
            break;
        case 'Mission':
            mission();
            break;
        case 'Save game':
            save();
            break;
        case 'Load game':
            load();
            break;
        case 'Main menu':
            document.getElementById('pause').remove();
            document.getElementsByClassName('main')[0].innerHTML = '';
            mainMenu();
            break;
    }
}

function character() {
    createSpecifications();
}

function save() {
    saveGame();
}

function load() {
    loadGame();
}