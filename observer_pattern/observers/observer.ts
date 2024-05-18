"use strict";

import IObserver from "../interfaces/i_observer";

export default class Observer implements IObserver {

    update(data:any) {
        throw new Error("Observers should implement this function")
    }
}