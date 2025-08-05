'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports', {
      type: 'FOREIGN KEY',
      name: 'city-fkey_constraint',
      fields: ['cityId'],
      references: {
        table: 'Cities',
        field: 'id', // Corrected from 'key' to 'field'
      },
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'city-fkey_constraint');
  },
};
