import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  category: String,
  price: Number,
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
