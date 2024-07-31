"use strict"


import {Logger} from "./logger";
import {ErrorLogDecorator, SlackLogDecorator} from "./decorators/decorator";

let logger = new Logger()
logger.info("info message")
logger.warning("warning message")
logger.error("error message")

let decoratedLogger = new ErrorLogDecorator(new SlackLogDecorator(new Logger()))
decoratedLogger.info("new info message")
decoratedLogger.warning("new warning message")
decoratedLogger.error("new error message")