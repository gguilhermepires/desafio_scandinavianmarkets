const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BotConfiguracao', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estrategia_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bot_estrategia',
        key: 'id'
      }
    },
    moeda: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    api_key: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    api_secret: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    margem_lucro: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    quantidade_compra: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    quantidade_venda: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    modo_debug: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'bot_configuracao',
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
        name: "estrategia_id",
        using: "BTREE",
        fields: [
          { name: "estrategia_id" },
        ]
      },
    ]
  });
};
