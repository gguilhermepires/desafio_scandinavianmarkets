const DbService = require('./dbService');

module.exports =  class UsuarioService {

    static async  buscaUsuarioEmail(email){
        const modelos = await DbService.criaConexao(); 
        return modelos.Usuario.findOne({where: {email: email}});
    }
  
};