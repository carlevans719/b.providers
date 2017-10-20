import { IApplication } from 'b.app/common/interfaces/application'

import { NotImplementedError } from '../common/errors/NotImplementedError'

abstract class BaseProvider {
  __application: IApplication
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
