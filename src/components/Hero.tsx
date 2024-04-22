import Link from "next/link"

export default function Hero() {
  return (
    <div className="mx-auto flex min-h-96 max-w-4xl items-center py-8">
      <div className="text-center">
        <h1 className="font-syne text-3xl font-black uppercase sm:text-4xl">
          Discover Products That Fit Your Lifestyle
        </h1>
        <p className="mx-auto mb-4 mt-2 max-w-xl text-zinc-400">
          Find the perfect match for your lifestyle in our diverse product
          selection. Explore now!
        </p>
        <Link
          href="/store"
          className="mx-auto block w-max rounded-full bg-zinc-800 px-6 py-3"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}
