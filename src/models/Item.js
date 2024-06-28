const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/Item'); // Importe o modelo de Item do MongoDB

const app = express();
const port = 3000;

// Conexão com o MongoDB (substitua com sua URI)
mongoose.connect('mongodb://localhost:27017/meu-banco-de-dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rota para buscar todos os itens
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find(); // Busca todos os itens no banco de dados
    res.json(items); // Retorna os itens como JSON
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
    res.status(500).json({ message: 'Erro ao buscar itens.' });
  }
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
