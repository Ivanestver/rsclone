import { paintMap } from "../main";
import { variables } from "../variables";
import { DarkKnight, Enemy, Hero } from "./characters";
import { Bridge, Grass, Mountain, Town, Tree, Water, Wall } from "./nature";

var isTown = false;

class Map {
    constructor(name, map, coords, enemies) {
        this.name = name;
        this.map = map;
        this.coords = {
            x: coords.x,
            y: coords.y
        };
        this.enemies = enemies
    }
}

export var river = new Map('River',
    [
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Bridge('Bridge', 'Bridge.png'), new Bridge('Bridge', 'Bridge.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Bridge('Bridge', 'Bridge.png'), new Bridge('Bridge', 'Bridge.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water(' River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')]
    ],
    { x: 0, y: 0 },
    [new Enemy('Scary Fish', 'Fish.png', 200, 50, 55, 60)]
);

export var bigLake = new Map('Big Lake',
    [
        [new Mountain('Mountain', 'Mountain.png'), new Water('River', 'Water.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'),],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'),],
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')]
    ],
    { x: 1, y: 0 },
    [new Enemy('Horrible Crab', 'Crab.png', 100, 15, 15, 15)]
);

export var forrest = new Map('Forrest',
    [
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Water('River', 'Water.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')]
    ],
    { x: 0, y: 1 },
    [new Enemy('Terrible Wolf', 'Wolf.png', 120, 20, 25, 25)]
);

export var village = new Map('Village',
    [
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Town('Village', 'Village.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')]
    ],
    { x: 0, y: 2 },
    [new Enemy('Crazy Villager', 'Villager.png', 170, 30, 40, 25)]
);

export var town = new Map('Town',
    [
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Town('Big Town', 'Town.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')]
    ],
    { x: 1, y: 1 },
    [new Enemy('Dark Knight', 'DarkKnight.png', 100, 10, 10, 10)]
);

export var littleLake = new Map('Little Lake',
    [
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Water('River', 'Water.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')]
    ],
    { x: 1, y: 2 },
    [new Enemy('Drowned', 'Drowned.png', 150, 45, 50, 30)]
);

export var city = new Map('Big City',
    [
        [new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png')]
    ],
    { x: 1, y: 2 },
    []
);

export var Whole_Map = [
    [river, forrest, village],
    [bigLake, town, littleLake]
];

export function moveToAnotherLocation(row, column) {
    if (isCity(row, column)) {
        isTown = true;
        return isTown;
    }

    let True = false;

    let change = (x, y) => {
        if (isTown) {

        }
        else {
            variables.Map.map[variables.X][variables.Y] = variables.currentPlace;
            variables.Map = Whole_Map[x][y];
            True = true;
        }
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

export function isCity(x, y) {
    if ((variables.Map.map[x] !== undefined && variables.Map.map[x][y] !== undefined) && variables.Map.map[x][y] instanceof Town) {
        variables.Map.map[variables.X][variables.Y] = variables.currentPlace;

        if (y > variables.Y) { // if a player came from the left side
            variables.X = Math.floor(city.map.length / 2);
            variables.Y = 0;
        }
        
        if (y < variables.Y) { // if a player came from the right side
            variables.X = Math.floor(city.map.length / 2);
            variables.Y = variables.Map.map.length - 1;
        }
        
        if (x > variables.X) { // if a player came from above
            variables.X = 0;
            variables.Y = Math.floor(city.map.length / 2);
        }
        
        if (x < variables.X) { // if a player came from below
            variables.X = variables.Map.map.length - 1;
            variables.Y = Math.floor(city.map.length / 2);
        }

        paintMap(city);

        return true;
    }

    return false;
}