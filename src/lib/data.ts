import { Product } from "./definitions"

export const fetchAllProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = (await res.json()) as Product[]

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch all products")
  }
}

export const fetchRecentProducts = async () => {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products?limit=6&sort=desc",
    )
    const data = (await res.json()) as Product[]

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch recent products")
  }
}

export const fetchProductsInCategory = async (category: string) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    )
    const data = (await res.json()) as Product[]

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch products in category")
  }
}

export const fetchSingleProduct = async (productId: number) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const data = (await res.json()) as Product

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch product")
  }
}

export const fetchRelatedProducts = async (
  productId: number,
  category: string,
) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    )
    const data = (await res.json()) as Product[]

    return data.filter((product) => product.id !== productId)
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch product")
  }
}

export const searchProducts = async (productQuery: string) => {
  try {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = (await res.json()) as Product[]

    return data.filter((product) =>
      product.title.toLowerCase().includes(productQuery?.toLowerCase()),
    )
  } catch (error) {
    console.error(error)
    throw new Error("Could not find product")
  }
}

export const fetchAllCategories = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories")
    const data = (await res.json()) as string[]

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed getting categories")
  }
}
