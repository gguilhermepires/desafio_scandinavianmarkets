var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _Bot = require("./bot");
var _BotConfiguracao = require("./bot_configuracao");
var _BotEstrategia = require("./bot_estrategia");
var _BotLeitura = require("./bot_leitura");
var _BotStatus = require("./bot_status");
var _Usuario = require("./usuario");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Bot = _Bot(sequelize, DataTypes);
  var BotConfiguracao = _BotConfiguracao(sequelize, DataTypes);
  var BotEstrategia = _BotEstrategia(sequelize, DataTypes);
  var BotLeitura = _BotLeitura(sequelize, DataTypes);
  var BotStatus = _BotStatus(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);

  BotLeitura.belongsTo(Bot, { as: "bot", foreignKey: "bot_id"});
  Bot.hasMany(BotLeitura, { as: "bot_leituras", foreignKey: "bot_id"});
  Bot.belongsTo(BotConfiguracao, { as: "configuracao", foreignKey: "configuracao_id"});
  BotConfiguracao.hasMany(Bot, { as: "bots", foreignKey: "configuracao_id"});
  BotConfiguracao.belongsTo(BotEstrategia, { as: "estrategium", foreignKey: "estrategia_id"});
  BotEstrategia.hasMany(BotConfiguracao, { as: "bot_configuracaos", foreignKey: "estrategia_id"});
  Bot.belongsTo(BotStatus, { as: "status", foreignKey: "status_id"});
  BotStatus.hasMany(Bot, { as: "bots", foreignKey: "status_id"});
  Bot.belongsTo(Usuario, { as: "usuario", foreignKey: "usuario_id"});
  Usuario.hasMany(Bot, { as: "bots", foreignKey: "usuario_id"});

  return {
    SequelizeMeta,
    Bot,
    BotConfiguracao,
    BotEstrategia,
    BotLeitura,
    BotStatus,
    Usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
