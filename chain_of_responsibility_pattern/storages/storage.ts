"use strict"

import IMedicine from "../interfaces/i_medicine";
import ISearchResult from "../interfaces/i_search_result";
import IStorage from "../interfaces/i_storage";

export default class Storage implements IStorage {

    next: IStorage
    location: string
    inventory: Array<IMedicine>
    constructor(location: string, inventory: Array<IMedicine>) {
        this.location = location
        this.inventory = inventory
    }
    find(name: string): ISearchResult {
        console.log(`Searching medicine ${name} in location ${this.location}`)
        if (this.inventory) {
            let index = this.inventory.findIndex(med => {
                return med.medicine == name
            })
            if (index >= 0) {
                let med = this.inventory[index]
                console.log(`Found the medicine ${name} in location ${this.location}`)
                return {
                    medicine: med.medicine,
                    quantity: med.quantity,
                    location: this.location
                }
            }
        }
        if (this.next) {
            console.log(`Couldn't find the medicine ${name} in location ${this.location}`)
            return this.next.find(name)
        } else {
            console.log("Done with searching all inventories.");
            return null
        }

    }
    setNext(storage: IStorage): void {
        this.next = storage
    }

}
