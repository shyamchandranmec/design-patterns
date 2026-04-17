"use strict"

import { ChangeChannelCommand, IncreaseStereoVolumeCommand, TurnOffStereoCommand, TurnOnStereoCommand, TurnOnTVCommand } from "./commands/commands"
import Stereo from "./devices/stereo"
import TV from "./devices/tv"
import Remote from "./invokers/remote"

let remote = new Remote()
let tv = new TV()
let stereo = new Stereo()
let turnOnTVCommand = new TurnOnTVCommand(tv)
let increaseStereoVolumeCommand = new IncreaseStereoVolumeCommand(stereo)
let changeChannelCommand = new ChangeChannelCommand(tv, 5)
let changeChannelCommand2 = new ChangeChannelCommand(tv, 10)
let turnOnStereoCommand = new TurnOnStereoCommand(stereo)
let turnOffStereoCommand = new TurnOffStereoCommand(stereo)

console.log("=== Executing Commands ===")
remote.setCommand(turnOnTVCommand)
remote.invoke()
remote.setCommand(changeChannelCommand)
remote.invoke()
remote.setCommand(changeChannelCommand2)
remote.invoke()
remote.setCommand(increaseStereoVolumeCommand)
remote.invoke()
remote.setCommand(turnOnStereoCommand)
remote.invoke()
remote.setCommand(turnOffStereoCommand)
remote.invoke()

console.log("\n=== Undoing Commands in LIFO Order ===")
remote.undoLast()
remote.undoLast()
remote.undoLast()
remote.undoLast()
remote.undoLast()
remote.undoLast()



