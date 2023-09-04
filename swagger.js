const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/rest_cliente.js','./routes/rest_producto.js','./routes/rest_orden.js','./routes/rest_detalleorden.js']

swaggerAutogen(outputFile, endpointsFiles)