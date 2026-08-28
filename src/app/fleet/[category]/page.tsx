import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import {
  fleetCategories,
  getFleetCategory,
  vehicleArticle,
  vehicleTitle,
} from "@/data/fleet";
import { breadcrumbJsonLd, JsonLd, serviceJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { BulletDot, BulletList } from "@/components/ui/bullet-list";
import { Button } from "@/components/ui/button";
import { CheckList } from "@/components/ui/check-list";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";
import { CtaBand } from "@/components/site/cta-band";
import { DetailPageHeader } from "@/components/site/detail-page-header";
import { FleetGallery } from "@/components/site/fleet-gallery";
import { HowItWorksSection } from "@/components/site/how-it-works-section";
import { FleetSpecs } from "@/components/site/fleet-specs";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return fleetCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getFleetCategory(slug);
  if (!category) return {};
  const rentalName = vehicleTitle(category);
  const article = vehicleArticle(category);
  const capacity = category.capacity[0].toLowerCase() + category.capacity.slice(1);
  return pageMetadata({
    title: `${rentalName} Rental — ${category.capacity}`,
    description: `Rent ${article} ${category.vehicleName} for ${capacity} with a professional driver and a clear, itemized quote — available nationwide.`,
    path: `/fleet/${category.slug}`,
    ogImage: {
      url: category.images.exterior.src,
      alt: category.images.exterior.alt,
    },
  });
}

