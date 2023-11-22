import User from './users.interface';
import userModel from './users.model';

export const addUserService = async (user: User) => {
  const result = await userModel.create(user);
  return result;
};
export const getAllUserService = async () => {
  const result = await userModel.find();
  return result;
};
