'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('usuario', [
        {
        nome: 'guilherme',
        email: 'gguilhermepires@gmail.com',
        senha: 'guilherme'
      },
      {
        nome: 'kevin',
        email: 'kevin@gmail.com',
        senha: 'kevin'
      },
      {
        nome: 'pretinho',
        email: 'pretinho@gmail.com',
        senha: 'pretinho'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuario', null, {});
  }
};
