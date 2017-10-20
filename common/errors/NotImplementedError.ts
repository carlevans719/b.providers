import { BaseError } from './BaseError'

class NotImplementedError extends BaseError {
  constructor () {
    super(`Not Implemented`)
  }
}

export {
  NotImplementedError
}
