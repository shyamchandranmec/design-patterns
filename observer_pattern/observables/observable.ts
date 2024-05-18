"use strict";

import IObservalble from "../interfaces/i_observable";
import IObserver from "../interfaces/i_observer";

export default class Observalble  implements IObservalble{
    observers:IObserver[];
    constructor () {
        this.observers = [] 
    }
    addObserver(observer: IObserver) {
        console.log("Adding observer ", observer)
        this.observers.push(observer)
    }
    removeObserver(observer: IObserver) {
        console.log("Removing observer ", observer)
        this.observers = this.observers.filter((obs:IObserver) => obs !== observer)
    }
    notifyObservers(data:any) {
        this.observers.forEach((obs)=> {
            console.log("Notifying observer ", obs)
            obs.update(data)
        })
    }
}