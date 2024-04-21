"use client"

import Link from "next/link"
import { Suspense, useEffect, useRef, useState } from "react"

export default function ProductCategories() {
  const [showCategories, setShowCategories] = useState(false)
  const [currentCategory, setCurrentCategory] = useState("All")
  const [categories, setCategories] = useState([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories")
      const data = await res.json()
      setCategories(data)
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowCategories(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div ref={ref} className="relative capitalize md:w-96">
      <div
        className="flex items-center justify-between rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-2"
        onClick={() => setShowCategories((prev) => !prev)}
      >
        <span>{currentCategory}</span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m6 9l6 6l6-6"
            />
          </svg>
        </div>
      </div>

      <ul
        className={`${showCategories ? "opacity-100" : "opacity-0"} absolute inset-x-0 top-full space-y-2 bg-zinc-800 p-4 transition-opacity duration-300`}
      >
        <li key={crypto.randomUUID()}>
          <Link
            href="/store"
            onClick={() => {
              setCurrentCategory("All")
              setShowCategories(false)
            }}
          >
            All
          </Link>
        </li>
        {categories.map((category) => (
          <li key={crypto.randomUUID()}>
            <Link
              href={`/store/${category}`}
              onClick={() => {
                setCurrentCategory(category)
                setShowCategories(false)
              }}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
