import ProductList from "@/components/Products/ProductList"
import ProductListSkeleton from "@/components/Products/ProductListSkeleton"
import { fetchAllProducts, searchProducts } from "@/lib/data"
import { Fragment, Suspense } from "react"

export default async function page({
  searchParams,
}: {
  searchParams: { query: string }
}) {
  const searchLenght = await searchProducts(searchParams.query)

  return (
    <main className="min-h-dvh px-6">
      <div className="mx-auto max-w-7xl">
        {searchParams.query && (
          <Fragment>
            <div className="mb-8 mt-4">
              <strong>{searchLenght.length}</strong> results found for{" "}
              <strong>{searchParams.query}</strong>
            </div>
            <Suspense fallback={<ProductListSkeleton />}>
              <ProductList
                fetchProducts={() => searchProducts(searchParams.query)}
              />
            </Suspense>
          </Fragment>
        )}

        {!searchParams.query && (
          <div className="mt-8">
            <Suspense fallback={<ProductListSkeleton />}>
              <ProductList fetchProducts={fetchAllProducts} />
            </Suspense>
          </div>
        )}
      </div>
    </main>
  )
}
