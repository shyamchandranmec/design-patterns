"use strict"

import {Ladder, Snake} from "./jumper";

export  default class  Board {
    size: number
    snakes: Snake[]
    ladders: Ladder[]
    constructor(size: number, snakes:Snake[], ladders: Ladder[]) {
        this.size = size
        this.snakes = snakes
        this.ladders = ladders
        console.log(`Initializing board of size ${this.size} and ${this.snakes.length} snakes and ${this.ladders.length} ladders`)
    }
}