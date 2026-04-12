"use strict"

export default interface ICommand {
    execute(): void
    undo(): void
}