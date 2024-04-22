import { Suspense } from "react"
import ProductList from "@/components/Products/ProductList"
import { fetchProductsInCategory } from "@/lib/data"
import ProductListSkeleton from "@/components/Products/ProductListSkeleton"

export default async function page({
  params,
}: {
  params: {
    category: string
  }
}) {
  return (
    <main className="mt-10 px-6">
      <div className="mx-auto max-w-7xl">
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList
            fetchProducts={() => fetchProductsInCategory(params.category)}
          />
        </Suspense>
      </div>
    </main>
  )
}
