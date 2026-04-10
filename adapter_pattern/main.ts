"use strict"

import {LegacyPrinter, PrinterAdapter, IPrinter} from "./printer";

let lp = new LegacyPrinter()
let printer:IPrinter = new PrinterAdapter(lp)

lp.printDocument()

printer.print()