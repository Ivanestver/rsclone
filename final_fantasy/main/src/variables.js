import { Grass } from "./classes/nature";

class Variables {
    constructor() {
        this.Map = [];
        this.mapSize = 4;
        this.imgWidth = 320;

        // Coordinates of a hero
        this.X = 3;
        this.Y = 2;

        this.currentPlace = new Grass('green grass', 'Grass.png'); // where a hero is staying. It defines what type of ground is under him.
    }

    /*Map;
    mapSize;
    imgWidth;

    // Coordinates of a hero
    X;
    Y;

    currentPlace; // where a hero is staying. It defines what type of ground is under him.*/
}

export var variables = new Variables();