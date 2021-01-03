const { Object } = require("../object");

export class Mountain extends Object {
    constructor(name, src) {
        super(name, false, `Mountains/${src}`);
    }
}

export class Hill extends Object {
    constructor(name, src) {
        super(name, true, `Mountains/${src}`);
    }
}

export class Tree extends Object {
    constructor(name, src) {
        super(name, false, `Trees/${src}`);
    }
}