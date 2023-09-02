'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkInsert('orden', [
      {
        'Fechacompra': '2023-08-21',
        'Estado': 'Pendiente',
        'cliente_idcliente': 1
    },
    {
        'Fechacompra': '2023-08-20',
        'Estado': 'En proceso',
        'cliente_idcliente': 1
    },
    {
        'Fechacompra': '2023-08-19',
        'Estado': 'Entregado',
        'cliente_idcliente': 1
    },
    {
        'Fechacompra': '2023-08-18',
        'Estado': 'Pendiente',
        'cliente_idcliente': 2
    },
    {
        'Fechacompra': '2023-08-17',
        'Estado': 'En proceso',
        'cliente_idcliente': 2
    }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('orden', null, {});
  }
};