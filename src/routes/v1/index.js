const express = require('express');

const { InfoController } = require('../../controllers'); // By default from controller index.js is imported.
const airplaneRoutes = require('./airplane-route');
const cityRoutes = require('./city-route');

const router = express.Router();

router.get('/info', InfoController.info);
router.use('/airplanes', airplaneRoutes);
router.use('/city', cityRoutes);

module.exports = router;