export default async function FleetCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getFleetCategory(slug);
  if (!category) notFound();

  const seo = category.seo;

  const images = [
    category.images.exterior,
    category.images.interior,
    ...(category.images.extra ?? []),
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Fleet", path: "/fleet" },
          { name: category.name, path: `/fleet/${category.slug}` },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: `${category.name} Rental`,
          description: category.short,
          path: `/fleet/${category.slug}`,
          image: `${siteConfig.url}${category.images.exterior.src}`,
        })}
      />
      {seo ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${siteConfig.url}/fleet/${category.slug}#faq`,
            mainEntity: seo.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
      ) : null}
      <Section>
        <Container>
          <DetailPageHeader
            backHref="/fleet"
            backLabel="All vehicles"
            eyebrow={category.capacity}
            title={category.name}
            lede={category.short}
          />
          <div className="mt-10">
            <FleetGallery images={images} label={category.name} />
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg">{category.description}</p>
              <h2 className="mt-10 text-2xl font-semibold text-primary">
                On-board amenities
              </h2>
              <CheckList
                items={category.amenities}
                className="mt-4 grid gap-3 sm:grid-cols-2"
              />
              <h2 className="mt-10 text-2xl font-semibold text-primary">
                Ideal for
              </h2>
              <BulletList
                items={category.idealFor.map((use) => ({
                  key: use,
                  content: use,
                }))}
              />
            </div>
            <FleetSpecs category={category} />
          </div>
        </Container>
      </Section>
      {seo ? (
        <>
          <Section className="bg-secondary/40">
            <Container>
              <SectionHeading
                eyebrow="Why rent this vehicle"
                title={`Why groups rent ${vehicleArticle(category)} ${category.vehicleName}`}
                lede={`What ${vehicleArticle(category)} ${category.vehicleName} does well, and the trips it is built for.`}
              />
              <p className="mt-6 max-w-4xl text-lg">{seo.intro}</p>
              <div className="mt-8 grid gap-10 lg:grid-cols-2">
                <BulletList
                  items={seo.whyRent.map((reason) => ({
                    key: reason,
                    content: reason,
                  }))}
                />
                <Card>
                  <CardContent className="flex h-full flex-col">
                    <h3 className="font-heading text-xl font-bold text-primary">
                      Booking with Credence
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                      Serving groups since {siteConfig.established}, Credence
                      Charter Bus has carried{" "}
                      {siteConfig.stats.passengersTransported} passengers across{" "}
                      {siteConfig.stats.milesTraveled} miles and{" "}
                      {siteConfig.stats.tripsCompleted} completed trips. Every
                      rental includes a professional driver and a free, itemized
                      quote, with service available in all 50 states.
                    </p>
                    <p className="mt-3 text-muted-foreground">
                      Tell us your dates, passenger count, and itinerary, and a
                      coordinator will match the vehicle to the trip and confirm
                      availability.
                    </p>
                    <div className="mt-auto flex flex-col gap-3 pt-6">
                      <Button asChild size="lg">
                        <Link href="/quote">Request a Free Quote</Link>
                      </Button>
                      <Button asChild size="lg" variant="accent">
                        <a href={`tel:${siteConfig.phone.tel}`}>
                          <Phone />
                          Call Now — {siteConfig.phone.display}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Container>
          </Section>

          <Section>
            <Container>
              <SectionHeading
                eyebrow="Our services"
                title={`${category.name} services from Credence`}
                lede={seo.serviceLede}
              />
              <ul className="mt-10 grid gap-5 md:grid-cols-2">
                {seo.services.map((service) => (
                  <li
                    key={service.href}
                    className="rounded-xl bg-card p-6 shadow-xs ring-1 ring-border"
                  >
                    <Link
                      href={service.href}
                      className="text-xl font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      {service.name}
                    </Link>
                    <p className="mt-3 text-muted-foreground">{service.body}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <Link
                  href="/services"
                  className="font-semibold text-primary underline underline-offset-4 hover:text-accent-deep"
                >
                  View all group transportation services
                </Link>
              </p>
            </Container>
          </Section>

          <HowItWorksSection
            className="bg-secondary/40"
            lede={`Tell us your dates, group size, and itinerary, and we will match ${vehicleArticle(category)} ${category.vehicleName} to the trip and send a free, itemized quote.`}
          />

          <Section>
            <Container>
              <SectionHeading
                eyebrow="Best for"
                title={`What groups use ${vehicleArticle(category)} ${category.vehicleName} for`}
                lede="The most common trips this vehicle is booked for, and why it suits them."
              />
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {seo.bestFor.map((use) => (
                  <article
                    key={use.title}
                    className="rounded-xl border border-border p-6"
                  >
                    <h3 className="text-xl font-semibold text-primary">
                      {use.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground">{use.body}</p>
                  </article>
                ))}
              </div>
            </Container>
          </Section>

          <Section className="bg-secondary/40">
            <Container>
              <SectionHeading
                eyebrow="On board"
                title={`Inside ${vehicleArticle(category)} ${category.vehicleName}`}
                lede={`What the cabin includes, and what it means for your group on the day of the trip.`}
              />
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {(seo.onBoard ?? []).map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl bg-card p-6 shadow-xs ring-1 ring-border"
                  >
                    <h3 className="text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground">{item.body}</p>
                  </article>
                ))}
              </div>
            </Container>
          </Section>

          <Section>
            <Container>
              <SectionHeading
                eyebrow="Occasions"
                title={`What groups book ${vehicleArticle(category)} ${category.vehicleName} for`}
                lede={`${category.name} are booked for a wide range of group travel. These are the trips we are asked about most often.`}
              />
              <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {(seo.occasions ?? []).map((occasion) => (
                  <li key={occasion} className="flex gap-3">
                    <BulletDot />
                    <span>{occasion}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-12 text-2xl font-semibold text-primary">
                Nationwide {category.vehicleName} service
              </h3>
              <div className="mt-4 grid max-w-5xl gap-4 lg:grid-cols-2">
                {(seo.coverage ?? []).map((line) => (
                  <p key={line} className="text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
              <p className="mt-6">
                <Link
                  href="/locations"
                  className="font-semibold text-primary underline underline-offset-4 hover:text-accent-deep"
                >
                  See every state and city we serve
                </Link>
              </p>
              {seo.alsoKnownAs?.length ? (
                <p className="mt-8 max-w-4xl text-muted-foreground">
                  <span className="font-semibold text-primary">
                    Also searched as:
                  </span>{" "}
                  {seo.alsoKnownAs.join(", ")}.
                </p>
              ) : null}
            </Container>
          </Section>

          <Section className="bg-secondary/40">
            <Container>
              <SectionHeading
                eyebrow="Choosing the right size"
                title={`Is ${vehicleArticle(category)} ${category.vehicleName} the right choice?`}
              />
              <p className="mt-6 max-w-4xl text-lg">{seo.choosing}</p>
              <p className="mt-6">
                <Link
                  href="/fleet"
                  className="font-semibold text-primary underline underline-offset-4 hover:text-accent-deep"
                >
                  Compare every vehicle in our fleet
                </Link>
              </p>
              <h3 className="mt-12 text-2xl font-semibold text-primary">
                Planning your rental
              </h3>
              <BulletList
                items={seo.planning.map((tip) => ({ key: tip, content: tip }))}
              />
            </Container>
          </Section>

          <Section>
            <Container>
              <SectionHeading
                eyebrow="Frequently asked questions"
                title={`${category.name} rental FAQs`}
                lede="Answers about capacity, drivers, amenities, and requesting a quote."
              />
              <dl className="mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
                {seo.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="border-l-2 border-accent/50 pl-5"
                  >
                    <dt className="font-heading text-xl font-semibold text-primary">
                      {faq.question}
                    </dt>
                    <dd className="mt-3 text-muted-foreground">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </Container>
          </Section>
        </>
      ) : null}
      <CtaBand
        title={`Ready to book ${vehicleArticle(category)} ${category.vehicleName}?`}
        lede="Request a quote and we'll confirm availability for your dates the same day."
      />
    </>
  );
}
