"use strict"

import {ILogSink, LogSinkFactory, SinkType} from "../log_sink";
import {LOG_LEVEL} from "../log_level";

class Logger {
    private static instance: Logger
    private logLevel: LOG_LEVEL
    private logSink: ILogSink
    private  logger: ILogger
    private constructor(logger: ILogger) {
        this.logLevel = LOG_LEVEL.INFO
        this.logSink = LogSinkFactory.getInstance(SinkType.FILE, "logs-temp.txt")
        console.log(`Initializing logger with level ${this.logLevel} and sink ${this.logSink.constructor.name}`)
        this.logger = logger
    }

    static getInstance(l:ILogger, logSink:ILogSink, logLevel:LOG_LEVEL): Logger {

        if (Logger.instance) {
            console.log(`Returning already existing logger`)
            return Logger.instance
        } else {
            console.log(`Creating new logger instance`)
            Logger.instance = new Logger(l)
            return Logger.instance
        }
    }

    setLevel(logLevel: LOG_LEVEL): void {
        this.logLevel = logLevel
        console.log(`Setting log level to ${logLevel}`)
    }

    setSink(logSink: ILogSink) {
        this.logSink = logSink
        console.log(`Setting log sink to ${logSink.constructor.name}`)
    }

    trace(message: string) {
        this.log(LOG_LEVEL.TRACE, message)
    }

    debug(message: string) {
        this.log(LOG_LEVEL.DEBUG, message)
    }

    info(message: string) {
        this.log(LOG_LEVEL.INFO, message)
    }

    warning(message: string) {
        this.log(LOG_LEVEL.WARNING, message)
    }

    error(message: string) {
        this.log(LOG_LEVEL.ERROR, message)
    }

    log(level: LOG_LEVEL, message: string): void {
        this.logger.log(level,  message)
    }
}


interface ILogger {
    logSink: ILogSink
    nextLogger: ILogger
    _logLevel: LOG_LEVEL

    setLogSink(logSink:ILogSink):void
    trace(message:string):void
    debug(message:string):void
    info(message:string):void
    warning(message:string):void
    error(message:string):void
    log(level: LOG_LEVEL, message: string): void

    logIt(message: string): void
}

abstract class MasterLogger implements ILogger {
    logSink: ILogSink;
    nextLogger: ILogger;
    _logLevel: LOG_LEVEL

    protected constructor(nextLogger:ILogger) {
        this.nextLogger = nextLogger
    }

    setLogSink(logSink:ILogSink) {
        this.logSink = logSink
        if (this.nextLogger) {
            this.nextLogger.setLogSink(logSink)
        }
    }

    abstract logIt(message: string): void
    trace(message: string) {
        this.log(LOG_LEVEL.TRACE, message)
    }

    info(message: string) {
        this.log(LOG_LEVEL.INFO, message)
    }

    debug(message: string) {
        this.log(LOG_LEVEL.DEBUG, message)
    }
    warning(message: string) {
        this.log(LOG_LEVEL.WARNING, message)
    }

    error(message: string) {
        this.log(LOG_LEVEL.ERROR, message)
    }

    log(level: LOG_LEVEL, message: string): void {
        if (level == this._logLevel) {
            this.logIt(message)
        }
        if (this.nextLogger) {
            //console.log("Found next logger ", this.nextLogger._logLevel)
            this.nextLogger.log(level, message)
        }
    }
}

class TraceLogger extends MasterLogger {
    _logLevel:LOG_LEVEL = LOG_LEVEL.TRACE
    constructor(nextLogger:ILogger) {
        super(nextLogger)
    }

    logIt(message: string): void {
        let m = `TRACE: ${message}`
        this.logSink.log(m)
    }

}

class DebugLogger extends MasterLogger {
    _logLevel:LOG_LEVEL = LOG_LEVEL.DEBUG

    constructor(nextLogger:ILogger) {
        super(nextLogger)
    }



    logIt(message: string): void {
        let m = `DEBUG: ${message}`
        this.logSink.log(m)
    }

}

class InfoLogger extends MasterLogger {
    _logLevel:LOG_LEVEL = LOG_LEVEL.INFO

    constructor(nextLogger:ILogger) {
        super(nextLogger)
    }



    logIt(message: string): void {
        let m = `INFO: ${message}`
        this.logSink.log(m)
    }

}

class WarningLogger extends MasterLogger {
    _logLevel:LOG_LEVEL = LOG_LEVEL.WARNING

    constructor(nextLogger:ILogger) {
        super(nextLogger)
    }


    logIt(message: string): void {
        let m = `WARNING: ${message}`
        this.logSink.log(m)
    }

}

class ErrorLogger extends MasterLogger {

    _logLevel:LOG_LEVEL = LOG_LEVEL.ERROR
    constructor(nextLogger:ILogger) {
        super(nextLogger)
    }

    logIt(message: string): void {
        let m = `ERROR: ${message}`
        this.logSink.log(m)
    }

}

export {
    Logger, ILogger, TraceLogger, DebugLogger, InfoLogger, WarningLogger, ErrorLogger
}

