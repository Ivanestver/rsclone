import { paintMap } from "./main";
import { variables } from "./variables";

export function move(event) {
    switch (event.key) {
        case 'w':
        case 'W':
            if (variables.Map[variables.X - 1][variables.Y] !== undefined && variables.Map[variables.X - 1][variables.Y].IsWalkable) {
                replace(variables.X - 1, variables.Y);
            }
            break;
        case 'a':
            if (variables.Map[variables.X][variables.Y - 1] !== undefined && variables.Map[variables.X][variables.Y - 1].IsWalkable) {
                replace(variables.X, variables.Y - 1);
            }
            break;
        case 's':
            if (variables.Map[variables.X + 1][variables.Y] !== undefined && variables.Map[variables.X + 1][variables.Y].IsWalkable) {
                replace(variables.X + 1, variables.Y);
            }
            break;
        case 'd':
            if (variables.Map[variables.X][variables.Y + 1] !== undefined && variables.Map[variables.X][variables.Y + 1].IsWalkable) {
                replace(variables.X, variables.Y + 1);
            }
            break;
    } 
}

// replaces a cell with a hero
function replace(row, column) { 
    let helpCell = variables.currentPlace;
    variables.currentPlace = variables.Map[row][column];
    variables.Map[row][column] = variables.Map[variables.X][variables.Y];
    variables.Map[variables.X][variables.Y] = helpCell;
    variables.X = row;
    variables.Y = column;

    paintMap();
}