"use strict";

import IProduct from "../interfaces/i_product";
import IVendingMachineState from "../interfaces/i_state";
import { ReadyState } from "../states/vm_state";


export default class VendingMachine {
    products:Array<IProduct>
    state: IVendingMachineState
    selectedProduct: IProduct
    balance: number
    constructor(products: Array<IProduct>) {
        console.log("Initializing Vending machine with ", products)
        this.products = products
        this.balance=0
        this.reset()
    }

    reset():void {
        this.setState(new ReadyState())
    }

    setState(state: IVendingMachineState): void {
        this.state = state
        this.state.prompt(this)
    }

    selectProduct(code: number):void {
        this.state.selectProduct(code, this)
    }

    insertMoney(amount: number):void {
        this.state.insertMoney(amount, this)
    }
    
}