import userModel from '../users/users.model';
import ordersModel from './/orders.model';


export const ordersService = async (
  id: number | null | undefined,
  product: any,
) => {
  const findUser = await userModel.findOne({ userId: id });
  const findOrders = await ordersModel.findOne({ userId: id });

  const { productName, price, quantity } = product;
  const createOrder = {
    userId: id,
    orders: [{ productName, price, quantity }],
  };

  if (findUser === null) {
    return false;
  } else {
    if (findOrders === null) {
      const result = await ordersModel.create(createOrder);
      return result;
    } else {
      const result = await ordersModel.updateOne(
        { userId: id },
        {
          $push: {
            orders: { productName, price, quantity },
          },
        },
      );
      return result;
    }
  }
};
