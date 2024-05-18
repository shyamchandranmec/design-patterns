"use strict";

import Observer from "./observer";

export default class TVDisplay extends Observer {

    update(data:any) {
        console.log("TVDisplay: Recieved data ", data)
    }
}