"use strict"

import History from "./caretaker"
import Document from "./originator"

let doc = new Document("First Edit")
let history = new History()

history.addMemento(doc.createMemento())

doc.setContent("Second edit")
history.addMemento(doc.createMemento())

doc.setContent("Third edit")
history.addMemento(doc.createMemento())

doc.setContent("Fourth edit")
history.addMemento(doc.createMemento())

let rdm =history.retrieveMemento(1)
doc.restoreFromMemento(rdm)

console.log("Current doc content is ", doc.getContent())
