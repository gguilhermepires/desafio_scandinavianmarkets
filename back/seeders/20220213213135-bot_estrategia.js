'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bot_estrategia', [
      {
        nome: 'Estrategia 1',
        slug: 'estrategia-1',
        deletado: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bot_estrategia', null, {});
  }
};
