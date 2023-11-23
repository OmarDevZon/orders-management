import config from '../config';
import User from './users.interface';
import bcrypt from 'bcrypt';

export function passwordPlashing(userModel: User) {
  userModel.pre('save', async function (next) {
    this.password = await bcrypt.hash(
      this?.password,
      Number(config.BCRYPT_ROUNDS),
    );
    next();
  });
}

export function passwordHide(userModel: User) {
  userModel.post('save', function (doc, next) {
    doc.userId = '';
    doc.password = '';
    doc.isActive = '';
    doc.hobbies = '';

    next();
  });
}
