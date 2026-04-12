"use strict"

export default class Stereo {
    isOn: boolean = false
    volume: number = 0

    turnOn(): void {
        this.isOn = true
        console.log("Stereo: turning on")
    }

    turnOff(): void {
        this.isOn = false
        console.log("Stereo: turning off")
    }

    increaseVolume(): void {
        this.volume++
        console.log(`Stereo: volume is now ${this.volume}`)
    }

    decreaseVolume(): void {
        this.volume--
        console.log(`Stereo: volume is now ${this.volume}`)
    }
}