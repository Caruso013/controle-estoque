const express = require('express');
const mongoose = require('mongoose');
const itemsRouter = require('./routes/items');
require('dotenv').config(); // Para carregar variáveis de ambiente do .env

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Conexão com o MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/items', itemsRouter); // Rota para manipulação de itens

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
