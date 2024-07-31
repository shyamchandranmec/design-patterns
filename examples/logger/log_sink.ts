"use strict"

interface ILogSink {
    log(message: string): void
}

const enum SinkType {
    CONSOLE,
    FILE,
    DB
}

class ConsoleLogSink implements ILogSink {
    log(message: string): void {
        console.log(`console:log => ${message}`)
    }
}

class FileLogSink implements ILogSink {
    private fileName: string

    constructor(fileName: string) {
        this.fileName = fileName
    }

    log(message: string): void {
        console.log(`file:log:${this.fileName} => ${message}`)
    }
}

class LogSinkFactory {

    private constructor() {
    }

    static getInstance(type: SinkType, fileName:string = "logs.txt"): ILogSink {
        let obj: ILogSink = null
        if (type == SinkType.CONSOLE) {
            obj = new ConsoleLogSink()
        } else if (type == SinkType.FILE) {
            obj = new FileLogSink(fileName)
        }
        return obj
    }
}

export {
    ILogSink, ConsoleLogSink, FileLogSink, LogSinkFactory,SinkType
}