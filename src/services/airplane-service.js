const { StatusCodes } = require('http-status-codes');

const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name === 'ValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirplanes() {
    try {
        const ariplanes = await airplaneRepository.getAll();
        return ariplanes;
    } catch(error) {
        throw new AppError('cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested is not present');
        }
        throw new AppError("Cannot fetch data of the airplane", StatusCodes.BAD_REQUEST);
    }
}

async function destroyAirplane(id) {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested to delete is not present')
        }
        throw new AppError(`Cannot destroy airplane`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id, data) {
    try {
        // Check if the airplane exists
        const airplane = await airplaneRepository.get(id);
        
        // If the airplane is not found, throw a 404 error
        if (!airplane) {
            throw new AppError('The airplane you requested to update does not exist', StatusCodes.NOT_FOUND);
        }

        // Proceed with the update if the airplane is found
        const updatedAirplane = await airplaneRepository.update(id, data);

        // Return the updated airplane object
        return updatedAirplane;
    } catch (error) {
        // Handle validation errors from the repository layer
        if (error.name === 'ValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        
        // General error handling
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested to update is not found', StatusCodes.NOT_FOUND);
        }

        // Catch any other unexpected errors
        throw new AppError('Cannot update the airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}