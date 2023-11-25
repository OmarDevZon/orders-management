import mongoose from 'mongoose';
import ProductInterface from './orders.interface';
const { Schema } = mongoose;



const ordersModel = new Schema<ProductInterface>({
  userId: {type : Number , required : true},
  orders: [
    {
      productName: { type: String, required: true, message: ' is required' },
      price: { type: Number, required: true, message: ' is required' },
      quantity: { type: Number, required: true, message: ' is required' },
    },
  ],
});


const user = mongoose.model<ProductInterface>('Orders', ordersModel);
export default user;
