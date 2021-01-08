import { Grass, Mountain } from "./classes/nature";
import { createHero } from "./createHero";
import { variables } from "./variables";

document.addEventListener('DOMContentLoaded', () => {

    /*for (let i = 0; i < variables.mapSize; i += 1) {
        variables.Map.push([]);
    }

    for (let i = 0; i < variables.mapSize; i += 1) {
        variables.Map[0].push(new Mountain('Mountain', 'Mountain.png'));
        variables.Map[variables.mapSize - 1].push(new Mountain('Mountain', 'Mountain.png'));
    }

    variables.Map[1].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));
    variables.Map[2].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));
    variables.Map[3].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));
    variables.Map[4].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), variables.Hero, new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));
        */
    mainMenu();
});

export function mainMenu() {
    createMenu();
    document.onkeydown = click;
}

function createMenu() {
    let menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menuWrapper');
    menuWrapper.id = 'mainMenu';

    let menuBlock = document.createElement('div');
    menuBlock.classList.add('menuBlock', 'appearance');

    let contunueGame = document.createElement('span');
    contunueGame.textContent = 'Contunue Game';
    contunueGame.classList.add('menu-item', 'select');
    let newGame = document.createElement('span');
    newGame.textContent = 'New Game';
    newGame.classList.add('menu-item');
    let settings = document.createElement('span');
    settings.textContent = 'Settings';
    settings.classList.add('menu-item');
    let about = document.createElement('span');
    about.textContent = 'About';
    about.classList.add('menu-item');

    menuBlock.appendChild(contunueGame);
    menuBlock.appendChild(newGame);
    menuBlock.appendChild(settings);
    menuBlock.appendChild(about);

    menuWrapper.appendChild(menuBlock);

    document.body.appendChild(menuWrapper);
}

function click(event) {
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
}

function Enter(option) {
    switch (option) {
        case 'Continue Game':
            continueGame();
            break;
        case 'New Game':
            newGame();
            break;
        case 'Settings':
            settings();
            break;
        case 'About':
            about();
            break;
    }
}

function continueGame() {

}

function newGame() {
    document.getElementById('mainMenu').remove();
    createHero();
}

function settings() {

}

function about() {

}