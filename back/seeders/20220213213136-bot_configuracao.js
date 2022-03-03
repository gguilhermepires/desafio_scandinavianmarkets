'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('bot_configuracao', [
        {
          estrategia_id:1,
          moeda: 'BTTBRL',
        api_key: 'gguilhermepires@gmail.com',
        api_secret: 'guilherme',
        margem_lucro: 1.10,
        quantidade_compra: 1000,
        quantidade_venda: 1000,
        modo_debug: false,
        deletado: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('bot_configuracao', null, {});
  }
};
