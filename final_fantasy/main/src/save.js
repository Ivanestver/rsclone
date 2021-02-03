import { audio } from "./classes/audio";
import { pauseMenu } from "./PauseMenu";
import { variables } from "./variables";

export function saveGame() {
    createSave();

    if (localStorage.getItem('ff') === null) {
        localStorage.setItem('ff', '');
    }

    document.onkeydown = input;
}

function createSave() {
    let wrap = document.createElement('div');
    wrap.classList.add('menuWrapper');

    wrap.id = 'save';

    let saveWrap = document.createElement('div');
    saveWrap.classList.add('appearance');
    saveWrap.style.width = '70vw';
    saveWrap.style.height = '30vw';
    saveWrap.style.display = 'flex';
    saveWrap.style.flexDirection = 'column';
    saveWrap.style.justifyContent = 'space-around';
    saveWrap.style.alignItems = 'center';

    let ask = document.createElement('span');
    ask.textContent = 'Do you really want to save game?';
    ask.classList.add('menu-item');

    let yes = document.createElement('span');
    yes.textContent = 'Yes';
    yes.classList.add('menu-item', 'select');
    let no = document.createElement('span');
    no.classList.add('menu-item');
    no.textContent = 'No';

    saveWrap.appendChild(ask);
    saveWrap.appendChild(yes);
    saveWrap.appendChild(no);

    wrap.appendChild(saveWrap);

    document.body.appendChild(wrap);
}

function input(event) {
    let current = document.getElementsByClassName('select')[1];

    switch (event.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
            if (current.textContent === 'No') {
                audio.MenuMove();
                current.parentElement.children[1].classList.add('select');
                current.classList.remove('select');
            }
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            if (current.textContent === 'Yes') {
                audio.MenuMove();
                current.parentElement.children[2].classList.add('select');
                current.classList.remove('select');
            }
            break;
        case 'Enter':
            audio.Choose();
            Enter(current.textContent);
            break;
        case 'Escape':
            audio.Cancel();
            Enter('No');
            break;
    }
}

function Enter(option = 'No') {
    if (option === 'Yes') {
        save();
    }

    document.getElementById('save').remove();
    pauseMenu();
}

function save() {
    let date = new Date();

    let saveObj = {
        date: `${date.getDate()}.${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}.${date.getFullYear()}`,
        time: `${date.getHours()}:${date.getMinutes()}`,
        task: !variables.Hero.task ? null : variables.Hero.task.id,
        hero: variables.Hero
    }

    localStorage.setItem('ff', JSON.stringify(saveObj));
}