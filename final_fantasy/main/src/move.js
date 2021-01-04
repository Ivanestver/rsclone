import { currentPlace, imgWidth, Map, mapSize, X, Y } from "./variables";

export function move(event) {
    switch (event.key) {
        case 'w':
            break;
        case 'a':
            break;
        case 's':
            break;
        case 'd':
            break;
    } 
}

function replace(row, column) {
    currentPlace = Map[row][column];
    Map[row][column] = Map[X][Y];
}