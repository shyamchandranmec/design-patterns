"use strict";

import Observalble from "./observable.ts";

export default class WeatherStation extends Observalble {
    constructor() {
        super()
        this._temperature = 0
    }

    set temperature(temp) {
        console.log("Setting temperature to ", temp)
        this._temperature = temp
        this.notifyObservers(this._temperature)
    }
}