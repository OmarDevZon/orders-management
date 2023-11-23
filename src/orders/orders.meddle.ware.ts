import OrdersInterface from './orders.interface';


export function ordersMeddleWare(ordersModel: OrdersInterface) {
  ordersModel.pre('save', async function (next) {
    try {
      const userId = req.params.id;

      this.userId = userId;

      next();
    } catch (error) {
      next(error);
    }
  });
}
