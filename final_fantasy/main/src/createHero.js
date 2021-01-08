import { Hero } from "./classes/characters";
import { initMap } from "./main";
import { mainMenu } from "./mainMenu";
import { variables } from "./variables";
import { WriteName } from "./writeName";

var heros = ['Warrior', 'Magician'];

export function createHero() {
    createMenu();
    document.onkeydown = click;
}

function createMenu() {
    let createWindow = document.createElement('div');
    createWindow.classList.add('menuWrapper');
    createWindow.style.justifyContent = 'space-evenly';
    createWindow.id = 'create';

    let chooseWindow = document.createElement('div');
    chooseWindow.classList.add('choose-window', 'appearance');

    let leftArrow = document.createElement('span');
    leftArrow.textContent = '<';
    leftArrow.classList.add('arrow');

    let imgWrap = document.createElement('div');
    imgWrap.style.display = 'flex';
    imgWrap.style.flexDirection = 'column';
    imgWrap.style.height = '68%';
    imgWrap.style.justifyContent = 'space-between';
    imgWrap.style.alignItems = 'center';

    let img = document.createElement('img');
    img.src = './assets/sprites/Characters/Warrior.png';
    img.classList.add('choose-img');
    img.id = 'img';

    let desc = document.createElement('span');
    desc.id = 'desc';
    desc.textContent = 'Warrior';
    desc.style.textAlign = 'center';
    desc.style.color = '#fff';
    desc.style.fontSize = '2.5rem';

    imgWrap.appendChild(img);
    imgWrap.appendChild(desc);

    let rightArrow = document.createElement('span');
    rightArrow.textContent = '>';
    rightArrow.classList.add('arrow');

    chooseWindow.appendChild(leftArrow);
    chooseWindow.appendChild(imgWrap);
    chooseWindow.appendChild(rightArrow);

    createWindow.appendChild(chooseWindow);

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let select = document.createElement('button');
    select.textContent = 'OK';
    select.classList.add('button', 'appearance', 'select');
    let back = document.createElement('button');
    back.textContent = 'Back';
    back.classList.add('button', 'appearance');

    buttons.appendChild(select);
    buttons.appendChild(back);

    createWindow.appendChild(buttons);

    document.body.appendChild(createWindow);
}

function click(event) {
    switch (event.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
            changeButton();
            break;
        case 'a':
        case 'A':
        case 'LeftArrow':
            changeHero(1);
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            changeButton();
            break;
        case 'd':
        case 'D':
        case 'RightArrow':
            changeHero();
            break;
        case 'Enter':
            Enter(document.getElementsByClassName('select')[0].textContent);
            break;
    }
}

function changeHero(dir = 0) {
    let who = heros[Math.abs((heros.indexOf(document.getElementById('desc').textContent) + ((-1) ** dir))) % heros.length]
    document.getElementById('img').src = `./assets/sprites/Characters/${who}.png`;
    document.getElementById('desc').textContent = who;
}

function changeButton() {
    let btn = document.getElementsByClassName('select')[0];
    if (btn.textContent === 'OK') {
        btn.parentElement.children[1].classList.add('select');
    }
    else {
        btn.parentElement.children[0].classList.add('select');
    }
    btn.classList.remove('select');
}

function Enter(option) {
    if (option === 'OK') {
        variables.Hero = new Hero('', 100, 10, 100, `${document.getElementById('desc').textContent}.png`);
        WriteName();
        document.getElementById('create').remove();
    }
    else {
        document.getElementById('create').remove();
        mainMenu();
    }
}