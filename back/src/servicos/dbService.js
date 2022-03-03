const Sequelize = require('sequelize');
require('dotenv').config();
const initModels = require('../modeloBanco/init-models');

module.exports  = class DbService {
  
    static async  criaConexao(){
      const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PWD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
      });
      var models = initModels(sequelize);
      return models;
    }

    static buscaModelos(){
     return initModels(new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PWD, {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql',
    }));
    }
  
  };