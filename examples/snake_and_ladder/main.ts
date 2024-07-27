"use strict"

import {Ladder, Snake} from "./jumper";
import Board from "./board";
import Player from "./player";
import Game from "./game";
import Dice from "./dice";

console.log("snlsdfd")

let snakes =[new Snake(10, 1), new Snake(30, 15), new Snake(80, 50)]
let ladders = [new Ladder(25,65),new Ladder(35,85), new Ladder(45,95) ]
let board = new Board(100, snakes, ladders)
let dice = new Dice(2)
let players = [
    new Player("Shyam",0),
    new Player("Sarath",0)
]
let game = new Game(board, players, dice)
game.startGame()