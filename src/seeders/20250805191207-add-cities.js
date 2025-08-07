'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      { id: 1, name: 'New York', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Los Angeles', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Chicago', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Houston', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Phoenix', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
