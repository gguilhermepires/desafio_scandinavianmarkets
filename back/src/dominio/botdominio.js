const usuarioServico = require('../servicos/usuarioService');
const DbService = require('../servicos/dbService');
const BotService = require('../servicos/botService');
const RespostaServidor = require('../infraestrutura/respostaServidor');

var BotConfiguracao = require("../modeloBanco/bot_configuracao");
var BotStatus = require("../modeloBanco/bot_status");



class BotDominio {

    static async buscaBotsAtivos(requestBody) {
        let bots = await BotService.buscaBotsAtivos();
        return bots;
    }

}
module.exports = BotDominio;