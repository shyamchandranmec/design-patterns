"use strict"

class LegacyPrinter {
    printDocument():void {
        console.log("Printing using legacy printer")
    }
}

interface IPrinter {
    print():void
}

class PrinterAdapter implements IPrinter{
    private lPrinter:LegacyPrinter

    constructor() {
        this.lPrinter = new LegacyPrinter()
    }
    print():void {
        console.log("Printing using adapter the following line")
        this.lPrinter.printDocument()
    }
}

export {
    LegacyPrinter, PrinterAdapter
}