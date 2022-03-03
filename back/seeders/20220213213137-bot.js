'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('bot', [
        {
        nome: 'bot guilherme',
        usuario_id: 1,
        status_id: 1,
        configuracao_id: 1,
        deletado: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('bot', null, {});
  }
};
