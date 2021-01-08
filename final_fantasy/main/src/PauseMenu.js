export function pauseMenu() {
    createMenu();
    document.onkeydown = click;
}

function createMenu() {
    let chooseWindow = document.createElement('div');
    chooseWindow.classList.add('choose-window', 'appearance');

    let leftArrow = document.createElement('span');
    leftArrow.textContent = '&lt;';

    let img = document.createElement('img');
    img.src = '../assets/sprites/Characters/Hero.png';

    let rightArrow = document.createElement('span');
    rightArrow.textContent = '&gt;';

    chooseWindow.appendChild(leftArrow);
    chooseWindow.appendChild(img);
    chooseWindow.appendChild(rightArrow);
}

function click(event) {
    let current = document.getElementsByClassName('select')[0];

    if (event.key === 'Enter') {
        Enter(current.textContent);
        return;
    }

    let parent = current.parentElement;

    current.classList.remove('select');

    let node = 0;

    for (let i = 0; i < parent.children.length; i++) {
        let text = document.getElementById('help') === null ? parent.children[i].textContent : parent.children[i].children[0].textContent;
        if (text === current.textContent) {
            switch (event.key) {
                case 'w':
                case 'W':
                case 'ArrowUp':
                    if (i != 0) {
                        node = i - 1;
                    }
                    break;
                case 's':
                case 'S':
                case 'ArrowDown':
                    if (i != parent.children.length - 1) {
                        node = i + 1;
                    }
                    break;
            }
            break;
        }
    }

    parent.children[node].classList.add('select');
}

function Enter(option) {

}

function continueGame() {

}

function newGame() {

}

function About() {

}