import { mainMenu } from "./mainMenu";

const delay = 10000;

document.addEventListener('DOMContentLoaded', () => {
    mainMenu();
});

export function StartVideo() {
    let wrap = document.createElement('div');
    wrap.classList.add('menuWrapper');
    document.body.appendChild(wrap);
    wrap.id = 'video';

    createNames(wrap);

    setTimeout(() => {
        wrap.innerHTML = '';
        createLogo(wrap);
    }, delay);

    setTimeout(() => {
        wrap.innerHTML = '';
        createPress(wrap);
    }, delay * 2);

    document.onkeydown = function (event) {
        document.getElementById('video').remove();
        mainMenu();
    }
}

function createNames(wrap) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('video-wrap');

    let devText = document.createElement('span');
    devText.textContent = 'Developers';
    devText.classList.add('video-text');
    devText.style.fontSize = '6rem';

    let nameWrap = document.createElement('div');
    nameWrap.classList.add('video-text-wrap');

    let myName = document.createElement('span');
    myName.textContent = 'Ivan Patrenkov';
    myName.classList.add('video-text', 'video-text-name');

    let myGit = document.createElement('span');
    myGit.textContent = 'GitHub: Ivanestver';
    myGit.classList.add('video-text', 'video-text-name');

    nameWrap.appendChild(myName);
    nameWrap.appendChild(myGit);

    wrapper.appendChild(devText);
    wrapper.appendChild(nameWrap);

    wrap.appendChild(wrapper);
    wrapper.classList.add('video');
}

function createLogo(wrap) {
    let wrapper = document.createElement('div');
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.background = 'aliceblue';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.justifyContent = 'space-around';
    wrapper.style.alignItems = 'center';

    let logo = document.createElement('img');
    logo.src = './assets/course.svg';

    let link = document.createElement('a');
    link.textContent = 'https://rs.school/js/';
    link.href = 'https://rs.school/js/';
    link.style.fontSize = '5rem';
    link.target = '_blank';

    wrapper.appendChild(logo);
    wrapper.appendChild(link);

    wrap.appendChild(wrapper);
    wrapper.classList.add('video');
}

function createPress(wrap) {
    let con = document.createElement('p');
    con.textContent = 'Press any button to continue';
    con.classList.add('video-text');
    con.style.fontSize = '6rem';

    wrap.appendChild(con);
    con.classList.add('videoEnd');
}