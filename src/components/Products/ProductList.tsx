import Link from "next/link"
import Rating from "./Rating"
import { Product } from "@/lib/definitions"

interface ProductListProps {
  fetchProducts(): Promise<Product[]>
}

interface ProductItemProps {
  product: Product
}

export default async function ProductList({ fetchProducts }: ProductListProps) {
  const products = await fetchProducts()

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={crypto.randomUUID()}>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  )
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="block h-full bg-zinc-800 p-4"
    >
      <div className="flex flex-col gap-y-4">
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
