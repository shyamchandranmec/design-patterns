"use strict";

import VendingMachine from "../context/vm_context";
import IProduct from "../interfaces/i_product";
import IVendingMachineState from "../interfaces/i_state";

class VendingMachineState implements IVendingMachineState {
    prompt(ctx:VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    selectProduct(code:number , ctx: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    insertMoney(amount: number, ctx: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    dispenseProduct(product: IProduct, ctx: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    
}

class ReadyState extends VendingMachineState {

    prompt(ctx:VendingMachine): void {
        console.log("ReadyState: Available products ", ctx.products)
    }
    selectProduct(code: number,  ctx: VendingMachine): void {
        console.log("User chose product ", code)
        let matches = ctx.products.filter((p)=> {
            return p.code == code
        })
        let selectedProduct = matches[0]
        if (selectedProduct == null) {
            console.log("Sorry!!. Product is not available. Please select another product")
            return
        }
        console.log("Selected product is ", selectedProduct)
        ctx.selectedProduct = selectedProduct
        console.log("Moving to the next state with Selected product ", selectedProduct)
        ctx.setState(new ProductSelectedState())
    }
    insertMoney(amount: number, ctx: VendingMachine): void {
        console.log("Please select a product before inserting money")
    }
}

class ProductSelectedState extends VendingMachineState {

    prompt(ctx:VendingMachine): void {
        console.log("ProductSelectedState: Insert money")
    }
    insertMoney(amount: number, ctx: VendingMachine): void {
        console.log("VM balance is ", ctx.balance)
        console.log("User inserted money Rs", amount)
        ctx.balance+= amount
        if (ctx.balance < ctx.selectedProduct.price) {
            console.log("Amount not enough to buy product ", ctx.selectedProduct.name)
            console.log("Please add more money")
        } else {
            console.log("Recieved Rs", amount)
            console.log("VM balance is", ctx.balance)
            console.log("Moving to the next state to dispense product", ctx.selectedProduct)
            ctx.setState(new ProductDispenseState())
            ctx.state.dispenseProduct(ctx.selectedProduct, ctx)
        }
    }
}

class ProductDispenseState extends VendingMachineState {

    prompt(ctx:VendingMachine): void {
        console.log("ProductDispenseState: Dispensing Product ", ctx.selectedProduct)
    }
    dispenseProduct(product: IProduct, ctx: VendingMachine): void {
        console.log("Dispensing product ", product)
        let remainingProducts = ctx.products.filter((p)=> {
            return p.code != product.code
        })
        ctx.products = remainingProducts
        console.log("Product dispensed. Remaining products are ", ctx.products)
        ctx.setState(new ReadyState())
    }
}


export {
    ReadyState, ProductSelectedState, ProductDispenseState
}