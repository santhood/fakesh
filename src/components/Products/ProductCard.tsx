import Link from "next/link"
import Rating from "./Rating"
import { IProduct } from "@/types/products-types"

interface Props {
  product: IProduct
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="block h-full bg-zinc-800 p-4"
    >
      <div className="flex flex-col gap-y-4">
        <picture className="bg-white p-4">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            decoding="async"
            className="h-72 w-full object-scale-down"
          />
        </picture>
        <div>
          <h3 className="line-clamp-2 text-lg font-bold">{product.title}</h3>
          <div className="mb-8 mt-2">
            <Rating rating={product.rating} />
          </div>
          <strong className="rounded-full bg-zinc-900 px-6 py-2">
            ${product.price}
          </strong>
        </div>
      </div>
    </Link>
  )
}
