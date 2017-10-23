import { IApplication } from '@webantic/w.app/common/interfaces/application'
import { IIndexable } from '../common/interfaces/decorators'

import { IDatabase, IDatabaseModel } from 'common/interfaces/database';
import { NotImplementedError } from '../common/errors/NotImplementedError'
import { BaseProvider } from './BaseProvider'

abstract class BaseDatabase <T> extends BaseProvider implements IDatabase <T> {
  [key: string]: T|any

  get __raw () {
    throw new NotImplementedError()
  }

  get Model (): IDatabaseModel<T> {
    throw new NotImplementedError()
  }
}

export {
  BaseDatabase
}
