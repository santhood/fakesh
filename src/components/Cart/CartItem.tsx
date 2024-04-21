"use client"

import { useCartContext } from "@/context/CartContext"
import { IProductCart } from "@/types/cart-types"

interface Props {
  product: IProductCart
}

export default function CartItem({ product }: Props) {
  const { handleAmountProduct } = useCartContext()

  return (
    <div className="grid grid-cols-[max-content_auto_max-content] gap-x-4">
      <picture className="size-16 bg-white p-2">
        <img
          src={product.image}
          alt={product.title}
          className="size-full object-scale-down"
        />
      </picture>

      <div>
        <h2 className="line-clamp-2 w-full max-w-36 text-wrap">
          {product.title}
        </h2>
      </div>

      <div className="flex flex-col gap-y-2 text-sm">
        <p className="flex justify-end text-right">
          ${product.price} <span>USD</span>
        </p>
        <div className="overflow-hidden rounded-full border border-zinc-600">
          <button
            type="button"
            className="px-2 py-2"
            onClick={() => handleAmountProduct(product.id, "DECREASE")}
          >
            ➖
          </button>
          <span className="inline-block w-6 text-center">{product.amount}</span>
          <button
            type="button"
            className="px-2 py-2"
            onClick={() => handleAmountProduct(product.id, "INCREASE")}
          >
            ➕
          </button>
        </div>
      </div>
    </div>
  )
}
