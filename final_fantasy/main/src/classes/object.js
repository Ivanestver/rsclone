class Object {
    constructor(name, isWalkable, src) {
        this.name = name;
        this.isWalkable = isWalkable;
        this.src = `../../assets/sprites/${src}`;
    }

    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }

    get IsWalkable() {
        return this.isWalkable;
    }
    set IsWalkable(value) {
        this.isWalkable = value;
    }

    get Src() {
        return this.src;
    }
    set Src(value) {
        this.name = src;
    }
}