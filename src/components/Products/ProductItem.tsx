import { IProduct } from "@/types/products-types"
import Rating from "./Rating"
import AddToCart from "./AddToCart"

interface Props {
  product: IProduct
}

export default function ProductItem({ product }: Props) {
  return (
    <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
      <picture className="bg-white p-4">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
          className="h-60 w-full object-scale-down"
        />
      </picture>
      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="mt-2 text-zinc-400">{product.description}</p>
        <div className="mb-8 mt-4">
          <Rating rating={product.rating} />
        </div>
        <strong>${product.price} USD</strong>
        <div className="mt-4">
          <AddToCart productId={product.id} />
        </div>
      </div>
    </div>
  )
}
