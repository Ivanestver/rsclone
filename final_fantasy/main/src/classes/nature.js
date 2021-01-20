const { Object } = require("./object");

export class Mountain extends Object {
    constructor(name, src) {
        super(name, false, `MapObjects/${src}`);
    }

    copy(obj) {
        obj = new Mountain();
        obj.Name = this.Name;
        obj.IsWalkable = this.IsWalkable;
        obj.Src = this.Src;
    }
}

export class Road extends Object {
    constructor(name, src) {
        super(name, true, `MapObjects/${src}`);
    }

    copy(obj) {
        obj = new Road();
        obj.Name = this.Name;
        obj.IsWalkable = this.IsWalkable;
        obj.Src = this.Src;
    }
}

export class Hill extends Object {
    constructor(name, src) {
        super(name, true, `MapObjects/${src}`);
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
        super(name, true, `MapObjects/${src}`);
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
        super(name, true, `MapObjects/${src}`);
    }

    copy(obj) {
        obj = new Grass();
        obj.Name = this.Name;
        obj.IsWalkable = this.IsWalkable;
        obj.Src = this.Src;
    }
}

export class Water extends Object {
    constructor(name, src) {
        super(name, false, `MapObjects/${src}`);
    }

    copy(obj) {
        obj = new Water();
        obj.Name = this.Name;
        obj.IsWalkable = this.IsWalkable;
        obj.Src = this.Src;
    }
}

export class Bridge extends Object {
    constructor(name, src) {
        super(name, true, `MapObjects/${src}`);
    }
}

export class Town extends Object {
    constructor(name, src) {
        super(name, true, `MapObjects/${src}`);
    }
}

export class Village extends Object {
    constructor(name, src) {
        super(name, true, `MapObjects/${src}`);
    }
}

export class Wall extends Object {
    constructor(name, src) {
        super(name, false, `MapObjects/${src}`);
    }
}

export class House extends Object {
    constructor(name, src) {
        super(name, false, `MapObjects/${src}`);
    }
}