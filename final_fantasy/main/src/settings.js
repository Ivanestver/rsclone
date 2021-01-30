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

    let soundText = document.createElement('span');
    soundText.classList.add('menu-item');
    soundText.textContent = 'Sound';

    let soundWrap = document.createElement('div');
    soundWrap.style.width = '100%';
    soundWrap.style.display = 'flex';
    soundWrap.style.justifyContent = 'space-evenly';

    let yes = document.createElement('span');
    yes.classList.add('menu-item', 'select');
    yes.textContent = 'On';

    let no = document.createElement('span');
    no.classList.add('menu-item');
    no.textContent = 'Off';

    soundWrap.appendChild(yes);
    soundWrap.appendChild(no);

    settingsWrap.appendChild(soundText);
    settingsWrap.appendChild(soundWrap);

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
            change();
            break;
        case 'Enter':
            let current = document.getElementsByClassName('select')[1];
            audio.isMuted = current.textContent === 'On' ? false : true;
        case 'Escape':
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