import ListOfProducts from "@/components/Products/ListOfProducts"
import ProductItem from "@/components/Products/ProductItem"
import { IProduct } from "@/types/products-types"

interface IParams {
  id: number
}

interface Props {
  params: IParams
}

const fetchProduct = async (productId: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
  return res.json()
}

const fetchRelatedProducts = async (productId: number, category: string) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  )
  const data = (await res.json()) as IProduct[]

  return data.filter((product) => product.id !== productId)
}

export default async function SingleProductpPage({ params }: Props) {
  const product = await fetchProduct(params.id)
  const relatedProducts = await fetchRelatedProducts(
    product.id,
    product.category,
  )

  return (
    <main>
      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <div className="min-h-96 pb-32 md:mt-10">
            <ProductItem product={product} />
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="title mb-8">Related Products</h2>
          <ListOfProducts products={relatedProducts} />
        </div>
      </section>
    </main>
  )
}
