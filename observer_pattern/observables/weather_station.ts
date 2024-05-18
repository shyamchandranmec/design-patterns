"use strict";

import Observalble from "./observable";

export default class WeatherStation extends Observalble {
    _temperature:number
    constructor() {
        super()
        this._temperature = 0
    }

    set temperature(temp:number) {
        console.log("Setting temperature to ", temp)
        this._temperature = temp
        this.notifyObservers(this._temperature)
    }
}