export interface User {
  userName: string;
  userCart: UserCart[];
}

export interface UserProfile {
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

export interface UserCart {
  productId: string;
  quantity: number;
}
