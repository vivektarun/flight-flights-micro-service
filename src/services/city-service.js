const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const { CityRepository } = require('../repositories');

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const explanation = error.errors.map(err => err.message);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCities() {
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw new AppError('Cannot fetch data of all cities', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id) {
    try {
        const city = await cityRepository.get(id);
        if (!city) {
            throw new AppError('City not found', StatusCodes.NOT_FOUND);
        }
        return city;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw error;
        }
        throw new AppError('Cannot fetch data of the city', StatusCodes.BAD_REQUEST);
    }
}

async function updateCity(id, data) {
    try {
        const updatedCity = await cityRepository.update(id, data);
        if (!updatedCity) {
            throw new AppError('City not found', StatusCodes.NOT_FOUND);
        }
        return updatedCity;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw error;
        }
        throw new AppError('Cannot update city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        if (!response) {
            throw new AppError('City not found', StatusCodes.NOT_FOUND);
        }
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw error;
        }
        throw new AppError('Cannot delete city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    getCities,
    getCity,
    updateCity,
    destroyCity,
};
