const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BotLeitura', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bot',
        key: 'id'
      }
    },
    moeda: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    valor_mercado_compra: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    valor_mercado_venda: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    deletado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bot_leitura',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "bot_id",
        using: "BTREE",
        fields: [
          { name: "bot_id" },
        ]
      },
    ]
  });
};
