export type FleetImage = {
  src: string
  alt: string
}

export type FleetCategory = {
  slug: string
  name: string
  vehicleName: string
  capacity: string
  short: string
  description: string
  features: string[]
  amenities: string[]
  idealFor: string[]
  images: {
    exterior: FleetImage
    interior: FleetImage
    extra?: FleetImage[]
  }
  featured: boolean
}

export const fleetCategories: FleetCategory[] = [
  {
    slug: "motor-coaches",
    name: "Motor Coaches",
    vehicleName: "motor coach",
    capacity: "50–56 passengers",
    short:
      "A 50 to 56 passenger charter bus built for the long haul — high-back reclining seats, deep luggage bays, and a smooth ride hour after hour.",
    description:
      "A motor coach is the full-size charter bus most groups picture: 50 to 56 passengers, built for distance. Raised-deck seating gives every passenger a view and a quieter ride, the luggage bays underneath swallow suitcases and equipment for a week away, and an on-board restroom keeps stops to a minimum. When a group is crossing state lines or touring for several days, this is the charter bus rental we recommend first.",
    features: [
      "Wi-Fi",
      "Reclining seats",
      "Restroom",
      "Climate control",
      "Power outlets",
      "Overhead monitors",
      "PA system",
      "Luggage bays",
    ],
    amenities: [
      "Reclining high-back seats with seat belts",
      "On-board restroom",
      "Climate control",
      "Wi-Fi on board",
      "Power outlets",
      "Overhead monitors and PA system",
      "Oversized under-bus luggage bays",
    ],
    idealFor: [
      "Cross-country and interstate travel",
      "Multi-day tours and itineraries",
      "Conferences and convention groups",
      "Band, choir, and team travel with equipment",
    ],
    images: {
      exterior: {
        src: "/fleet/motor-coach-exterior.webp",
        alt: "Motor coach exterior parked and ready for a long-distance trip",
      },
      interior: {
        src: "/fleet/motor-coach-interior.webp",
        alt: "Motor coach interior with high-back reclining seats",
      },
    },
    featured: true,
  },
  {
    slug: "coach-buses",
    name: "Coach Buses",
    vehicleName: "coach bus",
    capacity: "40–45 passengers",
    short:
      "A 40 to 45 passenger charter bus — full coach comfort for mid-large groups without paying for empty seats.",
    description:
      "Coach buses seat 40 to 45 passengers — the right charter bus when a full 56-seat coach would ride half empty but a mini bus can't hold everyone. You keep the comforts that matter on a longer ride, with a vehicle matched to your actual headcount.",
    features: [
      "Wi-Fi",
      "Reclining seats",
      "Climate control",
      "Power outlets",
      "PA system",
      "Luggage bays",
    ],
    amenities: [
      "Reclining seats with seat belts",
      "Climate control",
      "Wi-Fi on board",
      "Power outlets",
      "PA system",
      "Under-bus luggage bays",
    ],
    idealFor: [
      "Mid-large group trips",
      "Regional day trips and outings",
      "Church and community travel",
      "Conference and event shuttles",
    ],
    images: {
      exterior: {
        src: "/fleet/coach-bus-exterior.webp",
        alt: "Coach bus exterior ready for boarding",
      },
      interior: {
        src: "/fleet/motor-coach-interior.webp",
        alt: "Coach bus interior with reclining seats",
      },
    },
    featured: false,
  },
  {
    slug: "mini-buses",
    name: "Mini Buses",
    vehicleName: "mini bus",
    capacity: "20–32 passengers",
    short:
      "A 20 to 32 passenger mini bus — easier to load, easier to park, same reliable ride as a full-size charter bus.",
    description:
      "Mini buses seat 20 to 32 passengers, hitting the sweet spot between a van and a full-size charter bus. They board quickly, navigate city streets and hotel entrances with ease, and still give every passenger a comfortable reclining seat — ideal for shuttles, day trips, and mid-size groups.",
    features: [
      "Wi-Fi",
      "Reclining seats",
      "Climate control",
      "Overhead storage",
      "PA system",
      "Luggage space",
    ],
    amenities: [
      "Reclining forward-facing seats",
      "Climate control",
      "Wi-Fi on board",
      "Overhead storage",
      "PA system",
      "Luggage space",
    ],
    idealFor: [
      "Hotel and event shuttles",
      "Day trips and outings",
      "Mid-size corporate groups",
      "Campus visits",
    ],
    images: {
      exterior: {
        src: "/fleet/mini-bus-exterior.webp",
        alt: "Mini bus parked outside a venue",
      },
      interior: {
        src: "/fleet/mini-bus-interior.webp",
        alt: "Mini bus interior with comfortable forward-facing seats",
      },
    },
    featured: true,
  },
  {
    slug: "sprinter-vans",
    name: "Sprinter Vans",
    vehicleName: "sprinter van",
    capacity: "10–14 passengers",
    short:
      "A 10 to 14 passenger sprinter van — executive comfort, airport-friendly, and quick around town.",
    description:
      "Sprinter vans carry 10 to 14 passengers in a tall, walk-in cabin with premium seating. They're the go-to for executive teams, airport transfers, and small groups that want to travel together without the footprint of a charter bus.",
    features: [
      "Wi-Fi",
      "Executive seating",
      "High-roof cabin",
      "Climate control",
      "Power outlets",
      "Luggage space",
    ],
    amenities: [
      "High-roof walk-in cabin",
      "Leather or executive seating",
      "Climate control",
      "Wi-Fi on board",
      "Luggage space",
      "Power outlets",
    ],
    idealFor: [
      "Airport transfers",
      "Executive travel",
      "Small wedding parties",
      "Family outings",
    ],
    images: {
      exterior: {
        src: "/fleet/sprinter-van-exterior.webp",
        alt: "Sprinter van parked curbside",
      },
      interior: {
        src: "/fleet/sprinter-van-interior.webp",
        alt: "Sprinter van interior with executive seating",
      },
    },
    featured: true,
  },
  {
    slug: "school-buses",
    name: "School Buses",
    vehicleName: "school bus",
    capacity: "28–60 passengers",
    short:
      "A 28 to 60 passenger school bus — the budget-friendly classic for short trips, school events, and shuttles.",
    description:
      "School buses are the most economical charter bus option for moving a large group over shorter distances — 28 to 60 passengers depending on the vehicle. They're a familiar, dependable choice for field trips, church events, camp shuttles, and wedding guest transport between venues.",
    features: [
      "Bench seating",
      "Roof hatches",
      "Ventilation",
      "Safety equipment",
      "Vetted drivers",
    ],
    amenities: [
      "Bench seating",
      "Roof hatches and ventilation",
      "High-visibility safety equipment",
      "Experienced, vetted drivers",
    ],
    idealFor: [
      "Field trips",
      "Church and camp events",
      "Wedding guest shuttles",
      "Local group transport",
    ],
    images: {
      exterior: {
        src: "/fleet/school-bus-exterior.webp",
        alt: "Yellow school bus parked and ready for a group",
      },
      interior: {
        src: "/fleet/school-bus-interior.webp",
        alt: "School bus interior with bench seating",
      },
    },
    featured: false,
  },
  {
    slug: "party-buses",
    name: "Party Buses",
    vehicleName: "party bus",
    capacity: "14–40 passengers",
    short:
      "A 14 to 40 passenger party bus — perimeter seating, lighting, and sound for birthdays, bachelor and bachelorette parties, and nights out.",
    description:
      "Party buses carry 14 to 40 passengers and turn the ride itself into part of the event. Perimeter seating keeps the group together and talking, with sound systems and accent lighting on board. A professional driver handles the road so everyone can enjoy the night safely.",
    features: [
      "Wraparound seating",
      "Premium sound",
      "LED lighting",
      "Dance floor",
      "Bar area",
      "Chauffeur",
    ],
    amenities: [
      "Perimeter wraparound seating",
      "Premium sound system",
      "LED accent lighting",
      "Dance floor",
      "Bar area with coolers",
      "Professional chauffeur",
    ],
    idealFor: [
      "Birthdays and celebrations",
      "Bachelor and bachelorette parties",
      "Concerts and game days",
      "Prom and formals",
    ],
    images: {
      exterior: {
        src: "/fleet/party-bus-exterior.webp",
        alt: "Party bus exterior at night",
      },
      interior: {
        src: "/fleet/party-bus-interior.webp",
        alt: "Party bus interior with wraparound seating and accent lighting",
      },
    },
    featured: false,
  },
  {
    slug: "limousines",
    name: "Limousines",
    vehicleName: "stretch limousine",
    capacity: "Up to 10 passengers",
    short:
      "A stretch limousine for up to 10 passengers — weddings, formal evenings, and arrivals that deserve an entrance.",
    description:
      "Our stretch limousines seat up to 10 passengers and bring the classic touch to weddings, anniversaries, proms, and formal nights. Plush seating, privacy, and a chauffeur at the door — the details that make an occasion feel like one.",
    features: [
      "Leather seating",
      "Privacy partition",
      "Beverage bar",
      "Ambient lighting",
      "Chauffeur",
    ],
    amenities: [
      "Plush leather seating",
      "Privacy partition",
      "Beverage bar",
      "Ambient lighting",
      "Professional chauffeur",
    ],
    idealFor: [
      "Weddings",
      "Anniversaries and date nights",
      "Prom and formals",
      "VIP airport pickups",
    ],
    images: {
      exterior: {
        src: "/fleet/stretch-limo-exterior.webp",
        alt: "Stretch limousine parked outside a venue",
      },
      interior: {
        src: "/fleet/stretch-limo-interior.webp",
        alt: "Stretch limousine interior with leather seating and bar",
      },
    },
    featured: false,
  },
  {
    slug: "suvs",
    name: "SUVs",
    vehicleName: "luxury SUV",
    capacity: "Up to 7 passengers",
    short:
      "A luxury SUV for up to 7 passengers — roomy and discreet for executives, families, and airport runs with extra luggage.",
    description:
      "Luxury SUVs offer room for up to seven passengers plus luggage, with the comfort and discretion executives and families expect. A strong choice for airport transfers, client pickups, and city-to-city runs.",
    features: [
      "Leather seating",
      "Cargo space",
      "Climate control",
      "Entertainment system",
      "Chauffeur",
    ],
    amenities: [
      "Premium leather seating",
      "Generous cargo space",
      "Climate control",
      "Entertainment system",
      "Professional chauffeur",
    ],
    idealFor: [
      "Executive transport",
      "Airport transfers",
      "Family travel",
      "Client pickups",
    ],
    images: {
      exterior: {
        src: "/fleet/suv-exterior.webp",
        alt: "Black luxury SUV parked curbside",
      },
      interior: {
        src: "/fleet/suv-interior.webp",
        alt: "Luxury SUV interior with leather seating",
      },
    },
    featured: false,
  },
  {
    slug: "sedans",
    name: "Sedans",
    vehicleName: "executive sedan",
    capacity: "Up to 4 passengers",
    short:
      "An executive sedan for up to 4 passengers — punctual, polished, point-to-point.",
    description:
      "Executive sedans are the simplest way to move up to four people in comfort. Airport pickups, business meetings, and evening events — on time, every time, with a professional behind the wheel.",
    features: [
      "Leather interior",
      "Climate control",
      "Entertainment system",
      "Meet-and-greet",
      "Chauffeur",
    ],
    amenities: [
      "Premium leather interior",
      "Climate control",
      "Entertainment system",
      "Meet-and-greet service",
      "Professional chauffeur",
    ],
    idealFor: [
      "Airport pickups",
      "Business meetings",
      "Evening events",
      "Individual VIP travel",
    ],
    images: {
      exterior: {
        src: "/fleet/sedan-exterior.webp",
        alt: "Executive sedan parked in front of a building",
      },
      interior: {
        src: "/fleet/sedan-interior.webp",
        alt: "Executive sedan interior with leather seats",
      },
    },
    featured: false,
  },
]

export const featuredFleet = fleetCategories.filter((c) => c.featured)

export function vehicleTitle(category: FleetCategory) {
  return category.vehicleName.replace(/\b[a-z]/g, (c) => c.toUpperCase())
}

export function vehicleArticle(category: FleetCategory) {
  return /^[aeiou]/i.test(category.vehicleName) ? "an" : "a"
}

export function getFleetCategory(slug: string) {
  return fleetCategories.find((c) => c.slug === slug)
}
