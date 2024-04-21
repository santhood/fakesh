import { IProductCart } from "@/types/cart-types"
import { IProduct } from "@/types/products-types"

export interface ICartState {
  showCart: boolean
  cart: IProductCart[]
  total: number
}

type ActionType =
  | { type: "SHOW" | "HIDDEN" }
  | { type: "ADD"; payload: IProduct }
  | { type: "INCREASE" | "DECREASE"; payload: number }

export const cartReducer = (state: ICartState, action: ActionType) => {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        showCart: true,
      }

    case "HIDDEN":
      return {
        ...state,
        showCart: false,
      }

    case "ADD": {
      const isExistingProduct = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      )
      if (isExistingProduct >= 0) {
        const newCartState = structuredClone(state.cart)
        newCartState[isExistingProduct].amount += 1
        return {
          ...state,
          cart: newCartState,
          total: (state.total = Number(
            (
              newCartState[isExistingProduct].price *
              newCartState[isExistingProduct].amount
            ).toFixed(2),
          )),
        }
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, amount: 1 }],
        total: state.total + action.payload.price,
        loading: false,
      }
    }

    case "INCREASE": {
      const isExistingProduct = state.cart.findIndex(
        (item) => item.id === action.payload,
      )
      const newCartState = structuredClone(state.cart)
      newCartState[isExistingProduct].amount += 1
      return {
        ...state,
        cart: newCartState,
        total: Number(
          (state.total + newCartState[isExistingProduct].price).toFixed(2),
        ),
      }
    }

    case "DECREASE": {
      const isExistingProduct = state.cart.findIndex(
        (item) => item.id === action.payload,
      )
      const newCartState = structuredClone(state.cart)
      newCartState[isExistingProduct].amount -= 1

      if (newCartState[isExistingProduct].amount < 1) {
        return {
          ...state,
          cart: newCartState.filter((product) => product.amount > 0),
        }
      }

      return {
        ...state,
        cart: newCartState,
        total: Number(
          (state.total - newCartState[isExistingProduct].price).toFixed(2),
        ),
      }
    }

    default:
      return state
  }
}
