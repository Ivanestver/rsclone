import { DarkKnight, Hero } from "./classes/characters";
import { Grass } from "./classes/nature";

class Variables {
    constructor() {
        this.Map = [];
        this.Arena = [];
        this.mapSize = 6;
        this.imgWidth = 320;
        this.Hero = new Hero('Hero', 100, 10);

        // Coordinates of a hero
        this.X = 4;
        this.Y = 3;

        this.currentPlace = new Grass('green grass', 'Grass.png'); // where a hero is staying. It defines what type of ground is under him.

        for (let i = 0; i < this.mapSize; i++) {
            this.Arena.push([]);
            for (let j = 0; j < this.mapSize; j++) {
                if (i === 2 && j === 4) {
                    this.Arena[i].push(new DarkKnight(100));
                    continue;
                }

                if (i === 2 && j === 1) {
                    this.Arena[i].push(this.Hero);
                    continue;
                }

                this.Arena[i].push(new Grass('Grass', 'Grass.png'));
            }
        }
    }
}

export var variables = new Variables();