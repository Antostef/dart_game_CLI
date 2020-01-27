class InvalidFormatError extends HttpError {
    constructor(message = 'Invalid Format', type = 'INVALID_FORMAT') {
        super(message)
        this.status = 400
        this.type = type
    }
}

module.exports = InvalidFormatError