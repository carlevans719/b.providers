import { ConflictError } from './abstract'

class LogLevelConflictError extends ConflictError {
  constructor (level: string) {
    super(`Log Level: "${level}" already defined`)
  }
}

export {
  LogLevelConflictError
}
