'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bot_leitura', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      bot_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bot',
          key: 'id',
        },
      },
      moeda: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      valor_mercado_compra: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      valor_mercado_venda: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
        deletado: {
          allowNull: true,
          default: false,
          type: Sequelize.BOOLEAN,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deleted_at: {
          allowNull: true,
          type: Sequelize.DATE,
        },
    })
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bot_leitura');
  }
};
