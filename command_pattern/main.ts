"use strict"

import { ChangeChannelCommand, IncreaseVolumeCommand, TurnOffStereoCommand, TurnOffTVCommand, TurnOnStereoCommand, TurnOnTVCommand } from "./commands/commands"
import Stereo from "./devices/stereo"
import TV from "./devices/tv"
import Remote from "./invokers/remote"

let remote = new Remote()
let tv = new TV()
let stereo = new Stereo()
let turnOnTVCommand = new TurnOnTVCommand(tv)
let turnOffTVCommand = new TurnOffTVCommand(tv)
let increaseVolumeCommand = new IncreaseVolumeCommand(stereo)
let changeChannelCommand = new ChangeChannelCommand(tv)
let turnOnStereoCommand = new TurnOnStereoCommand(stereo)
let turnOffStereoCommand = new TurnOffStereoCommand(stereo)


remote.setCommand(turnOnTVCommand)
remote.invoke()
remote.setCommand(turnOffTVCommand)
remote.invoke()
remote.setCommand(increaseVolumeCommand)
remote.invoke()
remote.setCommand(changeChannelCommand)
remote.invoke()
remote.setCommand(turnOnStereoCommand)
remote.invoke()
remote.setCommand(turnOffStereoCommand)
remote.invoke()



