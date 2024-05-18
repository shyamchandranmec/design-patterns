"use strict";

import IObserver from "./i_observer";

export default interface IObservalble {
    observers:IObserver[]
    
    addObserver(observer: IObserver): void
    removeObserver(observer: IObserver): void
    notifyObservers(data:any): void
}