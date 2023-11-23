import mongoose from 'mongoose';
const { Schema } = mongoose;

import Orders from './orders.interface';

const ordersModel = new Schema<Orders>({
  userId: Number,
  orders: [
    {
      productName: { type: String, required: true, message: ' is required' },
      price: { type: Number, required: true, message: ' is required' },
      quantity: { type: Number, required: true, message: ' is required' },
    },
  ],
});


const user = mongoose.model<Orders>('Orders', ordersModel);
export default user;
