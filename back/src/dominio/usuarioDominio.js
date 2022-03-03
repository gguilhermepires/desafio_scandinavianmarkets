const usuarioServico = require('../servicos/usuarioService');
const RespostaServidor = require('../infraestrutura/respostaServidor');
class UsuarioDominio {

  static async  login(requestBody){
    const {email, senha} = requestBody;
    const usuario = await usuarioServico.buscaUsuarioEmail(email);
    if(usuario == null )
      return RespostaServidor.cria(401, 'Usuário inválido ou inexistente');
   
    if(usuario.senha != senha)
      return RespostaServidor.cria(401, 'Usuário inválido ou inexistente');

      usuario.senha  = '';
      return RespostaServidor.cria(200, '', usuario);

  }

}
module.exports = UsuarioDominio;