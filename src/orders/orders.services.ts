import userModel from '../users/users.model';
import ProductInterface from './orders.interface';
// import ProductInterface from './orders.interface';

export const ordersService = async (
  userId: number | null | undefined,
  product: any,
) => {
  const findUser = await userModel.findOne({ userId });

  const { productName, price, quantity } = product;

  if (findUser === null) {
    return false;
  } else {
    const result = await userModel.updateOne(
      { userId },
      {
        $push: {
          orders: { productName, price, quantity },
        },
      },
    );
    return result;
  }
};

export const getUserOrdersService = async (
  userId: number | null | undefined,
) => {
  const result = await userModel.findOne({ userId });

  return result;
};

export const totalPriceForSpecificUserService = async (
  userId: number | null | undefined,
) => {
  const findUser = await userModel.findOne({ userId });

  if (findUser === null) {
    return false;
  }

  const myOrders: any = findUser?.orders;

  let totalPrice = 0;
  myOrders?.map((product: ProductInterface) => {
    totalPrice += product.price * product.quantity;
  });

  const toFixedTotalPrice = totalPrice.toFixed(2);
  return {
    totalPrice: toFixedTotalPrice,
  };
};
