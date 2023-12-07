const express = require('express');
const cors = require('cors');

// Rotas :
const Mercado_Pago = require('./router/Mercado_Pago_Router.jsx');

const server = express();

// Configuração do CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Substitua pelo seu domínio de frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

// Aplicação do middleware do cors
server.use(cors(corsOptions));

// Configuração das rotas
server.use(express.json());
server.use('/Mercado_Pago', Mercado_Pago);

module.exports = server;
