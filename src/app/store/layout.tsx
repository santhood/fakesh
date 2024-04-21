import ProductCategories from "@/components/Products/ProductCategories"
import { Fragment } from "react"

interface Props {
  children: React.ReactNode
}

export default function layout({ children }: Props) {
  return (
    <Fragment>
      <div className="px-6">
        <div className="mx-auto max-w-7xl">
          <ProductCategories />
        </div>
      </div>
      {children}
    </Fragment>
  )
}
