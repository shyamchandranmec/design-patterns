"use strict"

import IDevice from "../interfaces/i_device";

export default class Stereo implements IDevice {
    turnOn(): void {
        console.log("Stereo : turning on")
    }
    turnOff(): void {
        console.log("Stereo : turning off")
    }

    increaseVolume(): void {
        console.log("Stereo: increase volume")
    }

}