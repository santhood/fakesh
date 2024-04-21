"use client"

import { Suspense, useState } from "react"
import Logo from "./Logo"
import Link from "next/link"
import SearchBar from "./SearchBar"
import Cart from "./Cart/Cart"

const links = [
  { route: "/", label: "Home" },
  { route: "/store", label: "Store" },
  { route: "/offers", label: "Offers" },
]

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="bg-zinc-900 p-6">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between gap-x-6">
          <div className="flex items-center gap-x-2">
            <button
              type="button"
              onClick={() => setShowMenu(true)}
              className="lg:hidden"
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Logo />
          </div>

          <div
            className={`${showMenu ? "pointer-events-auto" : "pointer-events-none"} fixed inset-0 z-50 flex lg:pointer-events-auto lg:relative lg:w-full`}
          >
            <div
              className={`${showMenu ? "translate-x-0" : "-translate-x-full"} relative z-50 flex w-full flex-col gap-x-4 bg-zinc-900 p-6 transition-transform delay-100 duration-300 md:w-[31.25rem] lg:w-full lg:translate-x-0 lg:flex-row-reverse lg:items-center lg:justify-between lg:p-0`}
            >
              <div className="flex items-center justify-between lg:hidden">
                <Logo />
                <button type="button" onClick={() => setShowMenu(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-8 mt-6 lg:m-0 lg:w-96">
                <Suspense>
                  <SearchBar />
                </Suspense>
              </div>

              <ul className="flex flex-col gap-x-4 gap-y-2 lg:flex-row">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.route}
                      className="text-lg text-zinc-400 transition-colors duration-300 hover:text-white lg:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Dark overlay */}
            <div
              onClick={() => setShowMenu(false)}
              className={`${showMenu ? "opacity-100" : "opacity-0"} absolute inset-0 z-40 bg-black/50 transition duration-300`}
            ></div>
          </div>

          <div className="flex justify-end">
            <Cart />
          </div>
        </nav>
      </div>
    </header>
  )
}
