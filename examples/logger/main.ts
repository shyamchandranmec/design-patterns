"use strict"
/*
Design a logger that can log at different levels INFO, ERROR, DEBUG etc.
Logger will be initialized with the log level and log sink
log sink can be console, file or db
 */

import {LOG_LEVEL} from "./log_level";
import {FileLogSink} from "./log_sink";
import {DebugLogger, ErrorLogger, InfoLogger, TraceLogger, WarningLogger} from "./loggers/loggers";

let logSink = new FileLogSink("logs2.txt")
let logger = new TraceLogger(new DebugLogger(new InfoLogger(new  WarningLogger(new ErrorLogger(null)))))
logger.setLogSink(logSink)
logger.log(LOG_LEVEL.TRACE, "message")


logger.trace("This is trace")
logger.debug("This is debug")
logger.info("This is info")
logger.warning("This is warning")
logger.error("This is error")
