import { audio } from "./classes/audio";
import { createHero } from "./createHero";
import { initMap } from "./main";
import { variables } from "./variables";

export function WriteName() {
    let nameWrapper = document.createElement('div');
    nameWrapper.classList.add('menuWrapper');
    nameWrapper.id = 'writeName';

    let name = document.createElement('div');
    name.classList.add('write-name', 'appearance');

    let input = document.createElement('input');
    input.id = 'input';
    input.classList.add('input');

    let buttons = document.createElement('div');
    buttons.classList.add('name-buttons');

    let enter = document.createElement('button');
    enter.textContent = 'Enter';
    enter.classList.add('name-button');
    enter.onclick = Enter;

    let back = document.createElement('button');
    back.textContent = 'Back';
    back.classList.add('name-button');
    back.onclick = Escape;

    buttons.appendChild(enter);
    buttons.appendChild(back);

    name.appendChild(input);
    name.appendChild(buttons);

    nameWrapper.appendChild(name);

    document.body.appendChild(nameWrapper);

    document.onkeydown = null;
    document.onkeyup = Input;
}

function Input(event) {

    if (event.key === 'Backspace') {
        audio.BackSpace();
        document.getElementById('input').value = document.getElementById('input').value.slice(0, document.getElementById('input').value.length - 1);
        return;
    }

    if (event.key === 'Enter') {
        audio.Choose();
        Enter(document.getElementById('input').value);
        return;
    }

    if (event.key === 'Escape') {
        Escape();
        return;
    }

    if (event.key.length > 1 || !event.key.match(/[a-zA-z]/)) {
        return;
    }

    document.getElementById('input').value += event.key;
    audio.Button();
}

function Escape() {
    document.getElementById('writeName').remove();
    audio.Cancel();

    createHero();
}

function Enter(name) {
    if (name === '') {
        return;
    }
    variables.Hero.Name = name;
    document.onkeyup = null;
    initMap();
    document.getElementById('writeName').remove();
}