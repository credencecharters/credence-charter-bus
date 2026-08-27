import { siteConfig } from "@/config/site"

export type CityCopyContext = {
  city: string
  state: string
  abbr: string
  nearby: string[]
}

// Google truncates the SERP snippet around 155 characters, and city names run
// from 3 to 35 chars, so the occasions clause is only appended when it fits.
const DESCRIPTION_LIMIT = 155

export function buildCityCopy(context: CityCopyContext) {
  const { city, state, abbr, nearby } = context
  const nearbyDestinations = nearby.slice(0, 3).join(", ")
  const description = `Charter bus rental in ${city}, ${abbr} — coaches, minibuses, Sprinter vans, 10–56 passengers, driver included.`
  const occasions = " Weddings, corporate, school, sports."

  return {
    lead: `${siteConfig.name} provides charter bus rental and private group transportation in ${city}, ${abbr}. We rent motorcoaches seating 50 to 56 passengers, minibuses seating 20 to 32, and Sprinter vans seating 10 to 14, and a professional driver is included with every vehicle. Groups book us for corporate events, conventions, weddings, school trips, sports teams, airport transfers, group tours, concerts, festivals, and private events.`,
    close: `Book a one-way transfer, round trip, recurring shuttle, multi-stop itinerary, or long-distance charter from ${city}. Every rental includes a professional driver, and our team can help compare vehicle options for your passenger count, luggage, schedule, and destination. Request a free quote to check availability.`,
    details: [
      `Credence offers ${city} charter bus service for local, regional, and interstate travel. A private group bus rental keeps passengers on one coordinated schedule and gives organizers one transportation plan for pickups, stops, venue arrivals, and return service. It can replace a convoy of cars for business travel, special events, educational trips, team transportation, and private group outings.`,
      `Choose a full-size charter bus or motorcoach rental for a large group or longer trip, a minibus rental for medium-size groups and local shuttle service, or a Sprinter van rental for smaller private parties. Vehicle recommendations are based on the number of passengers, route, luggage, accessibility needs, and the type of trip you are planning in ${city}.`,
      `Corporate transportation in ${city} can include employee shuttles, conference transfers, convention transportation, off-site meetings, and client travel. Event transportation can cover wedding shuttles, hotel-to-venue service, sports transportation, school transportation, airport transportation, concerts, festivals, group tours, and other scheduled group travel.`,
      `Your trip can start or finish in ${city}, include multiple pickups within ${state}, or continue to nearby destinations such as ${nearbyDestinations}. Credence also arranges multi-day and long-distance group transportation beyond ${state}, so your group is not limited to a preset route or a single type of charter bus service.`,
      `To request a ${city} charter bus rental quote, send your travel date, passenger count, pickup address, destination, planned stops, schedule, luggage requirements, and accessibility needs. We will use the complete itinerary to help identify a suitable vehicle and prepare a free, itemized quote for your group transportation request.`,
    ],
    description:
      description.length + occasions.length <= DESCRIPTION_LIMIT
        ? description + occasions
        : description,
  }
}
