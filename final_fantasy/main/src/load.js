import { variables } from "./variables";

export function loadGame() {
    let wrap = document.createElement('div');
    wrap.classList.add('menuWrapper');

    wrap.id = 'load';

    let wrapper = document.createElement('div');
    wrapper.classList.add('appearance');
    wrapper.style.display = 'flex';

    let img = document.createElement('img');
    img.src = variables.Hero.Src;
    let specs = document.createElement('table');

    let name = document.createElement('td');
    name.colSpan = 2;
    name.textContent = variables.Hero.Name;
    name.classList.add('menu-item');

    let dataLine = document.createElement('tr');
    let date = document.createElement('td');
    date.textContent = '10.01.2021';
    date.classList.add('menu-item');
    let time = document.createElement('td');
    time.textContent = '17:35';
    time.classList.add('menu-item');
    dataLine.appendChild(date);
    dataLine.appendChild(time);

    let specsLine = document.createElement('tr');
    let exp = document.createElement('td');
    exp.textContent = `Exp: ${variables.Hero.xp}`;
    exp.classList.add('menu-item');
    let money = document.createElement('td');
    money.textContent = `Money: ${variables.Hero.money}`;
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