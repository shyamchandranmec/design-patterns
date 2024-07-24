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
    
}

class TurnOffTVCommand implements ICommand {
    tv:TV
    constructor(tv: TV) {
        this.tv = tv
    }
    execute(): void {
        this.tv.turnOff()
    }
    
}
class ChangeChannelCommand implements ICommand {
    tv: TV
    constructor(tv: TV) {
        this.tv = tv
    }
    execute(): void {
        this.tv.changeChannel()
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
    
}

class TurnOffStereoCommand implements ICommand {
    stereo: Stereo
    constructor(stereo: Stereo) {
        this.stereo = stereo
    }
    execute(): void {
        this.stereo.turnOff()
    }
    
}
class IncreaseVolumeCommand implements ICommand {
    stereo: Stereo
    constructor(stereo: Stereo) {
        this.stereo = stereo
    }
    execute(): void {
        this.stereo.increaseVolume()
    }
    
}

export {
    TurnOnTVCommand, TurnOffTVCommand, ChangeChannelCommand, TurnOnStereoCommand, TurnOffStereoCommand, IncreaseVolumeCommand
}