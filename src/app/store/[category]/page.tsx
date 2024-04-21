import ListOfProducts from "@/components/Products/ListOfProducts"

interface IParams {
  category: string
}

interface Props {
  params: IParams
}

const fetchProductsForCategory = async (category: string) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  )

  return res.json()
}

export default async function StoreCategoryPage({ params }: Props) {
  const productsForCategory = await fetchProductsForCategory(params.category)

  return (
    <main>
      <section className="mt-10 px-6">
        <div className="mx-auto max-w-7xl">
          <ListOfProducts products={productsForCategory} />
        </div>
      </section>
    </main>
  )
}
