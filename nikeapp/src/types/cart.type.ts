import { Product } from "./product.type"

export interface Cart {
    product: Product,
    size: number,
    quantity: number
}