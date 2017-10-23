import { IApplication } from '@webantic/w.app/common/interfaces/application'
import * as Mongo from 'meteor/mongo'
import { IDatabase } from '../common/interfaces/database'

import { BaseDatabase } from '../abstract/BaseDatabase'
import { MissingParameterError } from '../common/errors/MissingParameterError'

class MeteorMongoDatabase extends BaseDatabase <any> implements IDatabase <any> {
  constructor (application: IApplication, config: any) {
    super(application, config)

    if (!config || !config.mongo) {
      throw new MissingParameterError('config.')
    }
    this.Mongo = config.mongo
  }
}

export {
  MeteorMongoDatabase
}
