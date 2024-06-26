import { Rating as IRating } from "@/lib/definitions"

interface RatingProps {
  rating: IRating
}

const generateRating = (rating: number) => {
  const booleanRating: boolean[] = []
  const roundedRating = Math.floor(rating)

  for (let i = 0; i < 5; i++) {
    i < roundedRating ? booleanRating.push(true) : booleanRating.push(false)
  }

  return booleanRating
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex items-center">
        {generateRating(rating.rate).map((value) => {
          return value ? (
            <div key={crypto.randomUUID()} className="text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"
                />
              </svg>
            </div>
          ) : (
            <div key={crypto.randomUUID()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3M664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7z"
                />
              </svg>
            </div>
          )
        })}
      </div>
      <span>
        {rating.rate}/{rating.count}
      </span>
    </div>
  )
}
