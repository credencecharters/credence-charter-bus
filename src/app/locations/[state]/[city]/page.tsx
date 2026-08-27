import { cache } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import {
  citiesOfState,
  getCity,
  getState,
  isIndexableCity,
  locationsBuildConfig,
  nearbyCities,
  topCities,
} from "@/data/locations";
import { services } from "@/data/services";
import { breadcrumbJsonLd, JsonLd, organizationId } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { buildCityCopy } from "@/lib/variation";
import { BulletDot } from "@/components/ui/bullet-list";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { CtaBand } from "@/components/site/cta-band";
import { FeaturedFleetSection } from "@/components/site/featured-fleet-section";
import { HowItWorksSection } from "@/components/site/how-it-works-section";

export const revalidate = 86400;
export const dynamicParams = true;

type Props = {
  params: Promise<{ state: string; city: string }>;
};

type CityFaq = {
  question: string;
  answer: string;
};

export function generateStaticParams() {
  return topCities(locationsBuildConfig.prebuildCityLimit).map((city) => ({
    state: city.stateSlug,
    city: city.slug,
  }));
}

const cityCopy = cache((stateSlug: string, citySlug: string) => {
  const state = getState(stateSlug);
  const city = getCity(stateSlug, citySlug);
  if (!state || !city) return null;
  const nearby = nearbyCities(city);

  return {
    state,
    city,
    nearby,
    copy: buildCityCopy({
      city: city.name,
      state: state.name,
      abbr: state.abbr,
      nearby: nearby.map((entry) => {
        const nearbyState = getState(entry.stateSlug);
        return `${entry.name}, ${nearbyState?.abbr ?? state.abbr}`;
      }),
    }),
  };
});

