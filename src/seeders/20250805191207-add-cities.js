'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      { name: 'New York', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Los Angeles', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chicago', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Houston', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phoenix', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
