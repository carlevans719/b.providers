import { BaseError } from './BaseError'

class MissingParameterError extends BaseError {
  constructor (parameterName: string, reason?: string) {
    let str = `Invalid parameter ${parameterName}`
    if (reason) {
      str += `: ${reason}`
    }

    super(str)
  }
}

export {
  MissingParameterError
}
