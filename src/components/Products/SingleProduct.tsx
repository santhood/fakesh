import { fetchSingleProduct } from "@/lib/data"
import Rating from "./Rating"
import AddToCart from "./AddToCart"

interface ProductItemProps {
  productId: number
}

export default async function SingleProduct({ productId }: ProductItemProps) {
  const product = await fetchSingleProduct(productId)

  return (
    <div className="grid grid-cols-1 items-start gap-x-8 gap-y-4 md:grid-cols-2">
      <picture className="h-72 bg-white p-4">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
          className="size-full object-scale-down"
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
