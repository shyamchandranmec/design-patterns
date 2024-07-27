"use strict"

export default class Dice {
    num: number

    constructor(num: number) {
        this.num = num
        console.log(`Initializing dice with ${this.num} numbers`)
    }

    roll():number {
        let max = this.num *6
        let min = 1
        let res = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(`Rolling dice - result ${res}`)
        return res
    }
}