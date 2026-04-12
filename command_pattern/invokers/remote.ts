"use strict"

import ICommand from "../interfaces/i_command"

export default class Remote {
    private command: ICommand | null = null
    private history: ICommand[] = []

    setCommand(command: ICommand): void {
        this.command = command
    }

    invoke(): void {
        if (!this.command) return
        this.command.execute()
        this.history.push(this.command)
    }

    undoLast(): void {
        const last = this.history.pop()
        if (last) last.undo()
    }
}