"use client"

import { useCartContext } from "@/context/CartContext"
import { ProductCart } from "@/lib/definitions"

interface CartItemProps {
  product: ProductCart
}

export default function CartItem({ product }: CartItemProps) {
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
        <p className="flex justify-end text-right">{`$${product.price} USD`}</p>
        <div className="flex items-center overflow-hidden rounded-full border border-zinc-600">
          <button
            type="button"
            className="px-2 py-2"
            onClick={() => handleAmountProduct(product.id, "DECREASE")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14"
              />
            </svg>
          </button>
          <span className="inline-block w-6 text-center">{product.amount}</span>
          <button
            type="button"
            className="px-2 py-2"
            onClick={() => handleAmountProduct(product.id, "INCREASE")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 13H6q-.425 0-.712-.288T5 12q0-.425.288-.712T6 11h5V6q0-.425.288-.712T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.712-.288T11 18z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
