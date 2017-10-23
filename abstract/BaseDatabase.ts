import { IApplication } from '@webantic/w.interfaces/application'
import { IDatabase, IDatabaseModel } from '@webantic/w.interfaces/databases'
import { IIndexable } from '@webantic/w.interfaces/decorators'

import { NotImplementedError } from '../common/errors/NotImplementedError'
import { BaseProvider } from './BaseProvider'

abstract class BaseDatabase <T> extends BaseProvider implements IDatabase <T> {
  [key: string]: T|any

  get __raw () {
    throw new NotImplementedError()
  }

  set __raw (data) {
    this.__raw = data
  }

  get Model (): IDatabaseModel<T> {
    throw new NotImplementedError()
  }

  set Model (data) {
    this.Model = data
  }
}

export {
  BaseDatabase
}
