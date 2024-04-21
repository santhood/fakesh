import ListOfProducts from "@/components/Products/ListOfProducts"
import { IProduct } from "@/types/products-types"

interface ISearchParams {
  q: string
}

interface Props {
  searchParams: ISearchParams
}

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products")
  return res.json()
}

const searchProducts = async (productName: string) => {
  const res = await fetch("https://fakestoreapi.com/products")
  const data = (await res.json()) as IProduct[]

  return data.filter((product) =>
    product.title.toLowerCase().includes(productName?.toLowerCase()),
  )
}

export default async function StorePage({ searchParams }: Props) {
  const products = await fetchProducts()
  const productsFound = (await searchProducts(searchParams.q)) as IProduct[]

  return (
    <main>
      <section className="mt-10 px-6">
        <div className="mx-auto max-w-7xl">
          {searchParams.q ? (
            <ListOfProducts products={productsFound} />
          ) : (
            <ListOfProducts products={products} />
          )}
        </div>
      </section>
    </main>
  )
}
