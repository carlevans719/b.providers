import { IApplication } from '@webantic/w.app/common/interfaces/application'
import { IProvider } from '@webantic/w.app/common/interfaces/provider'

import { NotImplementedError } from '../common/errors/NotImplementedError'

abstract class BaseProvider {
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
