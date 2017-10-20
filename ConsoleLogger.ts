import { IApplication } from 'b.app/common/interfaces/application'
import { ILogger, Logger } from './common/interfaces/loggers'

import { LogLevelConflictError } from './common/errors/LogLevelConflictError'
import { BaseLogger } from './abstract/BaseLogger'

class ConsoleLogger extends BaseLogger <Logger> implements ILogger <Logger> {
  constructor (application: IApplication, config: any) {
    super(application, config)

    this.logLevels = [
      'trace',
      'info',
      'log',
      'warn',
      'error'
    ]

    this.logLevels.forEach(this.addLogLevel.bind(this))
  }

  addLogLevel (level: string) {
    if (this.hasOwnProperty(level)) {
      throw new LogLevelConflictError(level)
    }

    if (level in console) {
      this[level] = (<any>console)[level].bind(console)
    } else {
      this[level] = (message: string, ...args: any[]) => {
        console.log(`${level}: ${message}`, ...args)
      }
    }
  }
}

export default ConsoleLogger
