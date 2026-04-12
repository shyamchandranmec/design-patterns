"use strict"

import Stereo from "../devices/stereo";
import TV from "../devices/tv";
import ICommand from "../interfaces/i_command";

class TurnOnTVCommand implements ICommand {
    tv: TV
    constructor(tv: TV) {
        this.tv = tv
    }
    execute(): void {
        this.tv.turnOn()
    }
    undo(): void {
        this.tv.turnOff()
    }
}

class TurnOffTVCommand implements ICommand {
    tv: TV
    constructor(tv: TV) {
        this.tv = tv
    }
    execute(): void {
        this.tv.turnOff()
    }
    undo(): void {
        this.tv.turnOn()
    }
}

class ChangeChannelCommand implements ICommand {
    tv: TV
    previousChannel: number
    channel: number

    constructor(tv: TV, channel: number) {
        this.tv = tv
        this.channel = channel
        this.previousChannel = tv.currentChannel
    }

    execute(): void {
        this.previousChannel = this.tv.currentChannel
        this.tv.changeChannel(this.channel)
    }

    undo(): void {
        this.tv.changeChannel(this.previousChannel)
    }
}

class TurnOnStereoCommand implements ICommand {
    stereo: Stereo
    constructor(stereo: Stereo) {
        this.stereo = stereo
    }
    execute(): void {
        this.stereo.turnOn()
    }
    undo(): void {
        this.stereo.turnOff()
    }
}

class TurnOffStereoCommand implements ICommand {
    stereo: Stereo
    constructor(stereo: Stereo) {
        this.stereo = stereo
    }
    execute(): void {
        this.stereo.turnOff()
    }
    undo(): void {
        this.stereo.turnOn()
    }
}

class IncreaseStereoVolumeCommand implements ICommand {
    stereo: Stereo
    constructor(stereo: Stereo) {
        this.stereo = stereo
    }
    execute(): void {
        this.stereo.increaseVolume()
    }
    undo(): void {
        this.stereo.decreaseVolume()
    }
}

export {
    TurnOnTVCommand, TurnOffTVCommand, ChangeChannelCommand, TurnOnStereoCommand, TurnOffStereoCommand, IncreaseStereoVolumeCommand
}