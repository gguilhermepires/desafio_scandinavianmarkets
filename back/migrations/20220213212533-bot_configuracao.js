'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bot_configuracao', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      estrategia_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bot_estrategia',
          key: 'id',
        },
      },
      moeda: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      api_key: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      api_secret: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      moeda: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      margem_lucro:{
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      quantidade_compra:{
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      quantidade_venda:{
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      modo_debug: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('bot_configuracao');
  }
};
