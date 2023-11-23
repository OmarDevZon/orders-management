import User from './users.interface';
import userModel from './users.model';

export const addUserService = async (user: User) => {
  const result = await userModel.create(user);
  return result;
};
export const getAllUserService = async () => {
  const result = await userModel
    .find()
    .select('-userId')
    .select('-password')
    .select('-isActive')
    .select('-hobbies');
  return result;
};
export const getUserByIdService = async (id: number | null | undefined) => {
  const result = await userModel
    .findOne({ userId: id })
    .select('-userId')
    .select('-password')
    .select('-isActive')
    .select('-hobbies');

  return result;
};

export const deleteUserByIdService = async (id: number | null | undefined) => {
  const result = await userModel.deleteOne({ userId: id });
  return result;
};
