"use strict"

import Dice from "./dice";

export  default class Player {
    name: string
    position: number
    constructor(name:string, position:number=0) {
        this.name = name
        this.position = position
        console.log(`Initializing player with name ${this.name}`)
    }
    roll(dice:Dice):number {
        console.log(`Player ${this.name} rolling dice `)
        let res = dice.roll()
        return res
    }

}