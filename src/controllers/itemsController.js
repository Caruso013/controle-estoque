const Item = require('../models/Item');

// Controller para buscar todos os itens
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
    res.status(500).json({ message: 'Erro ao buscar itens.' });
  }
};

// Controller para adicionar um novo item
exports.addItem = async (req, res) => {
  const { name, quantity, category, price } = req.body;

  try {
    const newItem = new Item({ name, quantity, category, price });
    await newItem.save();
    res.json({ message: 'Item cadastrado com sucesso', item: newItem });
  } catch (error) {
    console.error('Erro ao cadastrar item:', error);
    res.status(500).json({ message: 'Erro ao cadastrar item.' });
  }
};
