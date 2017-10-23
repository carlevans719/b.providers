import { IApplication } from '@webantic/w.interfaces/application'
import { IDatabase, IDatabaseModel, IDatabaseModelStatic } from '@webantic/w.interfaces/databases'
import { IIndexable } from '@webantic/w.interfaces/decorators'

import { NotImplementedError } from '../common/errors/NotImplementedError'
import { BaseProvider } from './BaseProvider'

abstract class BaseDatabase <T> extends BaseProvider implements IDatabase <T> {
  [key: string]: T|any

  static groupName: string = 'database'

  // tslint:disable-next-line:variable-name
  __raw?: any
  // tslint:disable-next-line:variable-name
  __Model?: IDatabaseModelStatic<T>
  // tslint:disable-next-line:variable-name
  __models: IIndexable<IDatabaseModel<T>>

  get Model (): IDatabaseModelStatic<T> {
    const self = this

    if (this.__Model === undefined) {
      throw new ReferenceError(`Database.__Model is not defined`)
    }

    // tslint:disable-next-line:max-classes-per-file
    return class Model extends this.__Model {
      constructor (name: string, ...args: any[]) {
        super(name, ...args)

        // self.__Model is verified to not be undefined above
        const model = new (self.__Model as IDatabaseModelStatic<T>)(name, ...args)

        self.__models[name] = model

        return model
      }
    }
  }
}

export {
  BaseDatabase
}
