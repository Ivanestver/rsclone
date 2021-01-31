import { town } from "./classes/maps";
import { Grass } from "./classes/nature";

class Variables {
    constructor() {
        this.Map = town;
        this.Arena = {
            map: []
        };
        this.mapSize = 9;
        this.imgWidth = 320;
        this.hero = null;

        // Coordinates of a hero
        this.X = 1;
        this.Y = 3;
        this.enemyCoordinates = { x: 4, y: 7 };

        this.currentPlace = new Grass('Grass', 'Grass.png'); // where a hero is staying. It defines what type of ground is under him.
    }

    get Hero() {
        return this.hero;
    }

    set Hero(value) {
        this.hero = value;

        this.Arena.map = [];

        for (let i = 0; i < this.mapSize; i++) {
            this.Arena.map.push([]);
            for (let j = 0; j < this.mapSize; j++) {
                if (i === this.enemyCoordinates.x && j === this.enemyCoordinates.y) {
                    this.Arena.map[i].push(undefined);
                    continue;
                }

                if (i === 4 && j === 2) {
                    this.Arena.map[i].push(this.Hero);
                    continue;
                }

                this.Arena.map[i].push(new Grass('Grass', 'Grass.png'));
            }
        }
    }
}

export var variables = new Variables();