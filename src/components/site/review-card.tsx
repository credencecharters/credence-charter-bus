import { BadgeCheck, MapPin, Star } from "lucide-react"

import type { CustomerReview } from "@/data/reviews"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const reviewDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
})

function reviewerInitials(name: string) {
  return name
    .split(" ")
    .filter((part) => !part.endsWith("."))
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-2"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      <span className="flex gap-0.5 text-accent-deep" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => {
          const fill = Math.min(1, Math.max(0, rating - index)) * 100

          return (
            <span key={index} className="relative block size-5">
              <Star className="absolute inset-0 size-5 stroke-accent-deep/45" />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill}%` }}
              >
                <Star className="size-5 fill-accent stroke-accent-deep" />
              </span>
            </span>
          )
        })}
      </span>
      <span className="text-sm font-semibold text-primary">
        {rating.toFixed(1)}
      </span>
    </div>
  )
}

function ReviewCard({ review }: { review: CustomerReview }) {
  return (
    <Card id={`review-${review.id}`} className="h-full">
      <CardContent className="flex h-full flex-col">
        <RatingStars rating={review.rating} />
        <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-foreground">
          <span aria-hidden="true" className="font-heading text-2xl text-accent-deep">
            “
          </span>
          {review.body}
          <span aria-hidden="true" className="font-heading text-2xl text-accent-deep">
            ”
          </span>
        </blockquote>
        <div className="mt-6 border-t border-border pt-5">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground"
            >
              {reviewerInitials(review.author)}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <cite className="not-italic font-semibold text-primary">
                  {review.author}
                </cite>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-xs">
                  <BadgeCheck className="size-3.5 text-accent" aria-hidden="true" />
                  Verified
                </span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                <time dateTime={review.date}>
                  {reviewDateFormatter.format(new Date(`${review.date}T00:00:00Z`))}
                </time>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {review.city}, {review.state}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ReviewGrid({
  reviews,
  columns = 2,
}: {
  reviews: CustomerReview[]
  columns?: 2 | 3
}) {
  return (
    <ul
      className={cn(
        "grid gap-6",
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
      )}
    >
      {reviews.map((review) => (
        <li key={review.id}>
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  )
}

export { RatingStars, ReviewCard, ReviewGrid }
