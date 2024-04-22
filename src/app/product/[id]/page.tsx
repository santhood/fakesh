import { Suspense } from "react"
import { fetchRelatedProducts, fetchSingleProduct } from "@/lib/data"
import ProductList from "@/components/Products/ProductList"
import ProductListSkeleton from "@/components/Products/ProductListSkeleton"
import SingleProduct from "@/components/Products/SingleProduct"
import SingleProductSkeleton from "@/components/Products/SingleProductSkeleton"

export default async function page({ params }: { params: { id: number } }) {
  const product = await fetchSingleProduct(params.id)

  return (
    <main className="min-h-dvh px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto min-h-96 max-w-5xl md:my-10">
          <Suspense fallback={<SingleProductSkeleton />}>
            <SingleProduct productId={params.id} />
          </Suspense>
        </div>

        <div>
          <h2 className="title mb-8">Related Products</h2>
          <Suspense fallback={<ProductListSkeleton />}>
            <ProductList
              fetchProducts={() =>
                fetchRelatedProducts(product.id, product.category)
              }
            />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
