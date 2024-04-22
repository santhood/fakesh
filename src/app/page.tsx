import Hero from "@/components/Hero"
import ProductList from "@/components/Products/ProductList"
import ProductListSkeleton from "@/components/Products/ProductListSkeleton"
import { fetchRecentProducts } from "@/lib/data"
import { Suspense } from "react"

export default async function Home() {
  return (
    <main className="px-6">
      <div className="mx-auto max-w-7xl">
        <Hero />

        <Suspense fallback={<ProductListSkeleton />}>
          <div className="mt-10">
            <h2 className="title mb-8">Recent Products</h2>
            <ProductList fetchProducts={fetchRecentProducts} />
          </div>
        </Suspense>
      </div>
    </main>
  )
}
