"use strict";

import Observer from "./observer.ts";

export default class MobileDisplay extends Observer {

    update(data) {
        console.log("MobileDisplay: Recieved data ", data)
    }
}