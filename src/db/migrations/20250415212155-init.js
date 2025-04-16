'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WatchLists', {  // Table name here
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true,
      },
      symbol: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      notes: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      companyName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // Add more columns as needed
      createdAt: {  // Sequelize automatically manages these timestamps
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WatchLists');
  }
};
