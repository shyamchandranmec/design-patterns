"use strict";

import Observer from "./observer";

export default class MobileDisplay extends Observer {

    update(data:any) {
        console.log("MobileDisplay: Recieved data ", data)
    }
}