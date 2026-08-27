import { siteConfig } from "@/config/site"
import { customerReviews } from "@/data/reviews"
import {
  breadcrumbJsonLd,
  JsonLd,
  organizationId,
  webPageJsonLd,
} from "@/lib/jsonld"
import { pageMetadata } from "@/lib/seo"
import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import { CtaBand } from "@/components/site/cta-band"
import { CleanReviewUrl } from "@/components/site/clean-review-url"
import { ReviewGrid } from "@/components/site/review-card"

const reviewsPath = "/reviews"
const description =
  "Read verified customer reviews of Credence Charter Bus for last-minute trips, ADA-accessible transportation, weddings, corporate events, airport transfers, and group travel."

export const metadata = pageMetadata({
  title: "Credence Charter Bus Reviews",
  description,
  path: reviewsPath,
})

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteConfig.url}${reviewsPath}#reviews`,
  name: "Credence Charter Bus customer reviews",
  numberOfItems: customerReviews.length,
  itemListElement: customerReviews.map((review, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Review",
      "@id": `${siteConfig.url}${reviewsPath}#review-${review.id}`,
      itemReviewed: { "@id": organizationId },
      author: { "@type": "Person", name: review.author },
      datePublished: review.date,
      reviewBody: review.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      contentLocation: {
        "@type": "Place",
        name: `${review.city}, ${review.state}`,
      },
    },
  })),
}

export default function ReviewsPage() {
  return (
    <>
      <CleanReviewUrl />
      <JsonLd
        data={webPageJsonLd({
          type: "CollectionPage",
          name: "Credence Charter Bus Reviews",
          description,
          path: reviewsPath,
          breadcrumbPath: reviewsPath,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Customer Reviews", path: reviewsPath },
        ])}
      />
      <JsonLd data={reviewsJsonLd} />
      <Section>
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Customer reviews"
            title="Experiences from groups we’ve helped"
            lede="See what customers say about booking charter buses for short-notice travel, ADA accommodations, weddings, company events, airport transfers, and group trips across the country."
          />
          <div className="mt-12">
            <ReviewGrid reviews={customerReviews} />
          </div>
        </Container>
      </Section>
      <CtaBand
        title="Ready to plan a dependable ride?"
        lede="Tell us where your group is going and what you need. We’ll help match your trip with the right vehicle and driver."
      />
    </>
  )
}
