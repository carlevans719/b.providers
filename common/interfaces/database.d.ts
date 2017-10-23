interface IDatabase <T = any> {
  __raw ?: any
  Model: IDatabaseModel <T>
}

interface IDatabaseModelStatic <T = any> {
  new (...args: any[]) : IDatabaseModel <T>
  find (...args: any[]) : T[]
  findOne (...args: any[]) : T
  insert (doc: T, ...rest: any[]) : string | number
  update (...args: any[]) : number
  delete (...args: any[]) : number
}

interface IDatabaseModel <T = any> {
  data : T
  save () : boolean
}

export {
  IDatabase,
  IDatabaseModelStatic,
  IDatabaseModel
}
