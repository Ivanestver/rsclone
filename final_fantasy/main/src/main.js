import { createFight } from "./fight";
import { move } from "./move";
import { variables } from "./variables";
import { pauseMenu } from "./PauseMenu";
import { Hero } from "./classes/characters";

const { Mountain, Grass } = require("./classes/nature");
var main = document.getElementsByClassName('main')[0];


document.addEventListener('DOMContentLoaded', initMap);

export function initMap() {
    if (variables.Hero === null) {
        variables.Hero = new Hero('Ivan', 100, 10, 100, 'Warrior.png');
    }

    for (let i = 0; i < variables.mapSize; i += 1) {
        variables.Map.push([]);
    }

    for (let i = 0; i < variables.mapSize; i += 1) {
        variables.Map[0].push(new Mountain('Mountain', 'Mountain.png'));
        variables.Map[variables.mapSize - 1].push(new Mountain('Mountain', 'Mountain.png'));
    }

    variables.Map[1].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));
    variables.Map[2].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));
    variables.Map[3].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));
    variables.Map[4].push(new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), variables.Hero, new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png'));

    document.onkeydown = input;
    paintMap();
}

export function paintMap(Map = variables.Map) {
    main.innerHTML = "";

    for (let i = 0; i < variables.mapSize; i++) {
        for (let j = 0; j < variables.mapSize; j++) {
            let part = document.createElement('section');
            let img = document.createElement('img');

            part.classList.add('cell');
            img.classList.add('cell-img');

            img.src = Map[i][j].Src;

            part.appendChild(img);

            main.appendChild(part);
        }
    }
}

export function input(event) {
    if (event.key === 'c') {
        createFight(event);
    }
    else if (event.key === 'Escape') {
        pauseMenu();
    }
    else {
        move(event);
    }
}