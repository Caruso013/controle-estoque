const mongoose = require('mongoose');

// URI de conexão ao MongoDB
const uri = "mongodb+srv://admin:090424Mp@controle-estoque.yqxjjg9.mongodb.net/?retryWrites=true&w=majority&appName=controle-estoque";

// Conectar ao MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB!');
});

// Definir um esquema e modelo simples
const ItemSchema = new mongoose.Schema({
  nome: String,
  quantidade: Number,
});

const Item = mongoose.model('Item', ItemSchema);

// Exemplo de inserção de um item
const novoItem = new Item({
  nome: 'Produto A',
  quantidade: 10,
});

novoItem.save((err, itemInserido) => {
  if (err) return console.error('Erro ao inserir item:', err);
  console.log('Item inserido com sucesso:', itemInserido);
  // Aqui você pode fazer qualquer outra operação após a inserção, se necessário
});
