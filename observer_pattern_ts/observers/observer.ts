"use strict";

export default class Observer {

    update() {
        throw new Error("Observers should implement this function")
    }
}