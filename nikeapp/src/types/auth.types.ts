import {UserCart} from './user.type';

export interface Register {
  _id: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  cart: UserCart[];
  createdAt?: Date;
  UpdatedAt?: Date;
}

export interface Login {
  token: string;
  user: Register;
}
