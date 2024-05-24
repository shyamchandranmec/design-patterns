"use strict";

import VendingMachine from "../context/vm_context";
import IProduct from "./i_product";


export default interface IVendingMachineState {
    prompt(ctx: VendingMachine):void
    selectProduct(code: number,  ctx: VendingMachine):void
    insertMoney(amount:number, ctx: VendingMachine): void
    dispenseProduct(product: IProduct, ctx: VendingMachine):void
}