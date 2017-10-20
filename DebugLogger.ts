import { IApplication } from 'b.app/common/interfaces/application'
import { ILogger, Logger } from './common/interfaces/loggers'

import * as debug from 'debug'
import { LogLevelConflictError } from './common/errors/LogLevelConflictError'
import { BaseLogger } from './abstract/BaseLogger'

class DebugLogger extends BaseLogger <debug.IDebugger> implements ILogger <debug.IDebugger> {
  constructor (application: IApplication, config: any) {
    super(application, config)

    this.__loggers = {
      trace: debug(this.__application.name + ':trace'),
      info: debug(this.__application.name + ':info'),
      log: debug(this.__application.name + ':log'),
      warn: debug(this.__application.name + ':warn'),
      error: debug(this.__application.name + ':error')
    }
  }

  addLogLevel (level: string) {
    if (level in this.__loggers) {
      throw new LogLevelConflictError(level)
    }

    this.__loggers[level] = debug(`${this.__application.name}:${level}`)
    this[level] = this.__loggers[level].bind(this)    
  }

  trace (message: string, ...args: any[]) {
    this.__loggers.trace(message, ...args)
  }

  info (message: string, ...args: any[]) {
    this.__loggers.info(message, ...args)
  }

  log (message: string, ...args: any[]) {
    this.__loggers.log(message, ...args)
  }

  warn (message: string, ...args: any[]) {
    this.__loggers.warn(message, ...args)
  }

  error (message: string, ...args: any[]) {
    this.__loggers.error(message, ...args)
  }
}

export default DebugLogger
