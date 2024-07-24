"use strict"

import IDevice from "../interfaces/i_device"

export default class TV implements IDevice {
    turnOn(): void {
        console.log("TV : turning on")
    }
    turnOff(): void {
        console.log("TV : turning off")
    }

    changeChannel(): void {
        console.log("TV: changing channel")
    }
    
}