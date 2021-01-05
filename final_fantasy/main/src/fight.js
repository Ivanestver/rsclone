import { paintMap } from "./main";
import { variables } from "./variables";

var main = document.getElementsByClassName('main')[0];

export function createFight(event) {
    main.innerHTML = "";
    paintMap(variables.Arena);
}