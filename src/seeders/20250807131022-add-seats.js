'use strict';

const { Enums } = require('../utils/common');
const { ECONOMY, BUSINESS, PREMIUM_ECONOMY, FIRST_CLASS } = Enums.SEAT_TYPE;

module.exports = {
  async up(queryInterface, Sequelize) {
    const seats = [];
    const seatTypes = [ECONOMY, BUSINESS, PREMIUM_ECONOMY, FIRST_CLASS];

    for (let row = 1; row <= 5; row++) {
      for (const col of ['A', 'B', 'C', 'D']) {
        seats.push({
          airplaneId: 1,
          row: row,
          col: col,
          type: seatTypes[Math.floor(Math.random() * seatTypes.length)],
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    await queryInterface.bulkInsert('Seats', seats);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Seats', null, {});
  }
};
