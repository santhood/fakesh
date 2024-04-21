import { IProduct } from "./products-types"

export interface IProductCart extends IProduct {
  amount: number
}
