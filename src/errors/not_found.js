const HttpError = require('./http_error')

class NotFoundError extends HttpError {
    constructor(message = 'Not found', type = 'NOT_FOUND') {
        super(message)
        this.status = 404
        this.type = type
    }
}

module.exports = NotFoundError