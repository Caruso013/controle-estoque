// models/Item.js

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 245,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
    max: 99,
  },
  category: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
