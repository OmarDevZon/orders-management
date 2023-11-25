interface ProductInterface {
  orders?: [object];
  productName: string;
  price: number;
  quantity: number;
}

interface User {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  orders?: ProductInterface;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
}
export default User;
