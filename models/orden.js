const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orden', {
    idorden: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fechacompra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cliente_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cliente',
        key: 'idcliente'
      }
    }
  }, {
    sequelize,
    tableName: 'orden',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idorden" },
          { name: "cliente_idcliente" },
        ]
      },
      {
        name: "fk_orden_cliente_idx",
        using: "BTREE",
        fields: [
          { name: "cliente_idcliente" },
        ]
      },
    ]
  });
};
