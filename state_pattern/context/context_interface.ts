"use strict";

import IProduct from "../interfaces/i_product";
import IVendingMachineState from "../interfaces/i_state";

export default interface IVMContext {
    selectedProduct: IProduct
    state:IVendingMachineState
    products:Array<IProduct>
    balance: number
    setState(state: IVendingMachineState):void
    reset():void
}