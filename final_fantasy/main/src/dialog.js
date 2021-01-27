import { variables } from "./variables";

export function dialog(who) {
    createDialog(who);
    who.dialogFlow(
        document.getElementById('dialog').children[1].children[0].children[0],
        document.getElementById('dialog').children[1].children[1]
    );
}

function createDialog(who) {
    let wrap = document.createElement('div');
    wrap.classList.add('menuWrapper');
    wrap.id = 'dialog';

    // who we talk to
    let whoWrap = document.createElement('div');
    whoWrap.classList.add('imgs', 'appearance');

    let whoImg = document.createElement('img');
    whoImg.style.width = '60%';
    whoImg.src = who.Src;

    let whoName = document.createElement('span');
    whoName.textContent = who.Name;
    whoName.classList.add('menu-item');

    whoWrap.appendChild(whoImg);
    whoWrap.appendChild(whoName);

    wrap.appendChild(whoWrap);

    //sayings ========================
    let sayWrap = document.createElement('div');
    sayWrap.style.display = 'flex';
    sayWrap.style.flexDirection = 'column';
    sayWrap.style.justifyContent = 'space-between';
    sayWrap.style.alignItems = 'center';

    // who we talk to

    let whoSayWrap = document.createElement('div');
    whoSayWrap.classList.add('appearance');
    whoSayWrap.style.width = '40vw';
    whoSayWrap.style.height = '25vh';
    whoSayWrap.style.display = 'flex';
    whoSayWrap.style.justifyContent = 'center';
    whoSayWrap.style.alignItems = 'center';

    let whoSaying = document.createElement('span');
    whoSaying.classList.add('menu-item');

    whoSayWrap.appendChild(whoSaying);

    // a player
    let playerSayWrap = document.createElement('div');
    playerSayWrap.classList.add('appearance');
    playerSayWrap.style.width = '40vw';
    playerSayWrap.style.height = '25vh';
    playerSayWrap.style.display = 'flex';
    playerSayWrap.style.flexDirection = 'column';
    playerSayWrap.style.justifyContent = 'space-evenly';
    playerSayWrap.style.alignItems = 'center';

    sayWrap.appendChild(whoSayWrap);
    sayWrap.appendChild(playerSayWrap);

    wrap.appendChild(sayWrap);

    // end sayings =============================

    // a player
    let playerWrap = document.createElement('div');
    playerWrap.classList.add('imgs', 'appearance');

    let playerImg = document.createElement('img');
    playerImg.src = variables.Hero.Src;
    playerImg.style.width = '55%';

    let playerName = document.createElement('span');
    playerName.textContent = variables.Hero.Name;
    playerName.classList.add('menu-item');

    playerWrap.appendChild(playerImg);
    playerWrap.appendChild(playerName);

    wrap.appendChild(playerWrap);

    document.body.appendChild(wrap);
}