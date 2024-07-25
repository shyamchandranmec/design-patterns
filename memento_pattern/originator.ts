"use strict"

import DocumentMemento from "./memento"

export default class Document {
    private content: string

    constructor(content: string) {
        console.log("Created document with content ", content)
        this.content = content
    }
    setContent(content: string) {
        console.log("Updating document with content ", content)
        this.content = content
    }
    getContent():string {
        return this.content
    }

    createMemento(): DocumentMemento {
        console.log("Creating a document snapshot with content", this.content)
        let dm = new DocumentMemento(this.content)
        return dm
    }
    
    restoreFromMemento(dm: DocumentMemento): void {
        console.log("Restoring a document to snapshot with content ", dm.getSavedContent())
        this.content = dm.getSavedContent()
    }
    
}