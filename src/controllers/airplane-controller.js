const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


async function createAirplane(req, res) {
    try {
        const { modelNumber, capacity } = req.body;

        const airplane = await AirplaneService.createAirplane({
            modelNumber,
            capacity,
        });
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function destroyAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateAirplane(req, res) {
    try {
        const { id } = req.params;  // Extract the airplane ID from the request params
        const { modelNumber, capacity } = req.body;  // Extract updated values from the request body

        // Update the airplane with the new data
        const updatedAirplane = await AirplaneService.updateAirplane(id, {
            modelNumber,
            capacity
        });

        // If the airplane doesn't exist or update fails, return an error
        if (!updatedAirplane) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: `Airplane with ID ${id} not found`,
                data: {},
                error: {}
            });
        }

        // Return the updated airplane in the success response
        SuccessResponse.data = updatedAirplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        // Handle errors
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
};