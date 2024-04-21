"use client"

import { createContext, useContext, useReducer, useState } from "react"
import { ICartState, cartReducer } from "./CartReducer"
import { IProductCart } from "@/types/cart-types"

interface ICartContext {
  showCart: boolean
  cart: IProductCart[]
  total: number
  handleShowCart: (action: "SHOW" | "HIDDEN") => void
  handleAddToCart: (productId: number) => void
  handleAmountProduct: (
    productId: number,
    actionType: "INCREASE" | "DECREASE",
  ) => void
}

interface ICartProvider {
  children: React.ReactNode
}

const CartContext = createContext<ICartContext | null>(null)

// CUSTOM HOOK
export function useCartContext() {
  return useContext(CartContext) as ICartContext
}

const intialState: ICartState = {
  showCart: false,
  cart: [],
  total: 0,
}

// PROVIDER
export function CartProvider({ children }: ICartProvider) {
  const [state, dispatch] = useReducer(cartReducer, intialState)

  const handleShowCart = (actionType: "SHOW" | "HIDDEN") => {
    dispatch({ type: actionType })
  }

  const handleAddToCart = async (productId: number) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const data = await res.json()

      dispatch({ type: "ADD", payload: data })
    } catch (error) {
      console.error(error)
    }
  }

  const handleAmountProduct = (
    productId: number,
    actionType: "INCREASE" | "DECREASE",
  ) => {
    dispatch({ type: actionType, payload: productId })
  }

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cart: state.cart,
        total: state.total,
        handleShowCart,
        handleAddToCart,
        handleAmountProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
