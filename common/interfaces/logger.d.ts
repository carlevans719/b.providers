import { IIndexable } from './decorators'

type Logger = (message: string, ...args: any[]) => void

interface ILogger <T> {
  [name: string]: T|Logger|any
  __loggers: IIndexable<T>
}

export {
  Logger,
  ILogger
}
