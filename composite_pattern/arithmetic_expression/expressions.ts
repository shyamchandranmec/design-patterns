"use strict"

interface IArithExpression {
    evaluate(): number
}

const enum OPERATION {
    ADD,
    SUB,
    DIV,
    MUL
}

class Num implements IArithExpression {
    value: number

    constructor(value: number) {
        this.value = value
    }

    evaluate(): number {
        return this.value
    }
}

class Expression implements IArithExpression {
    lhs: IArithExpression
    rhs: IArithExpression
    operation: OPERATION

    constructor(lhs: IArithExpression, rhs: IArithExpression, operation: OPERATION) {
        this.lhs = lhs
        this.rhs = rhs
        this.operation = operation
    }

    evaluate(): number {
        if (this.operation == OPERATION.ADD) {
            return this.lhs.evaluate() + this.rhs.evaluate()
        } else if (this.operation == OPERATION.SUB) {
            return this.lhs.evaluate() - this.rhs.evaluate()
        } else if (this.operation == OPERATION.MUL) {
            return this.lhs.evaluate() * this.rhs.evaluate()
        } else if (this.operation == OPERATION.DIV) {
            return this.lhs.evaluate() / this.rhs.evaluate()
        }
    }
}

export {
    Expression, Num, OPERATION
}