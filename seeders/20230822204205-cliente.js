'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkInsert('cliente', [
      {
        'nombre': 'Cliente 1',
        'correo': 'cliente1@example.com',
        'direccion': 'Dirección 1'
    },
    {
        'nombre': 'Cliente 2',
        'correo': 'cliente2@example.com',
        'direccion': 'Dirección 2'
    },
    {
        'nombre': 'Cliente 3',
        'correo': 'cliente3@example.com',
        'direccion': 'Dirección 3'
    },
    {
        'nombre': 'Cliente 4',
        'correo': 'cliente4@example.com',
        'direccion': 'Dirección 4'
    },
    {
        'nombre': 'Cliente 5',
        'correo': 'cliente5@example.com',
        'direccion': 'Dirección 5'
    }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('cliente', null, {});
  }
};