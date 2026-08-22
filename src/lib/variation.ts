import { siteConfig } from "@/config/site"

export function hashString(input: string) {
  let hash = 5381
  for (let i = 0; i < input.length; i++) {
    hash = ((hash * 33) ^ input.charCodeAt(i)) >>> 0
  }
  return hash
}

export function pickVariant<T>(seed: string, pool: readonly T[]): T {
  return pool[hashString(seed) % pool.length]
}

export type CityNeighbor = {
  name: string
  miles: number
}

export type CityCopyContext = {
  seed: string
  city: string
  state: string
  abbr: string
  region: string
  population: number
  nearby: CityNeighbor[]
}

type Template = (c: CityCopyContext) => string

const leadTemplates: ReadonlyArray<Template> = [
  (c) =>
    `We rent charter buses, mini buses, and sprinter vans in ${c.city}, ${c.state}. Corporate events, school trips, weddings, group tours — we have the right size vehicle and a licensed driver.`,
  (c) =>
    `${siteConfig.name} serves ${c.city}, ${c.state}. Whether you need a bus for a wedding, a school trip, a company event, or a group tour, we have a vehicle that fits.`,
  (c) =>
    `Looking for a charter bus in ${c.city}? We rent buses, mini buses, and vans across ${c.state}, and a professional driver comes with every one.`,
  (c) =>
    `We provide charter bus and coach rental in ${c.city}, ${c.state}. Groups of 8 to 56 ride together, with one licensed driver and one clear price.`,
  (c) =>
    `Need to move a group in ${c.city}? We have charter buses, mini buses, and sprinter vans, sized for weddings, sports teams, school trips, and company travel.`,
  (c) =>
    `Charter bus service in ${c.city}, ${c.state}, for groups of every size. Tell us the date and the headcount, and we send the right vehicle with a professional driver.`,
  (c) =>
    `We arrange group transportation in ${c.city}, ${c.state}. Weddings, corporate travel, school field trips, church outings, and tours all ride in one vehicle.`,
  (c) =>
    `${siteConfig.name} rents buses, mini buses, and vans in ${c.city}. Every trip across ${c.state} comes with a vetted driver and an itemized quote.`,
]

const factTemplates: Record<string, ReadonlyArray<Template>> = {
  metro: [
    (c) =>
      `${c.city} is one of the busier markets in ${c.state}, so peak weekends are worth booking early.`,
    (c) =>
      `About ${formatPopulation(c.population)} people live in ${c.city}, and full-size coaches run here every week.`,
    (c) =>
      `We also run trips from ${c.city} to ${c.nearby[0].name}, about ${c.nearby[0].miles} miles out.`,
  ],
  city: [
    (c) =>
      `${c.city} has about ${formatPopulation(c.population)} people — big enough for a full-size coach, small enough that pickups stay simple.`,
    (c) =>
      `Common runs from ${c.city} include ${c.nearby[0].name}, roughly ${c.nearby[0].miles} miles away.`,
    () => `Groups here book anything from a 14-seat van to a 56-passenger coach.`,
  ],
  town: [
    (c) =>
      `${c.city} has around ${formatPopulation(c.population)} residents, so mini buses and vans are the usual fit. A full coach is available too.`,
    (c) =>
      `Trips from ${c.city} often head toward ${c.nearby[0].name}, about ${c.nearby[0].miles} miles out.`,
    (c) =>
      `One vehicle beats a convoy of cars, even on a short run to ${c.nearby[0].name}.`,
  ],
  small: [
    (c) =>
      `${c.city} is a small community, so most trips here use a van or a mini bus. Larger buses come out on request.`,
    (c) =>
      `${c.nearby[0].name} sits about ${c.nearby[0].miles} miles from ${c.city}, and longer trips across ${c.state} are just as routine.`,
    () => `No town is too small. We bring the vehicle to you, wherever the trip starts.`,
  ],
}

const ctaTemplates: ReadonlyArray<Template> = [
  (c) => `Get a free quote or call us to check availability in ${c.city}.`,
  (c) => `Request a free quote, or call and we will check dates for ${c.city}.`,
  () => `Ask for a free quote, or give us a call to check availability.`,
  (c) => `Get a free quote today, or call to talk through your ${c.city} trip.`,
]

const descriptionTemplates: ReadonlyArray<Template> = [
  (c) =>
    `Charter bus and mini bus rentals in ${c.city}, ${c.abbr}. Licensed drivers, itemized quotes, groups of 8 to 56. Request a free quote or call us.`,
  (c) =>
    `Rent a charter bus, mini bus, or sprinter van in ${c.city}, ${c.state}. Clear itemized pricing and a professional driver on every trip. Free quotes.`,
  (c) =>
    `Group transportation in ${c.city}, ${c.abbr} — weddings, corporate travel, school trips, and tours. Get a free charter bus quote today.`,
  (c) =>
    `Charter bus rental in ${c.city}, ${c.abbr} for groups of any size. Vetted drivers, no hidden fees, routes throughout ${c.state}. Free quote in minutes.`,
  (c) =>
    `Book a charter bus or mini bus in ${c.city}, ${c.state}. Wedding shuttles, corporate runs, and team travel with itemized pricing. Call anytime.`,
  (c) =>
    `${c.city}, ${c.abbr} charter bus and van rentals with a professional driver included. Straightforward quotes, no surprises. Serving all of ${c.state}.`,
]

function formatPopulation(population: number) {
  if (population >= 1000000) return `${(population / 1000000).toFixed(1)} million`
  if (population >= 10000) return `${Math.round(population / 1000)},000`
  return population.toLocaleString("en-US")
}

function scaleOf(population: number) {
  if (population >= 250000) return "metro"
  if (population >= 50000) return "city"
  if (population >= 10000) return "town"
  return "small"
}

export function buildCityCopy(context: CityCopyContext) {
  const factPool = factTemplates[scaleOf(context.population)]
  const fact = pickVariant(`${context.seed}-fact`, factPool)(context)
  const cta = pickVariant(`${context.seed}-cta`, ctaTemplates)(context)
  return {
    lead: pickVariant(`${context.seed}-lead`, leadTemplates)(context),
    close: `${fact} ${cta}`,
    description: pickVariant(
      `${context.seed}-description`,
      descriptionTemplates
    )(context),
  }
}
