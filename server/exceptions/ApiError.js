

export default class ApiError extends Error{
    status;
    errors;

    constructor(status, message, errors) {
        super(message);
        this.status = status
        this.errors = errors
    }

    static UnauthorizedError(username) {
        return new ApiError(401, `User ${username} not authorized`)
    }
    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }
}