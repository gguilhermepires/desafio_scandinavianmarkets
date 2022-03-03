'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bot_status', [
      {
        nome: 'Aguardando comando',
        slug: 'aguardando-comando',
        deletado: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Executando',
        slug: 'executando',
        deletado: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Parado',
        slug: 'parado',
        deletado: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Com erro',
        slug: 'com-erro',
        deletado: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bot_status', null, {});
  }
};
