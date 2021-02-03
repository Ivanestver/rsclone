 import { input, paintMap } from "../main";
import { variables } from "../variables";
import { armories, Clothes, LeatherArmory } from "./armories";
import { audio } from "./audio";
import { Character, DarkKnight, Enemy, Hero } from "./characters";
import { Bridge, Grass, Mountain, Town, Tree, Water, Wall, Village, Road, House } from "./nature";
import { foods } from "./supplies";
import { killSomeone } from "./task";
import { Trader } from "./trader";
import { IronSword, weapons, WoodenAxe, WoodenSword, IronAxe } from "./weapons";

var isTown = false;

var armoriesVillageTrader = new Trader('Armories', 0.2, [LeatherArmory]);
var weaponsVillageTrader = new Trader('Weapons', 0.2, [WoodenSword, WoodenAxe]);
var suppliesVillageTrader = new Trader('Supplies', 0.2, [foods['apple'], foods['bread'], foods['fish']]);

var armoriesCityTrader = new Trader('Armories', 0.2, [LeatherArmory, Clothes]);
var weaponsCityTrader = new Trader('Weapons', 0.2, [WoodenSword, WoodenAxe, IronSword, IronAxe]);
var suppliesCityTrader = new Trader('Supplies', 0.2, [foods['apple'], foods['bread'], foods['fish'], foods['meat']]);

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

export var enemies = {
    // river
    'Scary Fish': new Enemy('Scary Fish', 'Fish.png', 200, 50, 55, 60),
    'Zombie': new Enemy('Zombie', 'Zombie.png', 192, 48, 50, 60),
    'Scorpion': new Enemy('Scorpion', 'Scorpion.png', 220, 52, 60, 60),
    // forest
    'Terrible Wolf': new Enemy('Terrible Wolf', 'Wolf.png', 120, 20, 25, 25),
    'Troll': new Enemy('Troll', 'Troll.png', 110, 23, 22, 21),
    'Living Tree': new Enemy('Living Tree', 'LivingTree.png', 160, 22, 26, 27),
    // field
    'Crazy Villager': new Enemy('Crazy Villager', 'Villager.png', 170, 40, 50, 56),
    'Hell Cow': new Enemy('Hell Cow', 'HellCow.png', 200, 42, 53, 59),
    'Wasp': new Enemy('Wasp', 'Wasp.png', 180, 42, 51, 57),
    // big lake
    'Horrible Crab': new Enemy('Horrible Crab', 'Crab.png', 220, 55, 60, 63),
    'FishMan': new Enemy('FishMan', 'FishMan.png', 210, 51, 57, 60),
    'Big Lake Monster': new Enemy('Big Lake Monster', 'LochNess.png', 300, 100, 100, 100),
    // town
    'Dark Knight': new Enemy('Dark Knight', 'DarkKnight.png', 100, 18, 10, 15),
    'Robber': new Enemy('Robber', 'Robber.png', 110, 19, 12, 17),
    'Goblin': new Enemy('Goblin', 'Goblin.png', 115, 2, 13, 18),
    // small lake
    'Drowned': new Enemy('Drowned', 'Drowned.png', 150, 30, 27, 27),
    'Snake': new Enemy('Snake', 'Snake.png', 170, 32, 29, 28),
    'Mermaid': new Enemy('Mermaid', 'Mermaid.png', 160, 31, 27, 28),
};

export var npc = {
    'Old Man': new Character('Old man', false, 'Old.png', 10, 10, false, 50, 50, killSomeone.desc('Great! I am waiting for you killing them',
                                                                                                   'It\'s a pity!', 20, 50)),
};    

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
    [enemies['Scary Fish'], enemies['Zombie'], enemies['Scorpion']]
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
    [enemies['Horrible Crab'], enemies['FishMan'], enemies['Big Lake Monster']]
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
    [enemies['Terrible Wolf'], enemies['Troll'], enemies['Living Tree']]
);

