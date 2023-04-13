export interface User {
  userName: string;
  userCart: UserCart[];
}

export interface UserCart {
  productId: string;
  quantity: number;
}
