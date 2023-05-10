"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Provinces", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },

      name: {
        type: Sequelize.STRING,
      },
      division_type: {
        type: Sequelize.STRING,
      },
      codename: {
        type: Sequelize.STRING,
      },
      phone_code: {
        type: Sequelize.STRING,
      },
      province_code: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Provinces");
  },
};
