import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { featuredReviews } from "@/data/reviews"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import { ReviewGrid } from "@/components/site/review-card"

function ReviewsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Customer reviews"
          title="Reliable rides, in their own words"
          lede="From short-notice bookings to wedding weekends, groups count on clear communication, professional drivers, and transportation that stays on schedule."
        />
        <div className="mt-10">
          <ReviewGrid reviews={featuredReviews} columns={3} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/reviews?view=all">
              View all customer reviews
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export { ReviewsSection }
