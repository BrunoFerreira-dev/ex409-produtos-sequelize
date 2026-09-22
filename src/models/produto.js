const { Sequelize, DataTypes } = require("sequelize");

// Banco SQLite em arquivo local (criado automaticamente ao subir o servidor).
// Você pode trocar para ':memory:' se preferir um banco em memória.
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "produtos.sqlite",
  logging: false,
});

// ─── Modelo Produto ───────────────────────────────────────────────────────────
// Campos exigidos: id (inteiro, automático), descricao (texto), preco (float).
const Produto = sequelize.define(
  "Produto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "produtos",
    timestamps: false,
  },
);

module.exports = { sequelize, Produto };
