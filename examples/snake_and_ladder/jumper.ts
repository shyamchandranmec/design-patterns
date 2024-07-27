"use strict"

class Jumper {
    start: number
    end: number

    constructor(start:number, end:number) {
        this.start = start
        this.end = end
        console.log(`Inititalizing jumper with start ${this.start} and end ${this.end}`)
    }
}

class Snake extends Jumper {
    constructor(start: number, end:number) {
        if (start > end) {
            super(start,end);
        } else {
            console.error(`Invalid Snake ${start}, ${end}`)
            throw new Error(`Invalid Snake ${start}, ${end}`)
        }

    }
}

class  Ladder extends Jumper {
    constructor(start: number, end:number) {
        if (start < end) {
            super(start,end);
        } else {
            console.error(`Invalid Ladder ${start}, ${end}`)
            throw new Error(`Invalid Ladder ${start}, ${end}`)
        }

    }
}

export {
    Snake, Ladder
}