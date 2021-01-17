import { DarkKnight, Hero } from "./classes/characters";
import { town } from "./classes/maps";
import { Grass } from "./classes/nature";

class Variables {
    constructor() {
        this.Map = town;
        this.Arena = [];
        this.mapSize = 6;
        this.imgWidth = 320;
        this.hero = null;

        // Coordinates of a hero
        this.X = 1;
        this.Y = 3;
        this.enemyCoordinates = { x: 2, y: 4 };

        this.currentPlace = new Grass('Grass', 'Grass.png'); // where a hero is staying. It defines what type of ground is under him.
    }

    get Hero() {
        return this.hero;
    }

    set Hero(value) {
        this.hero = value;

        for (let i = 0; i < this.mapSize; i++) {
            this.Arena.push([]);
            for (let j = 0; j < this.mapSize; j++) {
                if (i === 2 && j === 4) {
                    this.Arena[i].push(new DarkKnight(100, 10, 10));
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