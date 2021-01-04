import { Hero } from "./classes/characters";
import { imgWidth, Map, mapSize } from "./variables";

const { Mountain, Grass } = require("./classes/nature");
var main = document.getElementsByClassName('main')[0];

document.addEventListener('DOMContentLoaded', () => {
    // set a map 
    /*for (let i = 0; i < mapSize; i += 1) {
        Map.push([]);
    }*/
    Map.push([new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')]);
    Map.push([new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')]);
    Map.push([new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')]);
    Map.push([new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Hero('Hero', 100, 10), new Mountain('Mountain', 'Mountain.png')]);
    paintMap();
});

export function paintMap() {
    for (let i = 0; i < mapSize; i++) {
        for (let j = 0; j < mapSize; j++) {
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