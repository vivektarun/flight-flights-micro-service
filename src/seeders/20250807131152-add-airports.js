'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'John F. Kennedy International Airport',
        code: 'JFK',
        address: 'JFK Address',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Los Angeles International Airport',
        code: 'LAX',
        address: 'LAX Address',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airports', null, {});
  }
};
