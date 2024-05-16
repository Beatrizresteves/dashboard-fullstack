// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/dashboardDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Conectado ao MongoDB');
});

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/api/employees', require('./routes/employeeRoutes'));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
