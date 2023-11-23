import ordersModel from './orders.model';

export const ordersService = async (
  id: number | null | undefined,
  product: any,
) => {
  const result = await ordersModel.findOne({ userId: id });

  // console.log(product);
  const { productName, price, quantity } = product;
  const createOrder = {
    userId: id,
    orders: [{ productName, price, quantity }],
  };

  if (result === null) {
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
};
