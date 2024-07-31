"use strict"

import {ILogger} from "../logger";

abstract class LogDecorator implements ILogger {
    protected logger: ILogger

    constructor(logger:ILogger) {
        this.logger = logger
    }
    error(message: string): void {
        this.logger.error(message)
    }

    info(message: string): void {
        this.logger.info(message)
    }

    warning(message: string): void {
        this.logger.warning(message)
    }
}


class SlackLogDecorator extends LogDecorator {

    warning(message: string) {
        super.warning(message);
        console.log(`Logging warning messages to slack ${message}`)
    }
}

class ErrorLogDecorator extends LogDecorator {
    error(message: string) {
        super.error(message);
        console.log(`Logging error logs to pager duty ${message}`)
    }
}

export {
    SlackLogDecorator, ErrorLogDecorator
}

