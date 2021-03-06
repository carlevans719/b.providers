import { IApplication } from '@webantic/w.interfaces/application'
import { IProvider } from '@webantic/w.interfaces/providers'

import { NotImplementedError } from '../common/errors/NotImplementedError'

abstract class BaseProvider {
  static groupName?: string
  // tslint:disable-next-line:variable-name
  __application: IApplication
  // tslint:disable-next-line:variable-name
  __config: any

  constructor (application: IApplication, config: any) {
    this.__application = application
    this.__config = config
  }

  inject (...args: any[]) {
    throw new NotImplementedError()
  }
}

export {
  BaseProvider
}
