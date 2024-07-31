"use strict"

interface ILogger {
    info(message:string):void
    warning(message:string):void
    error(message:string):void
}

class Logger implements ILogger {
    error(message:string): void {
        console.log(`Error log ${message}`)
    }

    info(message:string): void {
        console.log(`Info log ${message}`)
    }

    warning(message:string): void {
        console.log(`Warning log ${message}`)
    }

}

export {
    ILogger, Logger
}