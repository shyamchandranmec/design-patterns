"use strict";

import Observer from "./observer.mjs";

export default class TVDisplay extends Observer {

    update(data) {
        console.log("TVDisplay: Recieved data ", data)
    }
}