'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkInsert('detalleorden', [
      {
        'orden_idorden': 1,
        'producto_idproducto': 1,
        'Cantidad': 2,
        'preciounitario': 10.99
    },
    {
        'orden_idorden': 2,
        'producto_idproducto': 2,
        'Cantidad': 1,
        'preciounitario': 25.49
    },
    {
        'orden_idorden': 3,
        'producto_idproducto': 2,
        'Cantidad': 3,
        'preciounitario': 25.49
    },
    {
        'orden_idorden': 4,
        'producto_idproducto': 1,
        'Cantidad': 5,
        'preciounitario': 10.99
    },
    {
        'orden_idorden': 5,
        'producto_idproducto': 2,
        'Cantidad': 2,
        'preciounitario': 25.49
    }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('detalleorden', null, {});
  }
};