import { pauseMenu } from "./PauseMenu";
import { variables } from "./variables";

export function loadGame() {
    createLoad(getData());
    document.onkeydown = input;
}

function createLoad(data) {
    let wrap = document.createElement('div');
    wrap.classList.add('menuWrapper');

    wrap.id = 'load';

    let wrapper = document.createElement('div');
    wrapper.classList.add('load', 'appearance');
    wrapper.style.display = 'flex';

    let img = document.createElement('img');
    img.src = data.hero.src;
    let specs = document.createElement('table');

    let name = document.createElement('td');
    name.colSpan = 2;
    name.textContent = data.hero.name;
    name.classList.add('menu-item');

    let dataLine = document.createElement('tr');
    let date = document.createElement('td');
    date.textContent = data.date;
    date.classList.add('menu-item');
    let time = document.createElement('td');
    time.textContent = data.time;
    time.classList.add('menu-item');
    dataLine.appendChild(date);
    dataLine.appendChild(time);

    let specsLine = document.createElement('tr');
    let exp = document.createElement('td');
    exp.textContent = `Exp: ${data.hero.xp}`;
    exp.classList.add('menu-item');
    let money = document.createElement('td');
    money.textContent = `Money: ${data.hero.money}`;
    money.classList.add('menu-item');
    specsLine.appendChild(exp);
    specsLine.appendChild(money);

    specs.appendChild(name);
    specs.appendChild(dataLine);
    specs.appendChild(specsLine);

    wrapper.appendChild(img);
    wrapper.appendChild(specs);

    wrap.appendChild(wrapper);

    document.body.appendChild(wrap)
}

function getData() {
    let local = localStorage.getItem('ff');
    return JSON.parse(local);
}

function input(event) {
    if (event.key === 'Escape') {
        document.getElementById('load').remove();
        pauseMenu();
    }

    if (event.key === 'Enter') {
        Enter();
    }
}

function Enter() {

}