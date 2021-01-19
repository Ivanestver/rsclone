import { moveToAnotherLocation } from "./classes/maps";
import { createFight, isFight } from "./fight";
import { paintMap } from "./main";
import { variables } from "./variables";

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
        }

        /*if (isFight()) {
            let fightWrap = document.createElement('div');
            fightWrap.classList.add('fight-text-wrap', 'appearance');
            fightWrap.id = 'fightName';

            let fightText = document.createElement('span');
            fightText.textContent = 'FIGHT!!!';
            fightText.classList.add('fight-text');

            fightWrap.appendChild(fightText);

            document.body.appendChild(fightWrap);

            document.onkeydown = null;

            setTimeout(() => {
                document.getElementById('fightName').remove();
                createFight();
            }, 3000);
        }*/
    }
    else {
        paintMap();
    }
}