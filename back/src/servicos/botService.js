const DbService = require('./dbService');
const Bot = require('../modelo/bot');

module.exports =  class BotService {

    static async buscaBotsAtivos(){
        var models = await DbService.buscaModelos();
        let bots = await models.Bot.findAll({
            include: [
                {
                    model: models.BotConfiguracao, as: 'configuracao',
                    include: [
                        {
                            model: models.BotEstrategia, as: 'estrategium',
                            attributes: ["id", "nome"]
                        },
                    ]
                },
                { model: models.BotStatus, as: 'status' },

            ],
            where: {
                deletado: false,
            },
            attributes: ["id", "nome", "usuario_id"]
            ,
        });
        let lista = [];
        bots.forEach(botBanco => {
            lista.push(Bot.criaApartirBanco(botBanco));
        });
        return lista;
    }
  
};