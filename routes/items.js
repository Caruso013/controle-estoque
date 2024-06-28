const express = require('express');
const router = express.Router();
const itemsController = require('@/itemsController');

// Rota para buscar todos os itens
router.get('/', itemsController.getAllItems);

// Rota para adicionar um novo item
router.post('/', itemsController.addItem);

module.exports = router;
