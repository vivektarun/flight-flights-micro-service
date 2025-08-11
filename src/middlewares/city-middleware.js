const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

// Middleware to validate the create request
function validateCreateRequest(req, res, next) {
    const { name } = req.body;

    // Check if required 'name' field is provided in the body
    if (!name) {
        ErrorResponse.message = `Something went wrong while creating the city`;
        ErrorResponse.error = new AppError([
            'Name is a required field and must be present in the incoming request',
            StatusCodes.BAD_REQUEST
        ]);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

// Middleware to validate the update request
function validateUpdateRequest(req, res, next) {
    const { name } = req.body;

    // Check if at least one field (name) is provided for updating
    if (!name) {
        ErrorResponse.message = `Something went wrong while updating the city`;
        ErrorResponse.error = new AppError([
            'Name must be present in the update request',
            StatusCodes.BAD_REQUEST
        ]);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest,
};
