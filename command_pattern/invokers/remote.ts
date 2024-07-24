"use strict"

import ICommand from "../interfaces/i_command"

export default class Remote {
    command: ICommand

    setCommand(command: ICommand):void {
        this.command = command
    }

    invoke():void {
        this.command.execute()
    }
}