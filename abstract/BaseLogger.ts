import { IApplication } from '@webantic/w.interfaces/application'
import { IIndexable } from '@webantic/w.interfaces/decorators'
import { ILogger, Logger } from '@webantic/w.interfaces/loggers'

import * as debug from 'debug'
import { NotImplementedError } from '../common/errors/NotImplementedError'
import { BaseProvider } from './BaseProvider'

abstract class BaseLogger <T> extends BaseProvider implements ILogger <T> {
  [key: string]: T|Logger|any

  static groupName: string = 'logger'

  // tslint:disable-next-line:variable-name
  __loggers: IIndexable<T>

  constructor (application: IApplication, config: any) {
    super(application, config)
  }

  addLogLevel (level: string) {
    throw new NotImplementedError()
  }

  trace (...args: any[]) {
    throw new NotImplementedError()
  }
  info (...args: any[]) {
    throw new NotImplementedError()
  }

  log (...args: any[]) {
    throw new NotImplementedError()
  }

  warn (...args: any[]) {
    throw new NotImplementedError()
  }

  error (...args: any[]) {
    throw new NotImplementedError()
  }
}

export {
  BaseLogger
}
