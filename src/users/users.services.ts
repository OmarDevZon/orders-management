
import User from "./users.interface";
import userModel from "./users.model";

export const addUserService = async (user: User) => {
    const newUser = await userModel.create(user);
    return newUser;
  };

