import { IApplication } from 'b.app/common/interfaces/application'
import { ILogger, Logger } from '../common/interfaces/loggers'

import * as debug from 'debug'
import { BaseLogger } from '../abstract/BaseLogger'
import { LogLevelConflictError } from '../common/errors/LogLevelConflictError'

/**
 * A logger for logging messages to the debug module
 *
 * @class DebugLogger
 * @extends {BaseLogger<debug.IDebugger>}
 * @implements {ILogger<debug.IDebugger>}
 */
class DebugLogger extends BaseLogger <debug.IDebugger> implements ILogger <debug.IDebugger> {
  /**
   * Creates an instance of DebugLogger.
   * @param {IApplication} application
   * @param {*} config
   * @memberof DebugLogger
   */
  constructor (application: IApplication, config: any) {
    super(application, config)

    this.namespace = config ? config.namespace : this.__application.name
    this.logLevels = [
      'trace',
      'info',
      'log',
      'warn',
      'error'
    ]

    this.logLevels.forEach(this.addLogLevel.bind(this))
  }

  /**
   * Add a log level and method to this instance by which to access it
   *
   * @param {string} level The log level
   * @memberof DebugLogger
   */
  addLogLevel (level: string) {
    if (this.hasOwnProperty(level)) {
      throw new LogLevelConflictError(level)
    }

    this[level] = debug(`${this.namespace}:${level}`)
  }
}

export default DebugLogger
