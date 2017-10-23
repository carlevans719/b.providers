import { IApplication } from '@webantic/w.interfaces/application'
import { IDatabase } from '@webantic/w.interfaces/databases'
import * as Mongo from 'meteor/mongo'

import { BaseDatabase } from '../abstract/BaseDatabase'
import { MissingParameterError } from '../common/errors/MissingParameterError'

class MeteorMongoDatabase extends BaseDatabase <any> implements IDatabase <any> {
  constructor (application: IApplication, config: any) {
    super(application, config)

    if (!config || !config.mongo) {
      throw new MissingParameterError('config.')
    }

    this.__raw = config.mongo

    this.Model = config.mongo.Collection
  }
}

export default MeteorMongoDatabase
