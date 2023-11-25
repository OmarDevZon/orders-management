interface ProductInterface {
  userId? : number;
  orders?: [object];
  productName: string;
  price: number;
  quantity: number;
}

export default ProductInterface;
