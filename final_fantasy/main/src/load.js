import { Hero } from "./classes/characters";
import { initMap } from "./main";
import { pauseMenu } from "./PauseMenu";
import { variables } from "./variables";
import { audio } from "./classes/audio";
import { mainMenu } from "./mainMenu";

var data = null;
var isPause = true;

export function loadGame(IsPause = true) {
    isPause = IsPause;
    if (!localStorage.getItem('ff')) {
        createNoLoad();

        document.onkeydown = function (event) {
            if (event.key === 'Escape') {
                input(event);
            }
        };

        return;
    }

    data = getData();
    createLoad();
    document.onkeydown = input;
}

function createLoad() {
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

function createNoLoad() {
    let wrap = document.createElement('div');
    wrap.classList.add('menuWrapper');
    wrap.id = 'load';

    let message = document.createElement('span');
    message.textContent = 'There is no saved game. Press Escape to get back';
    message.classList.add('menu-item');

    wrap.appendChild(message);

    document.body.appendChild(wrap);
}

function getData() {
    let local = localStorage.getItem('ff');
    return JSON.parse(local);
}

function input(event) {
    if (event.key === 'Escape') {
        audio.Cancel();

        isPause ? pauseMenu() : mainMenu();

        document.getElementById('load').remove();
    }

    if (event.key === 'Enter') {
        audio.Choose();
        data.hero.src = data.hero.src.split('/')[4];
        variables.Hero = new Hero(data.hero, data.task);
        initMap();
        document.getElementById('load').remove();
        if (document.getElementById('pause') !== null) {
            document.getElementById('pause').remove();
        }        
    }
}