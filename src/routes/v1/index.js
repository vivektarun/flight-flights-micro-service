const express = require('express');

const { InfoController } = require('../../controllers'); // By default from controller index.js is imported.
const airplaneRoutes = require('./airplane-route');

const router = express.Router();

router.get('/info', InfoController.info);
router.use('/airplanes', airplaneRoutes);

module.exports = router;