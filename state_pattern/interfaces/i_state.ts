"use strict";

import IVMContext from "../context/context_interface";
import IProduct from "./i_product";


export default interface IVendingMachineState {
    prompt(ctx: IVMContext):void
    selectProduct(code: number,  ctx: IVMContext):void
    insertMoney(amount:number, ctx: IVMContext): void
    dispenseProduct(product: IProduct, ctx: IVMContext):void
}