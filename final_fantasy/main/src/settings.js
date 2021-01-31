import { audio } from "./classes/audio";
import { mainMenu } from "./mainMenu";

export function settings() {
    createSettings();
    document.onkeydown = input;
}

function createSettings() {
    let wrap = document.createElement('div');
    wrap.classList.add('menuWrapper');
    wrap.style.flexDirection = 'column';
    wrap.style.justifyContent = 'space-evenly';
    wrap.id = 'settings';

    let title = document.createElement('div');
    title.classList.add('appearance');
    title.style.width = '30vw';

    let titleText = document.createElement('span');
    titleText.textContent = 'SETTINGS';
    title.classList.add('menu-item');

    title.appendChild(titleText);

    let settingsWrap = document.createElement('div');
    settingsWrap.classList.add('appearance');
    settingsWrap.style.width = '30vw';
    settingsWrap.style.display = 'flex';
    settingsWrap.style.flexDirection = 'column';
    settingsWrap.style.alignItems = 'center';

    // Music =====================
    let musicText = document.createElement('span');
    musicText.classList.add('menu-item');
    musicText.textContent = 'Music';

    let musicWrap = document.createElement('div');
    musicWrap.style.width = '100%';
    musicWrap.style.display = 'flex';
    musicWrap.style.justifyContent = 'space-evenly';
    musicWrap.id = 'music';

    let musicYes = document.createElement('span');
    musicYes.classList.add('menu-item', 'select');
    musicYes.textContent = 'On';

    let musicNo = document.createElement('span');
    musicNo.classList.add('menu-item');
    musicNo.textContent = 'Off';

    musicWrap.appendChild(musicYes);
    musicWrap.appendChild(musicNo);

    settingsWrap.appendChild(musicText);
    settingsWrap.appendChild(musicWrap);

    //=======================

    // Sounds =====================
    let soundText = document.createElement('span');
    soundText.classList.add('menu-item');
    soundText.textContent = 'Sound';

    let soundWrap = document.createElement('div');
    soundWrap.style.width = '100%';
    soundWrap.style.display = 'flex';
    soundWrap.style.justifyContent = 'space-evenly';
    soundWrap.id = 'sound';

    let soundYes = document.createElement('span');
    soundYes.classList.add('menu-item');
    soundYes.textContent = 'On';

    let soundNo = document.createElement('span');
    soundNo.classList.add('menu-item');
    soundNo.textContent = 'Off';

    soundWrap.appendChild(soundYes);
    soundWrap.appendChild(soundNo);

    settingsWrap.appendChild(soundText);
    settingsWrap.appendChild(soundWrap);

    //=======================

    wrap.appendChild(title);
    wrap.appendChild(settingsWrap);

    document.body.appendChild(wrap);
}

function input(event) {
    switch (event.key) {
        case 'a':
        case 'A':
        case 'LeftArrow':
        case 'd':
        case 'D':
        case 'RightArrow':
            audio.MenuMove();
            change();
            break;
        case 'w':
        case 'w':
        case 'ArrowUp':
        case 's':
        case 'S':
        case 'ArrowDown':
            audio.MenuMove();
            choose();
            break;
        case 'Enter':
            audio.Choose();
            let current = document.getElementsByClassName('select')[1];

            if (current.parentElement.id === 'music') {
                audio.isMusicMuted = current.textContent === 'On' ? false : true;
            }
            else {
                audio.isSoundMuted = current.textContent === 'On' ? false : true;
            }
            break;
        case 'Escape':
            audio.Cancel();
            document.getElementById('settings').remove();
            mainMenu();
            break;
    }
}

function change() {
    let current = document.getElementsByClassName('select')[1];

    let n = current.textContent === 'On' ? 1 : 0;

    current.parentElement.children[n].classList.add('select');
    current.classList.remove('select');
}

function choose() {
    let current = document.getElementsByClassName('select')[1];
    current.classList.remove('select');

    let id = current.parentElement.id === 'music' ? 'sound' : 'music';

    document.getElementById(id).children[0].classList.add('select');
}