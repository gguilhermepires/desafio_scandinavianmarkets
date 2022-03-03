'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bot', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      usuario_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      status_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bot_status',
          key: 'id',
        },
      },
      configuracao_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bot_configuracao',
          key: 'id',
        },
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
    await queryInterface.dropTable('usuario');
  }
};
