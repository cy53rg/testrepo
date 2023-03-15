const ErrorResponse = require('../../utils/errorResponse')

class UnAuthenticated extends ErrorResponse {
  name = 'UnAuthenticated'
  constructor(message) {
    super(message, 401)
  }
}

module.exports = UnAuthenticated
