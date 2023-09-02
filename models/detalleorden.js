const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalleorden', {
    'detalle-ordenid': {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    producto_idproducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'producto',
        key: 'idproducto'
      }
    },
    orden_idorden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orden',
        key: 'idorden'
      }
    },
    preciounitario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'detalleorden',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "detalle-ordenid" },
          { name: "orden_idorden" },
          { name: "producto_idproducto" },
        ]
      },
      {
        name: "fk_producto_has_orden_orden1_idx",
        using: "BTREE",
        fields: [
          { name: "orden_idorden" },
        ]
      },
      {
        name: "fk_producto_has_orden_producto1_idx",
        using: "BTREE",
        fields: [
          { name: "producto_idproducto" },
        ]
      },
    ]
  });
};
