import { audio } from "./classes/audio";
import { mainMenu } from "./mainMenu";

export function about() {
    createAbout();

    document.onkeydown = function (event) {
        if (event.key === 'Escape') {
            audio.Cancel();
            mainMenu();
            document.getElementById('about').remove();
        }
    };
}

function createAbout() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('menuWrapper');
    wrapper.id = 'about';

    let aboutWrap = document.createElement('div');
    aboutWrap.classList.add('grid-about', 'appearance');

    let dev = document.createElement('span');
    dev.textContent = 'Developer';
    dev.classList.add('menu-item');

    let name = document.createElement('span');
    name.textContent = 'Ivan Patrenkov';
    name.classList.add('menu-item');

    let gitTitle = document.createElement('span');
    gitTitle.textContent = 'GitHub';
    gitTitle.classList.add('menu-item');

    let gitLink = document.createElement('a');
    gitLink.textContent = 'https://github.com/Ivanestver';
    gitLink.href = 'https://github.com/Ivanestver';
    gitLink.target = '_blank';
    gitLink.classList.add('menu-item');

    aboutWrap.appendChild(dev);
    aboutWrap.appendChild(name);
    aboutWrap.appendChild(gitTitle);
    aboutWrap.appendChild(gitLink);

    wrapper.appendChild(aboutWrap);

    document.body.appendChild(wrapper);
}