"use strict";

import Observalble from "./observable";

export default class CricketScore extends Observalble {
    _score: number
    constructor() {
        super()
        this._score = 0
    }

    set score(s:number) {
        console.log("Setting score to ", s)
        this._score = s
        this.notifyObservers(this._score)
    }
}