import { input } from "../main";
import { variables } from "../variables";
import { enemies } from "./maps";

/**Use following ids when give task their names (add new ones if it needs):
 * kill - to kill someone whoever he/she is;
 * carry - if a player has to carry a thing to somebody*/

export var ids = {
    'kill': 'kill',
    'carry': 'carry'
}

export class Task {
    constructor(id, desc, check, add, completed) {
        this.id = id;
        this.desc = desc;
        this.toDo = null;
        this.check = check;
        this.xp = 0;
        this.money = 0;
        this.add = add;
        this.completed = completed;

        this.getToDo = function () {
            return {
                done: this.toDo.done,
                complete: this.toDo.complete,
                enemyName: this.toDo.enemyName
            }
        }
    }
}

export class TaskProgress {
    constructor(complete, enemyName, xp, money) {
        this.done = 0;
        this.complete = complete;
        this.enemyName = enemyName;
        this.xp = xp;
        this.money = money;

        this.clearAll = function () {
            this.done = 0;
            this.complete = 0;
            this.enemyName = "";
            this.add = null;
            this.completed = null;
        }
    }
}

export var killSomeone = new Task('kill', function (Yes, No, xp, money) {
    let task = killSomeone;
    return function (who, player) {
        let count = Math.floor(Math.random() * 5) + 1;
        //let count = 1;
        //let enemy = 1;
        let enemy = Math.floor(Math.random() * (Object.keys(enemies).length - 1));

        task.toDo = new TaskProgress(count, enemies[Object.keys(enemies)[enemy]].Name, xp, money);
        
        who.textContent = `Help! ${enemies[Object.keys(enemies)[enemy]].Name} are scaring me when I walk around. Kill ${count} of them`;
        who.style.textAlign = 'center';

        let yes = document.createElement('span');
        yes.textContent = 'Sure';
        yes.classList.add('select', 'menu-item');

        let no = document.createElement('span');
        no.textContent = 'I\'m not interested in';
        no.classList.add('menu-item');

        player.appendChild(yes);
        player.appendChild(no);

        document.onkeydown = function (event) {
            switch (event.key) {
                case 'Enter':
                    if (document.getElementsByClassName('select')[0].textContent === 'Sure') {
                        document.getElementById('dialog').children[1].children[0].children[0].textContent = Yes;
                        variables.Hero.task = new Task(task.id, task.desc, task.check, task.add, task.completed);
                        variables.Hero.task.toDo = new TaskProgress(task.toDo.complete, task.toDo.enemyName, task.toDo.xp, task.toDo.money);
                    }
                    else {
                        document.getElementById('dialog').children[1].children[0].children[0].textContent = No;
                    }

                    setTimeout(() => {
                        document.getElementById('dialog').remove();
                        document.onkeydown = input;
                    }, 2000);
                    break;
                case 'w':
                case 'W':
                case 'ArrowUp':
                    if (document.getElementsByClassName('select')[0] === player.children[1]) {
                        player.children[1].classList.remove('select');
                        player.children[0].classList.add('select');
                    }
                    break;
                case 's':
                case 'S':
                case 'ArrowDown':
                    if (document.getElementsByClassName('select')[0] === player.children[0]) {
                        player.children[0].classList.remove('select');
                        player.children[1].classList.add('select');
                    }
                    break;
            }
        }
    }
}, function (option) { 
        if (option !== 'kill') {
            return;
        }
        variables.Hero.task.add();
        if (variables.Hero.task.completed()) {

            let complete = document.createElement('div');
            complete.classList.add('complete', 'appearance');
            complete.id = 'comp';

            let text = document.createElement('span');
            text.textContent = 'Task is compeleted!';
            text.classList.add('menu-item');

            complete.appendChild(text);
            document.body.appendChild(complete);

            let delay = 2000;

            setTimeout(() => {
                text.textContent = `You got ${variables.Hero.task.toDo.xp} xp!`;
                variables.Hero.xp += variables.Hero.task.toDo.xp;
            }, 2 * delay);

            setTimeout(() => {
                text.textContent = `You got ${variables.Hero.task.toDo.money} money!`;
                variables.Hero.money += variables.Hero.task.toDo.money;
            }, 3 * delay);

            setTimeout(() => {
                variables.Hero.task = null;
                document.getElementById('comp').remove();
            }, 4 * delay);

            
        }
},
    function () { variables.Hero.task.toDo.done++; },
    function () {
        return variables.Hero.task.toDo.done >= variables.Hero.task.toDo.complete;
    });

export var tasks = {
    'kill': killSomeone
}