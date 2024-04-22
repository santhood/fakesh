"use client"

import { Fragment } from "react"
import { useCartContext } from "@/context/CartContext"
import CartItem from "./CartItem"

export default function Cart() {
  const { showCart, cart, total, amount, handleShowCart } = useCartContext()

  return (
    <div>
      <div className="relative">
        {amount > 0 && (
          <span className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-lg bg-sky-500 px-1 text-xs">
            {amount}
          </span>
        )}
        <button type="button" onClick={() => handleShowCart("SHOW")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${showCart ? "pointer-events-auto" : "pointer-events-none"} fixed inset-0 z-50 flex justify-end`}
      >
        <div
          className={`${showCart ? "translate-x-0" : "translate-x-full"} relative z-50 grid w-full grid-cols-1 grid-rows-[auto_1fr_auto] gap-y-8 bg-zinc-900 p-6 transition-transform delay-100 duration-300 md:w-[31.25rem]`}
        >
          <div className="flex items-center justify-between">
            <span className="title">My cart</span>
            <button type="button" onClick={() => handleShowCart("HIDDEN")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
                />
              </svg>
            </button>
          </div>

          {cart.length > 0 && (
            <Fragment>
              <ul className="flex flex-col gap-y-6 overflow-y-auto">
                {cart.map((product) => (
                  <li key={crypto.randomUUID()}>
                    <CartItem product={product} />
                  </li>
                ))}
              </ul>

              <div>
                <div className="mb-8 flex items-center justify-between border-b border-b-zinc-600 pb-2">
                  <span className="text-zinc-400">Total</span>
                  <strong>${total} USD</strong>
                </div>
                <button
                  type="button"
                  className="w-full rounded-full bg-sky-500 px-6 py-3"
                >
                  Proceed to Checkout
                </button>
              </div>
            </Fragment>
          )}

          {cart.length === 0 && (
            <div className="flex items-center justify-center text-2xl font-bold">
              Your cart is empty
            </div>
          )}
        </div>

        {/* dark overlay */}
        <div
          onClick={() => handleShowCart("HIDDEN")}
          className={`${showCart ? "opacity-50" : "opacity-0"} absolute inset-0 z-40 bg-black transition-opacity duration-300`}
        ></div>
      </div>
    </div>
  )
}
