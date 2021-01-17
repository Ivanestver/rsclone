import { variables } from "../variables";
import { Hero } from "./characters";
import { Bridge, Grass, Mountain, Town, Tree, Water } from "./nature";

class Map {
    constructor(name, map, coords) {
        this.name = name;
        this.map = map;
        this.coords = {
            x: coords.x,
            y: coords.y
        }
    }
}

export var river = new Map('River',
    [
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Bridge('Bridge', 'Bridge.png'), new Bridge('Bridge', 'Bridge.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Bridge('Bridge', 'Bridge.png'), new Bridge('Bridge', 'Bridge.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water(' River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')]
    ],
    { x: 0, y: 0}
);

export var bigLake = new Map('Big Lake',
    [
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water(' River', 'Water.png'), new Water(' River', 'Water.png'), new Water(' River', 'Water.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')]
    ],
    { x: 1, y: 0 }
);

export var forrest = new Map('Forrest',
    [
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')]
    ],
    { x: 0, y: 1 }
);

export var village = new Map('Village',
    [
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Town('Village', 'Village.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')]
    ],
    { x: 0, y: 2 }
);

export var town = new Map('Town',
    [
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Hero('Ivan', 100, 10, 100, 'Warrior.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Town('Big Town', 'Town.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')]
    ],
    { x: 1, y: 1 }
);

export var littleLake = new Map('Little Lake',
    [
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')]
    ],
    { x: 1, y: 2 }
);

export var Whole_Map = [
    [river, forrest, village],
    [bigLake, town, littleLake]
];

export function moveToAnotherLocation(row, column) {
    let True = false;

    let change = (x, y) => {
        variables.Map.map[variables.X][variables.Y] = variables.currentPlace;
        variables.Map = Whole_Map[x][y];
        True = true;
    };

    if (row < 0) {
        change(variables.Map.coords.x - 1,
            variables.Map.coords.y);
        variables.X = variables.Map.map.length - 1;
    }
    if (row === variables.Map.map.length) {
        change(variables.Map.coords.x + 1,
            variables.Map.coords.y);
        variables.X = 0;
    }
    if (column < 0) {
        change(variables.Map.coords.x,
            variables.Map.coords.y - 1);
        variables.Y = variables.Map.map.length - 1;
    }
    if (column === variables.Map.map.length) {
        change(variables.Map.coords.x,
            variables.Map.coords.y + 1);
        variables.Y = 0;
    }

    if (True) {
        variables.currentPlace = variables.Map.map[variables.X][variables.Y];
        variables.Map.map[variables.X][variables.Y] = variables.Hero;
    }

    return True;
}