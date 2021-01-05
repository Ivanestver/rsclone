const { Object } = require("./object");

export class Mountain extends Object {
    constructor(name, src) {
        super(name, false, `Mountains/${src}`);
    }

    copy(obj) {
        obj = new Mountain();
        obj.Name = this.Name;
        obj.IsWalkable = this.IsWalkable;
        obj.Src = this.Src;
    }
}

export class Hill extends Object {
    constructor(name, src) {
        super(name, true, `Mountains/${src}`);
    }

    copy(obj) {
        obj = new Hill();
        obj.Name = this.Name;
        obj.IsWalkable = this.IsWalkable;
        obj.Src = this.Src;
    }
}

export class Tree extends Object {
    constructor(name, src) {
        super(name, false, `Trees/${src}`);
    }

    copy(obj) {
        obj = new Tree();
        obj.Name = this.Name;
        obj.IsWalkable = this.IsWalkable;
        obj.Src = this.Src;
    }
}

export class Grass extends Object {
    constructor(name, src) {
        super(name, true, `Grass/${src}`);
    }

    copy(obj) {
        obj = new Grass();
        obj.Name = this.Name;
        obj.IsWalkable = this.IsWalkable;
        obj.Src = this.Src;
    }
}