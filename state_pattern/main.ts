"use strict";

import VendingMachine from "./context/vm_context";

let products = [
    {
        name: "Coke",
        price: 10,
        code: 101
    }, {
        name: "Pepsi",
        price: 20,
        code: 102
    }, {
        name: "FreshLime",
        price: 30,
        code: 103
    }, {
        name: "Juice",
        price: 40,
        code: 104
    }
]
//Add product but less money
let vm = new VendingMachine(products)
vm.selectProduct(107)
vm.insertMoney(20)

vm.selectProduct(104)
vm.insertMoney(5)
vm.insertMoney(35)

