"use strict"


import {Expression, Num, OPERATION} from "./expressions";

let num1 = new Num(1)
let num2 = new Num(2)

let exp1 = new Expression(num1, num2, OPERATION.ADD)

console.log(`output exp1 is ${exp1.evaluate()} `)
let num3 = new Num(3)
let num4 = new Num(4)

let exp2 = new Expression(num3, num4, OPERATION.MUL)
console.log(`output exp2 is ${exp2.evaluate()} `)

let exp3 = new Expression(exp1, exp2, OPERATION.ADD)

console.log(`Final output is ${exp3.evaluate()}`)