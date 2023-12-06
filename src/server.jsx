const express = require('express');
const cors = require('cors');

// Rotas :
const Mercado_Pago = require('./router/Mercado_Pago_Router.jsx');

const server = express();

//*- proxy - middleware :
server.use(express.json());
server.use(cors());
server.use('/Mercado_Pago', Mercado_Pago);

module.exports = server;