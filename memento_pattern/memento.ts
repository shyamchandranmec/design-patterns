"use strict"

export default class DocumentMemento {
    private content:string

    constructor(content:string) {
        this.content = content
    }

    getSavedContent():string {
        return this.content
    }
}