import { IApplication } from '@webantic/w.interfaces/application'
import { IDatabase, IDatabaseModel } from '@webantic/w.interfaces/databases'
import { IIndexable } from '@webantic/w.interfaces/decorators'

import { NotImplementedError } from '../common/errors/NotImplementedError'
import { BaseProvider } from './BaseProvider'

abstract class BaseDatabase <T> extends BaseProvider implements IDatabase <T> {
  [key: string]: T|any

  static groupName: string = 'database'

  // tslint:disable-next-line:variable-name
  __raw?: any
  Model: IDatabaseModel<T>
}

export {
  BaseDatabase
}
