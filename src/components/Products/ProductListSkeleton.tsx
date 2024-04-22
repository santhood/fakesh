export default function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array(6)
        .fill(0)
        .map((_) => (
          <SkeletonItem key={crypto.randomUUID()} />
        ))}
    </div>
  )
}

function SkeletonItem() {
  return (
    <div className="bg-zinc-800 p-4">
      <div className="h-72 bg-zinc-700"></div>
      <div className="mt-4 space-y-4">
        <div className="h-5 bg-zinc-700"></div>
        <div className="h-5 w-28 bg-zinc-700"></div>
        <div className="h-5 w-20 bg-zinc-700"></div>
      </div>
    </div>
  )
}
