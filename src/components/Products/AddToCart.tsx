"use client"

import { useCartContext } from "@/context/CartContext"

interface AddToCartProps {
  productId: number
}

export default function AddToCart({ productId }: AddToCartProps) {
  const { handleShowCart, handleAddToCart } = useCartContext()

  const handleClick = () => {
    handleShowCart("SHOW")
    handleAddToCart(productId)
  }

  return (
    <button
      type="button"
      className="block w-full rounded-full bg-sky-500 py-3"
      onClick={handleClick}
    >
      Add to Cart
    </button>
  )
}
