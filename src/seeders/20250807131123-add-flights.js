'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flights', [
      {
        flightNumber: 'FL101',
        airplaneId: 1, // must exist in Airplanes table
        departureAirportId: '1', // string type as per your model
        arrivalAirportId: '2',   // string type as per your model
        departureTime: new Date(new Date().getTime() + 3600000), // 1 hour from now
        arrivalTime: new Date(new Date().getTime() + 10800000),  // 3 hours from now
        price: 4500,
        boardingGate: 'B2',
        totalSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Flights', {
      flightNumber: 'FL101'
    }, {});
  }
};
