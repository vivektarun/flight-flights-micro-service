'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cities = [
      'Delhi',
      'Mumbai',
      'Bangalore',
      'Hyderabad',
      'Chennai',
      'Kolkata',
      'Pune',
      'Ahmedabad',
      'Jaipur',
      'Lucknow'
    ];

    await queryInterface.bulkInsert(
      'Cities',
      cities.map((city) => ({
        name: city,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    );
  },

  async down(queryInterface, Sequelize) {
    const cities = [
      'Delhi',
      'Mumbai',
      'Bangalore',
      'Hyderabad',
      'Chennai',
      'Kolkata',
      'Pune',
      'Ahmedabad',
      'Jaipur',
      'Lucknow'
    ];

    await queryInterface.bulkDelete('Cities', {
      name: cities
    });
  }
};
