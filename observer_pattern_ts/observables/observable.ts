"use strict";

export default class Observalble {
    constructor () {
        this.observers = [] 
    }
    addObserver(observer) {
        console.log("Adding observer ", observer)
        this.observers.push(observer)
    }
    removeObserver(observer) {
        console.log("Removing observer ", observer)
        this.observers = this.observers.filter((obs) => obj !== observer)
    }

    notifyObservers(data) {
        this.observers.forEach((obs)=> {
            console.log("Notifying observer ", obs)
            obs.update(data)
        })
    }
}