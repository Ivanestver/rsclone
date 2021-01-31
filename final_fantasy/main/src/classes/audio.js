class GameAudio {
    constructor() {
        this.isSoundMuted = false;
        this.isMusicMuted = false;
        this.music = new Audio();
        this.music.autoplay = false;
        this.music.onended = () => {
            this.music.play();
        }

        this.sounds = new Audio();
        this.sounds.autoplay = true;

        this.step = './assets/sounds/Short/Step.mp3';
        this.shot = './assets/sounds/Short/Shot.mp3';
        this.monster = './assets/sounds/Short/Monster.mp3';
        this.startFight = './assets/sounds/Short/StartFight.mp3';
        this.door = './assets/sounds/Short/Door.mp3';

        this.mainMenu = './assets/sounds/Menu/'; //menu
        this.fight = './assets/sounds/Fight/'; //fight
        this.village = './assets/sounds/Village/'; //village
        this.walk = './assets/sounds/Walk/'; //walk
        this.city = './assets/sounds/City/'; //city

        this.walkCount = 3;
        this.mainMenuCount = 2;
        this.fightCount = 2;
        this.villageCount = 1;
        this.cityCount = 1;

        this.MenuMove = function () {
            if (this.isSoundMuted) {
                return;
            }

            this.sounds.src = './assets/sounds/Short/MenuMove.mp3';
            this.sounds.play();
        }

        this.Door = function () {
            if (this.isSoundMuted) {
                return;
            }

            this.sounds.src = './assets/sounds/Short/Door.mp3';
            this.sounds.play();
        }

        this.Money = function () {
            if (this.isSoundMuted) {
                return;
            }

            this.sounds.src = './assets/sounds/Short/Money.mp3';
            this.sounds.play();
        }

        this.KeyBoard = function () {
            if (this.isSoundMuted) {
                return;
            }
            this.sounds.src = './assets/sounds/Short/KeyBoard.mp3';
            this.sounds.play();
        }

        this.Choose = function () {
            if (this.isSoundMuted) {
                return;
            }

            this.sounds.src = './assets/sounds/Short/Choose.mp3';
            this.sounds.play();
        }

        this.Button = function () {
            if (this.isSoundMuted) {
                return;
            }

            this.sounds.src = './assets/sounds/Short/Button.mp3';
            this.sounds.play();
        }

        this.BackSpace = function () {
            if (this.isSoundMuted) {
                return;
            }

            this.sounds.src = './assets/sounds/Short/BackSpace.mp3';
            this.sounds.play();
        }

        this.Cancel = function () {
            if (this.isSoundMuted) {
                return;
            }

            this.sounds.src = './assets/sounds/Short/Cancel.mp3';
            this.sounds.play();
        }

        this.Step = function () {
            if (this.isSoundMuted) {
                return;
            }

            if (this.sounds.src.split('/')[this.sounds.src.split('/').length - 1] === this.startFight.split('/')[this.startFight.split('/').length - 1]
                || this.sounds.src.split('/')[this.sounds.src.split('/').length - 1] === this.door.split('/')[this.startFight.split('/').length - 1]) {
                return;
            }

            this.sounds.src = this.step;
            this.sounds.play();
        }

        this.Shot = function () {
            if (this.isSoundMuted) {
                return;
            }

            this.sounds.src = this.shot;
            this.sounds.play();
        }

        this.Monster = function () {
            if (this.isSoundMuted) {
                return;
            }

            this.sounds.src = this.monster;
            this.sounds.play();
        }

        this.StartFight = function () {
            if (this.isSoundMuted) {
                return;
            }

            if (!this.sounds.paused) {
                this.sounds.pause();
            }

            this.sounds.src = this.startFight;
            this.sounds.play();
        }

        this.Walk = function () {
            if (this.isMusicMuted) {
                this.music.pause();
                return;
            }

            this.music.src = `${this.walk}${Math.floor(Math.random() * this.walkCount) + 1}.mp3`;
            this.music.play();
        }

        this.Menu = function () {
            if (this.isMusicMuted) {
                this.music.pause();
                return;
            }

            if (this.music.src.split('/')[this.music.src.split('/').length - 2] === 'Menu') {
                return;
            }

            this.music.src = `${this.mainMenu}${Math.floor(Math.random() * this.mainMenuCount) + 1}.mp3`;
            this.music.play();
        }

        this.Fight = function () {
            if (this.isMusicMuted) {
                this.music.pause();
                return;
            }

            this.music.src = `${this.fight}${Math.floor(Math.random() * this.fightCount) + 1}.mp3`;
            this.music.play();
        }

        this.Village = function () {
            if (this.isMusicMuted) {
                this.music.pause();
                return;
            }

            this.music.src = `${this.village}${Math.floor(Math.random() * this.villageCount) + 1}.mp3`;
            this.music.play();
        }

        this.City = function () {
            if (this.isMusicMuted) {
                this.music.pause();
                return;
            }

            this.music.src = `${this.city}${Math.floor(Math.random() * this.cityCount) + 1}.mp3`;
            this.music.play();
        }

        this.Continue = function () {
            this.music.play();
        }

        this.Stop = function () {
            this.music.pause();
        }
    }
}

export var audio = new GameAudio();