export var field = new Map('Village',
    [
        [new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Water('River', 'Water.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Village('Village', 'Village.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')],
        [new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Grass('Grass', 'Grass.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Tree('Tree', 'Tree.png'), new Mountain('Mountain', 'Mountain.png')]
    ],
    { x: 0, y: 2 },
    [enemies['Crazy Villager'], enemies['Hell Cow'], enemies['Wasp']]
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
    [enemies['Dark Knight'], enemies['Robber'], enemies['Goblin']]
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
    [enemies['Drowned'], enemies['Snake'], enemies['Mermaid']]
);

export var city = new Map('Big City',
    [
        [new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Road('City Road', 'CityRoad.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Road('City Road', 'CityRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Road('City Road', 'CityRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new House('Weapons', 'Weapons.png', weaponsCityTrader), new Grass('Grass', 'Grass.png'), new Road('City Road', 'CityRoad.png'), new Grass('Grass', 'Grass.png'), new House('Supplies', 'Supplies.png', suppliesCityTrader), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Road('City Road', 'CityRoadRotated.png'), new Road('City Road', 'CityRoadRotated.png'), new Road('City Road', 'CityRoadRotated.png'), new Road('City Road', 'CityRoadRotated.png'), new Road('Crossroad', 'Crossroad.png'), new Road('City Road', 'CityRoadRotated.png'), new Road('City Road', 'CityRoadRotated.png'), new Road('City Road', 'CityRoadRotated.png'), new Road('City Road', 'CityRoadRotated.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new House('Armory', 'Armories.png', armoriesCityTrader), new Grass('Grass', 'Grass.png'), new Road('City Road', 'CityRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), npc['Old Man'], new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Road('City Road', 'CityRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Road('City Road', 'CityRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Wall('City Wall', 'Wall.png')],
        [new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Road('City Road', 'CityRoad.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png'), new Wall('City Wall', 'Wall.png')]
    ],
    {},
    []
);

export var village = new Map('Village',
    [
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Road('Village Road', 'SandRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Road('Village Road', 'SandRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png'), new House('Weapons', 'Weapons.png', weaponsVillageTrader), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Road('Village Road', 'SandRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Road('Village Road', 'SandRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Grass('Grass', 'Grass.png'), new House('Armory', 'Armories.png', armoriesVillageTrader), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Road('Village Road', 'SandRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png'), new Road('Village Road', 'SandRoadRotated.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new House('Supplies', 'Supplies.png', suppliesVillageTrader), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')],
        [new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png'), new Road('Village Road', 'SandRoad.png'), new Grass('Grass', 'Grass.png'), new Grass('Grass', 'Grass.png')]
    ],
    {},
    []
);

export var Whole_Map = [
    [river, forrest, field],
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
            let coords = {
                X: 0,
                Y: 0
            }; // find the town
            let location = variables.Map === city ? town : field;
            location.map.forEach((part, Index) => {
                part.forEach((obj, index) => {
                    if (obj instanceof Town || obj instanceof Village) {
                        coords.X = Index;
                        coords.Y = index;
                        return;
                    }
                });
            });

            variables.Map.map[variables.X][variables.Y] = variables.currentPlace;

            if (row < 0) {
                variables.X = coords.X - 1;
                variables.Y = coords.Y;
            }

            if (row === variables.Map.map.length) {
                variables.X = coords.X + 1;
                variables.Y = coords.Y;
            }

            if (column < 0) {
                variables.X = coords.X;
                variables.Y = coords.Y - 1;
            }

            if (column === variables.Map.map.length) {
                variables.X = coords.X;
                variables.Y = coords.Y + 1;
            }

            variables.Map = location;

            audio.Walk();
        }
        else {
            variables.Map.map[variables.X][variables.Y] = variables.currentPlace;
            variables.Map = Whole_Map[x][y];
        }

        True = true;
    };

    if (row < 0) {
        change(variables.Map.coords.x - 1,
            variables.Map.coords.y);
        if (isTown) {
            isTown = false;
        }
        else {
            variables.X = variables.Map.map.length - 1;
        }
    }
    if (row === variables.Map.map.length) {
        change(variables.Map.coords.x + 1,
            variables.Map.coords.y);
        if (isTown) {
            isTown = false;
        }
        else {
            variables.X = 0;
        }
    }
    if (column < 0) {
        change(variables.Map.coords.x,
            variables.Map.coords.y - 1);
        if (isTown) {
            isTown = false;
        }
        else {
            variables.Y = variables.Map.map.length - 1;
        }
    }
    if (column === variables.Map.map.length) {
        change(variables.Map.coords.x,
            variables.Map.coords.y + 1);
        if (isTown) {
            isTown = false;
        }
        else {
            variables.Y = 0;
        }
    }

    if (True) {
        variables.currentPlace = variables.Map.map[variables.X][variables.Y];
        variables.Map.map[variables.X][variables.Y] = variables.Hero;
    }

    return True;
}

export function isCity(x, y) {
    if ((0 <= x && x < variables.Map.map.length) && (0 <= y && y < variables.Map.map.length)
        && (variables.Map.map[x][y] instanceof Town || variables.Map.map[x][y] instanceof Village)) {
        variables.Map.map[variables.X][variables.Y] = variables.currentPlace;
        let location = variables.Map.map[x][y] instanceof Town ? city : village;

        if (y > variables.Y) { // if a player came from the left side
            variables.X = Math.floor(location.map.length / 2);
            variables.Y = 0;
        }
        else if (y < variables.Y) { // if a player came from the right side
            variables.X = Math.floor(location.map.length / 2);
            variables.Y = variables.Map.map.length - 1;
        }
        else if (x > variables.X) { // if a player came from above
            variables.X = 0;
            variables.Y = Math.floor(location.map.length / 2);
        }
        else if (x < variables.X) { // if a player came from below
            variables.X = variables.Map.map.length - 1;
            variables.Y = Math.floor(location.map.length / 2);
        }

        variables.currentPlace = location.map[variables.X][variables.Y];

        if (variables.Map.map[x][y] instanceof Town) {
            audio.City();
        }
        else {
            audio.Village();
        }

        paintMap(variables.Map.map[x][y] instanceof Town ? city : village);

        return true;
    }

    return false;
}