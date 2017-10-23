import { IApplication } from '@webantic/w.interfaces/application'
import { IDatabase, IDatabaseModel } from '@webantic/w.interfaces/databases'
import { IIndexable } from '@webantic/w.interfaces/decorators'
import * as Mongo from 'meteor/mongo'

import { BaseDatabase } from '../abstract/BaseDatabase'
import { MissingParameterError } from '../common/errors/MissingParameterError'
import { required as r } from '../common/decorators/parameters'

class MeteorMongoDatabase extends BaseDatabase <any> implements IDatabase <any> {
  constructor (application: IApplication, config: any) {
    super(application, config)

    if (!config || !config.mongo) {
      throw new MissingParameterError('config.')
    }

    this.__raw = config.mongo

    this.__Model = config.mongo.Collection
    this.__models = {}
  }

  getModel (modelName: string = r('modelName'), options?: any) {
    if (!this.__models[modelName]) {
      if (this.__Model === undefined) {
        throw new MissingParameterError('__Model')
      }

      this.__models[modelName] = new this.__Model(modelName, options)
    }
    
    return this.__models[modelName]
  }
}

export default MeteorMongoDatabase
