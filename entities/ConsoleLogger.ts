import { IApplication } from '@webantic/w.interfaces/application'
import { ILogger, Logger } from '@webantic/w.interfaces/loggers'

import { BaseLogger } from '../abstract/BaseLogger'
import { LogLevelConflictError } from '../common/errors/LogLevelConflictError'

/**
 * A logger for logging messages to the console
 *
 * @class ConsoleLogger
 * @extends {BaseLogger<Logger>}
 * @implements {ILogger<Logger>}
 */
class ConsoleLogger extends BaseLogger <Logger> implements ILogger <Logger> {
  /**
   * Creates an instance of ConsoleLogger.
   * @param {IApplication} application
   * @param {*} config
   * @memberof ConsoleLogger
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
   * @memberof ConsoleLogger
   */
  addLogLevel (level: string) {
    if (this.hasOwnProperty(level)) {
      throw new LogLevelConflictError(level)
    }

    if (level in console) {
      this[level] = (message: string, ...args: any[]) => {
        return (console as any)[level](`${this.namespace}:${level} -- ${message}`, ...args)
      }
    } else {
      this[level] = (message: string, ...args: any[]) => {
        return console.log(`${this.namespace}:${level} -- ${message}`, ...args)
      }
    }
  }
}

export default ConsoleLogger
