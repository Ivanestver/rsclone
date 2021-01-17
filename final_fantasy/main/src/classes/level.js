class Level {
    constructor(maxHp, maxMp, xpToReach, power) {
        this.maxHp = maxHp;
        this.maxMp = maxMp;
        this.xpToReach = xpToReach;
        this.power = power;
    }
}

export var levels = {
    1: new Level(100, 100, 0, 5),
    2: new Level(150, 150, 10, ),
    3: new Level(200, 200, 150),
    4: new Level(250, 230, 200),
    5: new Level(300, 300, 250)
}

export function checkLevel(hero, text) {
    if (hero.level + 1 <= Object.keys(levels).length && hero.xp >= levels[hero.level + 1].xpToReach) {
        hero.level++;
        hero.maxHp = levels[hero.level].maxHp;
        hero.maxMp = levels[hero.level].maxMp;
        hero.hp = levels[hero.level].maxHp;
        hero.mana = levels[hero.level].maxMp;

        setTimeout(() => {
            text.textContent = `You got ${hero.level} level!`;
        }, 6000);

        setTimeout(() => {
            text.textContent = `Your HP: ${hero.hp}`;
        }, 8000);

        setTimeout(() => {
            text.textContent = `Your mana: ${hero.mana}`;
        }, 12000);

        return 14000;
    }
    else {
        return 6000;
    }
}