"use strict"

import {LegacyPrinter, PrinterAdapter} from "./printer";

let lp = new LegacyPrinter()
let printer = new PrinterAdapter()

lp.printDocument()

printer.print()