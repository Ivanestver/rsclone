class GameAudio {
    constructor() {
        this.isMuted = false;
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

        this.mainMenu = './assets/sounds/Menu/'; //menu
        this.fight = './assets/sounds/Fight/'; //fight
        this.village = './assets/sounds/Village/'; //village
        this.walk = './assets/sounds/Walk/'; //walk
        this.city = './assets/sounds/City/'; //city

        this.walkCount = 2;
        this.mainMenuCount = 2;
        this.fightCount = 2;
        this.villageCount = 1;
        this.cityCount = 1;

        this.Step = function () {
            if (this.isMuted) {
                return;
            }

            this.sounds.src = this.step;
            this.sounds.play();
        }

        this.Shot = function () {
            if (this.isMuted) {
                return;
            }

            this.sounds.src = this.shot;
            this.sounds.play();
        }

        this.Monster = function () {
            if (this.isMuted) {
                return;
            }

            this.sounds.src = this.monster;
            this.sounds.play();
        }

        this.StartFight = function () {
            if (this.isMuted) {
                return;
            }

            this.sounds.src = this.startFight;
            this.sounds.play();
        }

        this.Walk = function () {
            if (this.isMuted) {
                this.music.pause();
                return;
            }

            this.music.src = `${this.walk}${Math.floor(Math.random() * (this.walkCount - 1)) + 1}.mp3`;
            this.music.play();
        }

        this.Menu = function () {
            if (this.isMuted) {
                this.music.pause();
                return;
            }

            this.music.src = `${this.mainMenu}${Math.floor(Math.random() * (this.mainMenuCount)) + 1}.mp3`;
            this.music.play();
        }

        this.Fight = function () {
            if (this.isMuted) {
                this.music.pause();
                return;
            }

            this.music.src = `${this.fight}${Math.floor(Math.random() * (this.fightCount - 1)) + 1}.mp3`;
            this.music.play();
        }

        this.Village = function () {
            if (this.isMuted) {
                this.music.pause();
                return;
            }

            this.music.src = `${this.village}${Math.floor(Math.random() * (this.villageCount - 1)) + 1}.mp3`;
            this.music.play();
        }

        this.City = function () {
            if (this.isMuted) {
                this.music.pause();
                return;
            }

            this.music.src = `${this.city}${Math.floor(Math.random() * (this.cityCount - 1)) + 1}.mp3`;
            this.music.play();
        }
    }
}

export var audio = new GameAudio();