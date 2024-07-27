"use strict"

import Board from "./board";
import Player from "./player";
import Dice from "./dice";

export  default class Game {
    board: Board
    players: Player[]
    dice: Dice
    currTurn:number
    gameOver: boolean
    constructor(board: Board, players:Player[], dice: Dice) {
        console.log(`Initializing game`)
        this.board = board
        this.players = players
        this.dice = dice
        this.currTurn = 0
        this.gameOver = false
    }

    startGame():void {
        console.log(`Starting game`)
        while (!this.gameOver){
            let player = this.players[this.currTurn]
            console.log(`Choosing player ${player.name}`)
            let res = player.roll(this.dice)
            this.checkPlayerPosAfterRoll(player, res)
            if(this.gameOver) {
                console.log(`Player ${player.name} won the game`)
            }
            this.changeCurrentPlayer()
        }
    }
    changeCurrentPlayer(): void {
       if (this.currTurn == this.players.length-1) {
           this.currTurn = 0
       } else {
           ++this.currTurn
       }
    }
    checkPlayerPosAfterRoll(player:Player, result: number) {
        let newPos = player.position+result
        player.position = newPos
        if (newPos > this.board.size) {
            this.gameOver = true
        }
        this.checkForSnakes(player.position,player)
        this.checkForLadders(player.position,player)
    }
    checkForSnakes(newPos:number, player:Player):void {
        console.log(`Checking for snake in pos ${newPos} for player ${player.name}`)
        for (let snake of this.board.snakes) {
            if (newPos == snake.start) {
                player.position = snake.end
                console.log(`Found Snake - Moving player ${player.name} from ${newPos} to ${player.position}`)
            }
        }
    }
    checkForLadders(newPos:number, player:Player):void {
        console.log(`Checking for ladder in pos ${newPos} for player ${player.name}`)
        for (let ladder of this.board.ladders) {
            if (newPos == ladder.start) {
                player.position = ladder.end
                console.log(`Found ladder - Moving player ${player.name} from ${newPos} to ${player.position}`)
            }
        }
    }

}