'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requisicaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      veiculo: {
        type: Sequelize.STRING
      },
      funcionario: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      requisicaoParticular: {
        type: Sequelize.BOOLEAN
      },
      requisicaoEmpresa: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Requisicaos');
  }
};