import { IProduct } from "@/types/products-types"
import ProductCard from "./ProductCard"

interface Props {
  products: IProduct[]
}

export default function ListOfProducts({ products }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={crypto.randomUUID()}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}
