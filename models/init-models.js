var DataTypes = require("sequelize").DataTypes;
var _cliente = require("./cliente");
var _detalleorden = require("./detalleorden");
var _orden = require("./orden");
var _producto = require("./producto");

function initModels(sequelize) {
  var cliente = _cliente(sequelize, DataTypes);
  var detalleorden = _detalleorden(sequelize, DataTypes);
  var orden = _orden(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);

  orden.belongsToMany(producto, { as: 'producto_idproducto_productos', through: detalleorden, foreignKey: "orden_idorden", otherKey: "producto_idproducto" });
  producto.belongsToMany(orden, { as: 'orden_idorden_ordens', through: detalleorden, foreignKey: "producto_idproducto", otherKey: "orden_idorden" });
  orden.belongsTo(cliente, { as: "cliente_idcliente_cliente", foreignKey: "cliente_idcliente"});
  cliente.hasMany(orden, { as: "ordens", foreignKey: "cliente_idcliente"});
  detalleorden.belongsTo(orden, { as: "orden_idorden_orden", foreignKey: "orden_idorden"});
  orden.hasMany(detalleorden, { as: "detalleordens", foreignKey: "orden_idorden"});
  detalleorden.belongsTo(producto, { as: "producto_idproducto_producto", foreignKey: "producto_idproducto"});
  producto.hasMany(detalleorden, { as: "detalleordens", foreignKey: "producto_idproducto"});

  return {
    cliente,
    detalleorden,
    orden,
    producto,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
