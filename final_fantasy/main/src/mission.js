import { audio } from "./classes/audio";
import { pauseMenu } from "./PauseMenu";
import { variables } from "./variables";

export function mission() {
    variables.Hero.task === null ? createNoMission() : createMission();

    document.onkeydown = input;
}

function createMission() {
    let wrap = document.createElement('div');
    wrap.classList.add('menuWrapper');
    wrap.id = 'mission';

    let missionWrap = document.createElement('div');
    missionWrap.classList.add('appearance');
    missionWrap.style.display = 'flex';
    missionWrap.style.flexDirection = 'column';
    missionWrap.style.justifyContent = 'space-around';
    missionWrap.style.alignItems = 'center';
    missionWrap.style.width = '30vw';
    missionWrap.style.height = '50vh';

    let missionTitle = document.createElement('span');
    missionTitle.textContent = 'Mission';
    missionTitle.classList.add('menu-item');

    let kill = document.createElement('span');
    kill.textContent = `Kill ${variables.Hero.task.toDo.enemyName}`;
    kill.classList.add('menu-item');

    let killCount = document.createElement('span');
    killCount.textContent = `Count: ${variables.Hero.task.toDo.complete}`;
    killCount.classList.add('menu-item');

    let killDone = document.createElement('span');
    killDone.textContent = `Done: ${variables.Hero.task.toDo.done}`;
    killDone.classList.add('menu-item');

    missionWrap.appendChild(missionTitle);
    missionWrap.appendChild(kill);
    missionWrap.appendChild(killCount);
    missionWrap.appendChild(killDone);

    wrap.appendChild(missionWrap);

    document.body.appendChild(wrap);
}

function createNoMission() {
    let wrap = document.createElement('div');
    wrap.classList.add('menuWrapper');
    wrap.id = 'mission';

    let message = document.createElement('span');
    message.textContent = 'You are not completing a mission. Press Escape to get back';
    message.classList.add('menu-item');

    wrap.appendChild(message);

    document.body.appendChild(wrap);
}

function input(event) {
    if (event.key === 'Escape') {
        audio.Cancel();
        pauseMenu();
        document.getElementById('mission').remove();
    }
}