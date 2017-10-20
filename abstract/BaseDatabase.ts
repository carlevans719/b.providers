import { IApplication } from '@webantic/w.app/common/interfaces/application'
import { IIndexable } from '../common/interfaces/decorators'

import { IDatabase } from 'common/interfaces/database';
import { NotImplementedError } from '../common/errors/NotImplementedError'
import { BaseProvider } from './BaseProvider'

abstract class BaseDatabase <T> extends BaseProvider implements IDatabase <T> {
  [key: string]: T|any
}

export {
  BaseDatabase
}
