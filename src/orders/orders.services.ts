import userModel from '../users/users.model';
import ProductInterface from './orders.interface';
import ordersModel from './orders.model';

export const ordersService = async (
  userId: number | null | undefined,
  product: any,
) => {
  const findUser = await userModel.findOne({ userId });
  const findOrders = await ordersModel.findOne({ userId });

  const { productName, price, quantity } = product;
  const createOrder = {
    userId,
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
        { userId },
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

export const getUserOrdersService = async (
  userId: number | null | undefined,
) => {
  const result = await ordersModel.findOne({ userId });

  return result;
};
export const totalPriceForSpecificUserService = async (
  userId: number | null | undefined,
) => {
  const result = await ordersModel.findOne({ userId });

  const myOrders = result?.orders;

  let totalPrice = 0;
  (myOrders as ProductInterface[])?.map((product: ProductInterface) => {
    totalPrice += product.price * product.quantity;
  });

  return {
    totalPrice,
  };
};
