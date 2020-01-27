const HttpError = require('./http_error')

class NotAcceptableError extends HttpError {
    constructor(message = 'Not Acceptable', type = 'NOT_ACCEPTABLE') {
        super(message)
        this.status = 406
        this.type = type
    }
}

module.exports = NotAcceptableError