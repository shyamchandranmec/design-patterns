"use strict"

import db from "./db/inventory"
import IStorage from "./interfaces/i_storage"
import Storage from "./storages/storage"

class Pharmacy {

    frontInventory: IStorage
    backInventory: IStorage
    distributorInventory: IStorage
    centralInventory: IStorage

    constructor() {
        this.frontInventory = new Storage("Front Inventory", db["frontInventory"])
        this.backInventory = new Storage("Back Inventory", db["backInventory"])
        this.distributorInventory = new Storage("Distributor Inventory", db["distributorInventory"])
        this.centralInventory = new Storage("Central Inventory", db["centralInventory"])

        this.frontInventory.setNext(this.backInventory)
        this.backInventory.setNext(this.distributorInventory)
        this.distributorInventory.setNext(this.centralInventory)
        this.centralInventory.setNext(null)
    }
    find(name: string) {
        let result = this.frontInventory.find(name)
        if (result != null) {
            console.log("Result ", result)
            console.log("\n\n")
        } else {
            console.log("Sorry!!. Medicine couldn't be found")
        }
    }
}



let pharmacy = new Pharmacy()
pharmacy.find("panadol")
pharmacy.find("cream2")
pharmacy.find("syrup7")
pharmacy.find("cream6")
pharmacy.find("homeo4")