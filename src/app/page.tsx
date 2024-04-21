import Hero from "@/components/Hero"
import ListOfProducts from "@/components/Products/ListOfProducts"

const fetchLatestProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=6&sort=desc")
  return res.json()
}

export default async function Home() {
  const latestProducts = await fetchLatestProducts()

  return (
    <main>
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <Hero />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="title mb-8">Latest Products</h2>
          <ListOfProducts products={latestProducts} />
        </div>
      </section>
    </main>
  )
}
