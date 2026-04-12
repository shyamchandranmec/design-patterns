"use strict"

export default class TV {
    isOn: boolean = false
    currentChannel: number = 1

    turnOn(): void {
        this.isOn = true
        console.log("TV: turning on")
    }

    turnOff(): void {
        this.isOn = false
        console.log("TV: turning off")
    }

    changeChannel(channel: number): void {
        this.currentChannel = channel
        console.log(`TV: changing to channel ${channel}`)
    }
}