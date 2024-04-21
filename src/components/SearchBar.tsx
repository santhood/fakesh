"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState("")

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (searchValue) {
      router.push(`/store?${createQueryString("q", searchValue)}`)
    } else {
      router.push(`/store`)
    }
  }

  return (
    <form
      className="relative flex items-center text-sm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for products..."
        value={searchValue}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(ev.currentTarget.value)
        }
        className="w-full rounded-lg border border-zinc-600 bg-transparent py-2 pe-8 ps-3 placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600"
      />

      <button type="submit" className="absolute right-0 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M10.5 4a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M2 10.5a8.5 8.5 0 1 1 15.176 5.262l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 0 1 2 10.5M9.5 7a1 1 0 0 1 1-1a4.5 4.5 0 0 1 4.5 4.5a1 1 0 1 1-2 0A2.5 2.5 0 0 0 10.5 8a1 1 0 0 1-1-1"
            />
          </g>
        </svg>
      </button>
    </form>
  )
}