function buildCityFaqs(city: string, state: string): CityFaq[] {
  return [
    {
      question: `How much does a charter bus rental in ${city} cost?`,
      answer: `The price of a charter bus rental in ${city} depends on the vehicle, travel dates, total mileage, driver time, pickup points, stops, parking, and trip duration. Share your itinerary with Credence Charter Bus for a free, itemized quote based on your actual trip.`,
    },
    {
      question: `How do I rent a charter bus in ${city}?`,
      answer: `Send your travel date, passenger count, pickup location, destination, schedule, and any luggage or accessibility needs. A transportation coordinator will review the details, recommend an appropriate vehicle, and confirm availability for your ${city} charter bus rental.`,
    },
    {
      question: `What types of buses can I rent in ${city}?`,
      answer: `Credence offers full-size charter buses and motorcoaches for large groups, minibuses for local and medium-size trips, and Sprinter vans for smaller private groups. The best choice depends on your passenger count, route, luggage, and trip requirements.`,
    },
    {
      question: `Does a ${city} charter bus rental include a driver?`,
      answer: `Yes. Every Credence charter bus rental includes a professional driver. Your driver handles the route and vehicle while your group travels together on one coordinated schedule.`,
    },
    {
      question: `Does Credence provide airport transportation in ${city}?`,
      answer: `Yes. Credence arranges private group airport transportation in ${city}. Include the airport, airline, flight details, passenger count, luggage needs, and hotel or final destination when requesting your quote.`,
    },
    {
      question: `Can I book wedding transportation in ${city}?`,
      answer: `Yes. Wedding transportation can include hotel-to-venue shuttles, ceremony and reception transfers, wedding-party transportation, and end-of-night return service. Provide each address and the event timeline so the route can be planned correctly.`,
    },
    {
      question: `Can Credence arrange corporate and event transportation in ${city}?`,
      answer: `Yes. Companies and event planners can request transportation for conferences, conventions, employee events, client travel, off-site meetings, concerts, festivals, and private functions in ${city}. One-time and multi-stop itineraries are available based on scheduling and vehicle availability.`,
    },
    {
      question: `Do you provide school and sports transportation in ${city}?`,
      answer: `Credence arranges group transportation for field trips, campus visits, academic events, sports teams, tournaments, fan groups, and other organized travel. Tell us about equipment, luggage, chaperones, and timing when requesting a vehicle.`,
    },
    {
      question: `Can my charter bus travel outside ${city}?`,
      answer: `Yes. Credence provides local, regional, interstate, one-way, round-trip, and multi-day group transportation from ${city} to destinations across ${state} and the United States. Include every planned stop so the quote reflects the complete route.`,
    },
    {
      question: `How far in advance should I book a charter bus in ${city}?`,
      answer: `Book as early as possible, especially for weekends, holidays, school travel periods, and major event dates. Earlier requests provide more time to match the right vehicle to your group, but you can still contact Credence to check availability for a short-notice trip.`,
    },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const data = cityCopy(stateSlug, citySlug);
  if (!data) return {};

  return pageMetadata({
    title: `Charter Bus Rental in ${data.city.name}, ${data.state.abbr}`,
    description: data.copy.description,
    path: `/locations/${stateSlug}/${citySlug}`,
    noindex: !isIndexableCity(data.city),
  });
}

export default async function CityPage({ params }: Props) {
  const { state: stateSlug, city: citySlug } = await params;
  const data = cityCopy(stateSlug, citySlug);
  if (!data) notFound();

  const { state, city, nearby, copy } = data;
  const pageUrl = `${siteConfig.url}/locations/${state.slug}/${city.slug}`;
  const faqs = buildCityFaqs(city.name, state.name);
  const nearbyNames = nearby.slice(0, 3).map((entry) => {
    const nearbyState = getState(entry.stateSlug);
    return `${entry.name}, ${nearbyState?.abbr ?? state.abbr}`;
  });
  const otherStateCities = citiesOfState(state.slug)
    .filter((entry) => entry.slug !== city.slug)
    .slice(0, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Charter Bus Rental in ${city.name}, ${state.abbr}`,
    serviceType: "Charter bus rental and group transportation",
    description: copy.description,
    url: pageUrl,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: state.name },
      geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
    },
    provider: { "@id": organizationId },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: state.name, path: `/locations/${state.slug}` },
          { name: city.name, path: `/locations/${state.slug}/${city.slug}` },
        ])}
      />
      <Section>
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-base text-muted-foreground">
              <li>
                <Link href="/locations" className="hover:text-primary hover:underline">
                  Locations
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/locations/${state.slug}`}
                  className="hover:text-primary hover:underline"
                >
                  {state.name}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {city.name}
              </li>
            </ol>
          </nav>
          <SectionHeading
            as="h1"
            title={`Charter Bus Rental in ${city.name}, ${state.abbr}`}
            className="mt-6"
          />
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
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
          <h2 className="mt-12 text-2xl font-semibold text-primary">
            Charter bus service for {city.name} groups
          </h2>
          <div className="mt-5 leading-7 lg:columns-2 lg:gap-x-12 lg:[orphans:3] lg:[widows:3]">
            {[copy.lead, ...copy.details, copy.close].map((paragraph) => (
              <p key={paragraph} className="mb-5 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-secondary/40">
        <Container>
          <SectionHeading
            eyebrow="Charter bus rental"
            title={`Private group transportation in ${city.name}`}
            lede={`A ${city.name} charter bus rental keeps passengers, luggage, and the itinerary together in one professionally driven vehicle.`}
          />
          <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4 text-lg">
              <p>
                Credence provides local and long-distance bus rental service for
                groups starting, ending, or making stops in {city.name}. Arrange a
                one-way transfer, round trip, recurring shuttle, multi-stop event
                schedule, or multi-day group tour based on your itinerary.
              </p>
              <p>
                Private group transportation can simplify arrivals, reduce the need
                for a convoy of cars, and give organizers one schedule to manage.
                Your quote is based on the vehicle and route your trip actually
                requires.
              </p>
            </div>
            <ul className="grid content-start gap-3 sm:grid-cols-2">
              {[
                "Local and long-distance trips",
                "One-way and round-trip service",
                "Multi-stop event transportation",
                "Hotel and venue shuttles",
                "Professional drivers",
                "Free, itemized quotes",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-lg bg-card p-4 ring-1 ring-border">
                  <BulletDot />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <FeaturedFleetSection
        eyebrow="Vehicle options"
        title={`Charter buses, minibuses, and Sprinter vans in ${city.name}`}
        lede={`Compare a full-size motorcoach rental for large groups, a minibus rental for local shuttle service, or a Sprinter van rental for smaller private groups in ${city.name}.`}
      />

      <Section className="bg-secondary/40">
        <Container>
          <SectionHeading
            eyebrow="Group transportation services"
            title={`Transportation for events and trips in ${city.name}`}
            lede={`Plan a ${city.name} bus rental around your group, schedule, pickup points, and destination. Explore the dedicated service pages below for more details.`}
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} className="rounded-xl bg-card p-6 shadow-xs ring-1 ring-border">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xl font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {service.name} in {city.name}
                </Link>
                <p className="mt-3 text-muted-foreground">{service.short}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Local transportation"
            title={`Group travel in and around ${city.name}`}
            lede={`Coordinate pickups within ${city.name}, transportation across ${state.name}, or regional charter bus trips to ${nearbyNames.join(", ")}.`}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Airport and hotel transportation",
                body: `Keep arriving passengers together with a private airport transfer, then coordinate service between hotels, meetings, venues, and departure terminals in the ${city.name} area.`,
              },
              {
                title: "Conventions, corporate events, and private events",
                body: `Arrange corporate shuttles, convention transportation, conference transfers, concert transportation, and private event service around confirmed addresses and start times in ${city.name}.`,
              },
              {
                title: "Weddings, schools, and sports teams",
                body: `Move wedding guests, student groups, chaperones, athletes, staff, and equipment on a shared schedule with a vehicle selected for the group and trip.`,
              },
              {
                title: "Regional and interstate charter service",
                body: `Start in ${city.name} and travel to another ${state.name} city or an out-of-state destination with one-way, round-trip, and multi-day transportation options.`,
              },
            ].map((scenario) => (
              <article key={scenario.title} className="rounded-xl border border-border p-6">
                <h3 className="text-xl font-semibold text-primary">{scenario.title}</h3>
                <p className="mt-3 text-muted-foreground">{scenario.body}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-12 text-2xl font-semibold text-primary">
            Popular charter bus routes from {city.name}
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            These nearby destinations can help you explore regional service. Your
            group is not limited to these routes—request a quote for the pickup
            points, stops, and final destination on your itinerary.
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {nearby.map((destination) => (
              <li key={`${destination.stateSlug}-${destination.slug}`}>
                <Link
                  href={`/locations/${destination.stateSlug}/${destination.slug}`}
                  className="flex min-h-11 items-center rounded-md px-3 font-medium text-primary hover:bg-muted hover:underline"
                >
                  Charter bus from {city.name} to {destination.name}
                </Link>
              </li>
            ))}
          </ul>
          {otherStateCities.length > 0 && (
            <>
              <h3 className="mt-10 text-xl font-semibold text-primary">
                More {state.name} charter bus locations
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {otherStateCities.map((entry) => (
                  <li key={entry.slug}>
                    <Link
                      href={`/locations/${state.slug}/${entry.slug}`}
                      className="inline-flex min-h-11 items-center font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Charter bus rental in {entry.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`/locations/${state.slug}`}
                    className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4"
                  >
                    View all {state.name} locations →
                  </Link>
                </li>
              </ul>
            </>
          )}
        </Container>
      </Section>

      <Section className="bg-secondary/40">
        <Container>
          <SectionHeading
            eyebrow="Why Credence"
            title={`Plan your ${city.name} bus rental with one coordinator`}
            lede="Tell us what the trip needs, and we will help you compare appropriate vehicles and build a quote around the complete itinerary."
          />
          <ul className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              "Charter bus, motorcoach, minibus, and Sprinter van options",
              "A professional driver included with every rental",
              "Local, regional, and long-distance transportation planning",
              "A free, itemized quote based on your trip details",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <BulletDot />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <HowItWorksSection
        lede={`Share your ${city.name} itinerary, review the vehicle and quote, and confirm the transportation plan for your group.`}
      />

      <Section className="bg-secondary/40">
        <Container>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title={`${city.name} charter bus rental FAQs`}
            lede="Answers about pricing, vehicles, drivers, services, and requesting group transportation."
          />
          <dl className="mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-l-2 border-accent/50 pl-5">
                <dt className="font-heading text-xl font-semibold text-primary">
                  {faq.question}
                </dt>
                <dd className="mt-3 text-muted-foreground">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <CtaBand
        title={`Request a charter bus quote in ${city.name}`}
        lede={`Ready to arrange group transportation in ${city.name}, ${state.abbr}? Send your travel dates, passenger count, pickup location, destination, and transportation needs for a free quote.`}
      />
    </>
  );
}
