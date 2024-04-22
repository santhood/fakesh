export default function SingleProductSkeleton() {
  return (
    <div className="grid grid-cols-1 items-start bg-zinc-800 md:grid-cols-2">
      {/* Image */}
      <div className="h-72 p-4">
        <div className="h-full bg-zinc-700"></div>
      </div>
      <div className="space-y-4 p-4">
        {/* Title */}
        <div className="h-5 bg-zinc-700"></div>
        {/* Description */}
        <div className="space-y-2">
          <div className="h-5 bg-zinc-700"></div>
          <div className="h-5 bg-zinc-700"></div>
          <div className="h-5 bg-zinc-700"></div>
          <div className="h-5 bg-zinc-700"></div>
          <div className="h-5 bg-zinc-700"></div>
          <div className="h-5 bg-zinc-700"></div>
        </div>
        {/* Rating */}
        <div className="h-5 w-28 bg-zinc-700"></div>
        <div className="h-10 rounded-full bg-zinc-700"></div>
      </div>
    </div>
  )
}
