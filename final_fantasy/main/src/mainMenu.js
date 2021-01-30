import { audio } from "./classes/audio";
import { createHero } from "./createHero";
import { loadGame } from "./load";
import { saveGame } from "./save";

/*document.addEventListener('DOMContentLoaded', () => {
    mainMenu();
});*/

export function mainMenu() {
    createMenu();
    document.onkeydown = click;
    audio.Menu();
}

function createMenu() {
    let logoWrap = document.createElement('div');
    logoWrap.classList.add('logo-wrapper', 'appearance');

    let logo = document.createElement('span');
    logo.textContent = 'Final Fantasy 0';
    logo.classList.add('menu-item');
    logo.style.fontSize = '4rem';
    logoWrap.appendChild(logo);

    let menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menuWrapper');
    menuWrapper.id = 'mainMenu';

    let menuBlock = document.createElement('div');
    menuBlock.classList.add('menuBlock', 'appearance');

    let continueGame = document.createElement('span');
    continueGame.textContent = 'Continue Game';
    continueGame.classList.add('menu-item', 'select');
    let newGame = document.createElement('span');
    newGame.textContent = 'New Game';
    newGame.classList.add('menu-item');
    let settings = document.createElement('span');
    settings.textContent = 'Settings';
    settings.classList.add('menu-item');
    let about = document.createElement('span');
    about.textContent = 'About';
    about.classList.add('menu-item');

    menuBlock.appendChild(continueGame);
    menuBlock.appendChild(newGame);
    menuBlock.appendChild(settings);
    menuBlock.appendChild(about);

    menuWrapper.appendChild(logoWrap);
    menuWrapper.appendChild(menuBlock);
    menuWrapper.style.flexDirection = 'column';

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
    document.getElementById('mainMenu').remove();
    loadGame();
}

function newGame() {
    document.getElementById('mainMenu').remove();
    createHero();
}

function settings() {

}

function about() {

}