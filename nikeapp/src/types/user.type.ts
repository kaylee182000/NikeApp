export interface User {
  userName: string;
  userCart: userCart[];
}

export interface userCart {
  productId: string;
  quantity: number;
}
