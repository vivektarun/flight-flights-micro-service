'use strict';
const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const airplanes = [
      { modelNumber: 'airbus340', capacity: 900 },
      { modelNumber: 'boeing777', capacity: 450 },
      { modelNumber: 'airbusA380', capacity: 853 },
      { modelNumber: 'boeing787', capacity: 296 },
      { modelNumber: 'embraer190', capacity: 100 },
      { modelNumber: 'bombardierCRJ900', capacity: 90 },
      { modelNumber: 'boeing737', capacity: 215 },
      { modelNumber: 'airbusA320', capacity: 180 },
      { modelNumber: 'boeing747', capacity: 660 },
      { modelNumber: 'atr72', capacity: 78 }
    ].map(plane => ({
      ...plane,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Airplanes', airplanes, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airplanes', {
      [Op.or]: [
        { modelNumber: 'airbus340' },
        { modelNumber: 'boeing777' },
        { modelNumber: 'airbusA380' },
        { modelNumber: 'boeing787' },
        { modelNumber: 'embraer190' },
        { modelNumber: 'bombardierCRJ900' },
        { modelNumber: 'boeing737' },
        { modelNumber: 'airbusA320' },
        { modelNumber: 'boeing747' },
        { modelNumber: 'atr72' }
      ]
    }, {});
  }
};
