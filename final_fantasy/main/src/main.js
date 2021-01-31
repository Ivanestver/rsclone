import { move } from "./move";
import { variables } from "./variables";
import { pauseMenu } from "./PauseMenu";
import { Hero } from "./classes/characters";
import { town } from "./classes/maps";
import { audio } from "./classes/audio";

var main = document.getElementsByClassName('main')[0];

export function initMap() {
    if (variables.Hero === null) {
        variables.Hero = new Hero('Ivan', 100, 10, 100, 'Warrior.png');
    }

    document.onkeydown = input;
    paintMap(town);
    audio.Walk();
}

export function paintMap(Map = variables.Map) {
    main.innerHTML = "";
    if (Map != variables.Map) {
        variables.Map = Map;
    }

    if (Map !== variables.Arena) {
        variables.Map.map[variables.X][variables.Y] = variables.Hero;
    }

    for (let i = 0; i < Map.map.length; i++) {
        for (let j = 0; j < Map.map.length; j++) {
            let part = document.createElement('section');
            let img = document.createElement('img');

            part.classList.add('cell');
            img.classList.add('cell-img');

            img.src = Map.map[i][j].Src;

            part.appendChild(img);

            main.appendChild(part);
        }
    }
}

export function input(event) {

    if (event.key === 'Escape') {
        audio.KeyBoard();
        audio.Stop();
        pauseMenu();
    }
    else {
        move(event);
    }
}