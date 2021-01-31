import { moveToAnotherLocation } from "./classes/maps";
import { createFight, isFight } from "./fight";
import { paintMap } from "./main";
import { trading } from "./trading";
import { variables } from "./variables";
import { House } from './classes/nature'
import { Character } from "./classes/characters";
import { dialog } from "./dialog";
import { ids } from "./classes/task";
import { audio } from "./classes/audio";

export function move(event) {
    switch (event.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
            replace(variables.X - 1, variables.Y);
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            replace(variables.X, variables.Y - 1);
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            replace(variables.X + 1, variables.Y);
            break;
        case 'd':
        case 'ArrowRight':
            replace(variables.X, variables.Y + 1);
            break;
    } 
}

// replaces a cell with a hero
function replace(row, column) {

    if (!moveToAnotherLocation(row, column)) {
        if (variables.Map.map[row][column].IsWalkable) {
            let helpCell = variables.currentPlace;
            variables.currentPlace = variables.Map.map[row][column];
            variables.Map.map[row][column] = variables.Map.map[variables.X][variables.Y];
            variables.Map.map[variables.X][variables.Y] = helpCell;
            variables.X = row;
            variables.Y = column;
            paintMap();
            if (variables.Hero.task !== null && typeof variables.Hero.task.check === 'function') {
                variables.Hero.task.check(ids['carry']);
            }
        }
        else {
            if (variables.Map.map[row][column] instanceof House) {
                audio.Door();
                trading(variables.Map.map[row][column].trader);
            }

            if (variables.Map.map[row][column] instanceof Character && !variables.Map.map[row][column].isEnemy) {
                dialog(variables.Map.map[row][column]);
            }
        }

        if (isFight()) {
            let fightWrap = document.createElement('div');
            fightWrap.classList.add('fight-text-wrap', 'appearance');
            fightWrap.id = 'fightName';

            let fightText = document.createElement('span');
            fightText.textContent = 'FIGHT!!!';
            fightText.classList.add('fight-text');

            fightWrap.appendChild(fightText);

            document.body.appendChild(fightWrap);

            document.onkeydown = null;
            audio.StartFight();

            setTimeout(() => {
                document.getElementById('fightName').remove();
                createFight();
            }, 3000);
        }

        audio.Step();
    }
    else {
        paintMap();
    }
}