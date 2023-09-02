'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkInsert('producto', [
      {
        'nombre': 'Producto 1',
        'descripcion': 'Descripción del producto 1',
        'precio': 10.99,
        'stock': 50
    },
    {
        'nombre': 'Producto 2',
        'descripcion': 'Descripción del producto 2',
        'precio': 25.49,
        'stock': 30
    },
    {
        'nombre': 'Producto 3',
        'descripcion': 'Descripción del producto 3',
        'precio': 5.99,
        'stock': 100
    },
    {
        'nombre': 'Producto 4',
        'descripcion': 'Descripción del producto 4',
        'precio': 8.75,
        'stock': 75
    },
    {
        'nombre': 'Producto 5',
        'descripcion': 'Descripción del producto 5',
        'precio': 15.99,
        'stock': 60
    }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('producto', null, {});
  }
};