"use strict"

import DocumentMemento from "./memento"

export default class History {
    private mementos : DocumentMemento[]

    constructor() {
        this.mementos = []
    }

    addMemento(dm:DocumentMemento):void {
        console.log("Adding a snapshot to history")
        this.mementos.push(dm)
    }
    retrieveMemento(index: number): DocumentMemento {
        console.log("Retrieving snapshot from history with index ", index)
        return this.mementos[index]
    }
}