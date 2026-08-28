export type FleetImage = {
  src: string
  alt: string
}

export type FleetFaq = {
  question: string
  answer: string
}

export type FleetService = {
  name: string
  href: string
  body: string
}

export type FleetSeo = {
  intro: string
  services: FleetService[]
  serviceLede: string
  whyRent: string[]
  bestFor: { title: string; body: string }[]
  choosing: string
  planning: string[]
  faqs: FleetFaq[]
  onBoard?: { title: string; body: string }[]
  occasions?: string[]
  coverage?: string[]
  alsoKnownAs?: string[]
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
  seo?: FleetSeo
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
    seo: {
      onBoard: [
        {
          title: "Seating and cabin comfort",
          body:
            "Reclining high-back seats with seat belts are arranged on a raised deck, which gives every passenger a view over the road and a quieter ride above the wheels. Climate control runs throughout the cabin, so the temperature stays even from the front row to the back on a long charter bus trip.",
        },
        {
          title: "On-board restroom",
          body:
            "An on-board restroom is standard on our motor coaches. On interstate and multi-day charters this is the single feature that most changes the day, because a 50 to 56 passenger group no longer needs a rest stop every time one person does.",
        },
        {
          title: "Wi-Fi, power, and entertainment",
          body:
            "Wi-Fi and power outlets let passengers work, study, or stay connected during the drive, which matters for corporate travel and student groups. Overhead monitors and a PA system let tour guides, teachers, and trip organizers address the whole coach without shouting down the aisle.",
        },
        {
          title: "Luggage capacity",
          body:
            "Oversized under-bus luggage bays hold checked-size suitcases for a full group, plus instruments, athletic equipment, trade-show materials, or camping gear. This is the practical difference between a motor coach rental and a mini bus or passenger van, where luggage rides in the cabin.",
        },
      ],
      occasions: [
        "Corporate travel, conferences, and convention shuttles",
        "Employee appreciation events and company outings",
        "Conventions, trade shows, and exhibitor transportation",
        "School field trips, band trips, and choir tours",
        "College campus visits and university group travel",
        "Sports team travel, tournaments, and fan buses",
        "Church group travel, retreats, and mission trips",
        "Wedding guest shuttles and hotel-to-venue transportation",
        "Multi-day sightseeing tours and group vacations",
        "Casino trips, brewery tours, and winery outings",
        "Senior group travel and community center outings",
        "Military and government group transportation",
        "Airport transfers for large arriving groups",
        "Concerts, festivals, and stadium event transportation",
        "Family reunions and large private celebrations",
        "Disaster relief, staff shuttles, and long-term contracts",
      ],
      coverage: [
        "Motor coach rental is available in all 50 states, with one-way, round-trip, and multi-day charters booked through a single coordinator.",
        "Charters can start in one city and finish in another, cross state lines, and include as many scheduled stops as the itinerary requires.",
        "For groups larger than 56 passengers, we quote multiple coaches running on the same schedule so the whole party arrives together.",
        "Recurring and contract transportation is available for organizations that need the same route repeated weekly, monthly, or across a season.",
      ],
      alsoKnownAs: [
        "charter bus rental",
        "motorcoach rental",
        "coach bus hire",
        "56 passenger bus rental",
        "full-size charter bus",
        "tour bus rental",
        "group bus rental",
        "highway coach",
      ],
      serviceLede:
        "A motor coach rental is the vehicle behind most of the services Credence provides for large groups. These are the ways groups book it.",
      services: [
        {
          name: "Long-Distance Charter",
          href: "/services/long-distance-charter",
          body:
            "Interstate and multi-day travel is what this vehicle is built for. Reclining seats, an on-board restroom, and deep luggage bays make hours on the highway workable for a full group, with one driver responsible for the whole route.",
        },
        {
          name: "Corporate Travel",
          href: "/services/corporate-travel",
          body:
            "Companies book motor coaches for convention delegations, conference shuttles, employee events, and off-site meetings, moving an entire department or attendee block in one vehicle instead of dozens of separate cars.",
        },
        {
          name: "Sports Team Travel",
          href: "/services/sports-team-travel",
          body:
            "Teams travel with equipment, and the under-bus bays carry gear, uniforms, and bags while athletes and staff ride above. Motor coaches handle away games, tournaments, and fan travel on one schedule.",
        },
        {
          name: "School Trips",
          href: "/services/school-trips",
          body:
            "For longer educational travel, band and choir tours, and college visits, the motor coach carries a full class or ensemble with chaperones, instruments, and luggage in a single vehicle.",
        },
        {
          name: "City Tours",
          href: "/services/city-tours",
          body:
            "Multi-day sightseeing and group tours use motor coaches so the same vehicle and driver stay with the itinerary, with a PA system for guides and luggage held aboard between hotels.",
        },
        {
          name: "Airport Transfers",
          href: "/services/airport-transfers",
          body:
            "Large arriving groups move from the terminal to the hotel in one coordinated transfer, with luggage bays sized for a full flight's worth of checked bags.",
        },
      ],
      intro:
        "Credence Charter Bus rents motor coaches nationwide, seating 50 to 56 passengers with a professional driver included on every booking. Groups choose this vehicle for interstate travel, multi-day tours, conventions, student and team trips, and any itinerary large enough that splitting into cars stops making sense. Below is what the vehicle handles well, the services we run with it, and how to request a quote.",
      whyRent: [
        "Move 50 to 56 passengers together on one schedule instead of coordinating a convoy of cars, rideshares, or several smaller vans.",
        "Deep under-bus luggage bays hold suitcases, instruments, uniforms, trade-show materials, and team equipment that will not fit in a mini bus or van.",
        "An on-board restroom, reclining high-back seats, and climate control make long-distance charter bus travel practical for trips measured in hours rather than minutes.",
        "One professional driver handles routing, parking, and hours-of-service rules, so no one in your group has to drive after a long event.",
        "A single vehicle usually costs less per passenger than several smaller ones once driver time, fuel, and parking are counted.",
      ],
      bestFor: [
        {
          title: "Interstate and long-distance travel",
          body:
            "For trips that cross state lines or run several hours each way, the motor coach is the vehicle we recommend first. Reclining seats, an on-board restroom, and climate control keep a full group comfortable, and the driver manages the entire route.",
        },
        {
          title: "Multi-day tours and itineraries",
          body:
            "Touring groups keep the same coach and driver for the length of the itinerary, with luggage staying aboard between hotels. This suits sightseeing tours, alumni trips, church travel, and any schedule that moves between several cities.",
        },
        {
          title: "Conventions and conference groups",
          body:
            "Large delegations use motor coaches for airport-to-hotel arrivals, hotel-to-convention-center shuttles, and off-site evening events, moving everyone in one or two vehicles rather than dozens of separate rides.",
        },
        {
          title: "Band, choir, and team travel",
          body:
            "Instruments, uniforms, and athletic equipment travel in the luggage bays while the group rides above, which is why performing-arts groups and sports teams choose a full-size coach for competition and tour travel.",
        },
      ],
      choosing:
        "Choose a motor coach when your group is close to filling it and the trip is long enough that comfort matters. If your headcount lands between 40 and 45, a coach bus covers the same kind of trip without paying for empty seats. Between 20 and 32 passengers, a mini bus is easier to maneuver and load. Under 14, a Sprinter van is usually the better fit. Tell us your passenger count, route, and luggage, and we will recommend the size that actually matches the trip.",
      planning: [
        "Confirm your final passenger count and how much luggage each person is bringing, since luggage often decides the vehicle size more than seat count does.",
        "Share every pickup address, stop, and drop-off in order, including any hotel, venue, or airport terminal on the itinerary.",
        "Check that your destinations can accommodate a full-size coach for parking, turning, and curbside loading, and tell us if any location is tight.",
        "Book early for graduation season, holidays, and major tournaments or conventions, when full-size coaches are the first vehicles to sell out.",
      ],
      faqs: [
        {
          question: "How many passengers does a motor coach hold?",
          answer:
            "Credence motor coaches seat 50 to 56 passengers depending on the vehicle. If your group is smaller, a coach bus seats 40 to 45 and a mini bus seats 20 to 32.",
        },
        {
          question: "Does a motor coach rental include a driver?",
          answer:
            "Yes. Every motor coach rental includes a professional driver. Driver time is part of the quote, and you never rent the vehicle on its own.",
        },
        {
          question: "Do motor coaches have a restroom and Wi-Fi?",
          answer:
            "Yes. Our motor coaches include an on-board restroom, Wi-Fi, power outlets, climate control, overhead monitors, and a PA system.",
        },
        {
          question: "How much luggage fits on a motor coach?",
          answer:
            "Motor coaches have oversized under-bus luggage bays that hold checked-size suitcases for a full group, plus instruments, equipment, or event materials. Tell us what you are carrying and we will confirm it fits.",
        },
        {
          question: "Can a motor coach travel to another state?",
          answer:
            "Yes. Credence provides local, regional, interstate, and multi-day motor coach charters nationwide. Include every planned stop so the quote reflects the full route.",
        },
        {
          question: "How much does it cost to rent a motor coach?",
          answer:
            "Cost depends on travel dates, total mileage, driver hours, number of stops, parking, and trip length. Send your itinerary for a free, itemized quote based on your actual trip.",
        },
        {
          question: "Do you serve my city?",
          answer:
            "Credence Charter Bus provides service in all 50 states. Send your pickup city, destination, and travel dates and we will confirm availability for your route.",
        },
        {
          question: "Can I book a one-way trip instead of a round trip?",
          answer:
            "Yes. One-way, round-trip, multi-stop, and multi-day itineraries are all available. Tell us which you need so the quote reflects the actual route rather than an assumed return.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Payment details are confirmed with your coordinator when you book, along with any deposit terms that apply to your reservation. These are included in writing with your itemized quote before you commit.",
        },
        {
          question: "What happens if our plans change after booking?",
          answer:
            "Contact your coordinator as soon as plans change. Adjustments to timing, stops, or passenger count are often possible depending on availability, and any change to the quote is confirmed with you in writing first.",
        },
        {
          question: "How long can a motor coach drive in one day?",
          answer:
            "Drivers operate under federal hours-of-service rules that limit daily driving and require rest periods. For long itineraries we plan the schedule around those limits, and on some routes a second driver or an overnight stop is the correct solution. Share your full itinerary and we will tell you what the day allows.",
        },
        {
          question: "Is there a bathroom on a 56 passenger charter bus?",
          answer:
            "Yes. Our motor coaches include an on-board restroom, which is the main reason groups choose this vehicle for interstate and multi-day travel over a coach bus or mini bus.",
        },
        {
          question: "Can we eat and drink on board?",
          answer:
            "Food and drink policies vary by vehicle and trip. Tell your coordinator if you plan to cater on board or bring coolers so it is confirmed in advance and any cleaning terms are clear.",
        },
        {
          question: "What if our group is larger than 56 passengers?",
          answer:
            "We quote multiple coaches running on the same schedule so the entire group travels together and arrives at the same time. There is no upper limit on group size.",
        },
        {
          question: "Are motor coaches wheelchair accessible?",
          answer:
            "ADA-accessible vehicles with wheelchair lifts are available on request. Tell us about accessibility needs when you request your quote so the right vehicle is assigned to the trip.",
        },
      ],
    },
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
    seo: {
      onBoard: [
        {
          title: "Seating and cabin comfort",
          body:
            "Reclining seats with seat belts and full climate control give a 40 to 45 passenger group the same ride quality as a larger coach. The shorter body makes the vehicle easier to route through towns and venue entrances than a full 56-seat motor coach.",
        },
        {
          title: "Wi-Fi and power",
          body:
            "Wi-Fi and power outlets are standard, so business travelers can work between stops and student groups can charge devices during a longer drive.",
        },
        {
          title: "PA system for organizers",
          body:
            "A PA system lets a guide, teacher, or trip leader brief the whole bus at once, which matters on tours and school trips where instructions change during the day.",
        },
        {
          title: "Luggage capacity",
          body:
            "Under-bus luggage bays carry day bags, event materials, uniforms, and equipment that would not fit in the cabin of a mini bus, while keeping the aisle and seats clear.",
        },
      ],
      occasions: [
        "Corporate group travel and conference shuttles",
        "Church retreats, congregation outings, and community travel",
        "Regional day trips and organized excursions",
        "School trips, athletic travel, and campus visits",
        "Wedding guest transportation between hotels and venues",
        "Convention and trade-show attendee shuttles",
        "Senior center and club group outings",
        "Sightseeing tours and museum or landmark visits",
        "Casino, brewery, and winery group trips",
        "Family reunions and large private events",
        "Sports fan travel to regional games",
        "Employee shuttles and staff transportation",
      ],
      coverage: [
        "Coach bus rental is available nationwide for local, regional, interstate, and multi-day travel.",
        "One-way, round-trip, multi-stop, and recurring shuttle itineraries are all quoted from the same request form.",
        "Groups that grow past 45 passengers move to a motor coach, or we run two vehicles on one schedule so nobody is split off.",
        "Contract and repeat transportation is available for organizations running the same route on a regular basis.",
      ],
      alsoKnownAs: [
        "charter bus rental",
        "coach bus rental",
        "45 passenger bus rental",
        "group coach hire",
        "mid-size charter bus",
        "bus rental for 40 people",
        "tour coach rental",
      ],
      serviceLede:
        "A coach bus rental covers the same services as a full-size motor coach at a size matched to a 40 to 45 passenger group.",
      services: [
        {
          name: "Corporate Travel",
          href: "/services/corporate-travel",
          body:
            "Conference shuttles, employee events, and off-site meetings for a mid-large group, with reclining seats, Wi-Fi, and power outlets for attendees working between stops.",
        },
        {
          name: "Event Transportation",
          href: "/services/event-transportation",
          body:
            "Repeating hotel-to-venue runs move a large block of attendees per trip, cutting the number of cycles a smaller vehicle would need across an event day.",
        },
        {
          name: "City Tours",
          href: "/services/city-tours",
          body:
            "Regional day tours and sightseeing outings, with a PA system for guides and under-bus luggage space for what the group brings along.",
        },
        {
          name: "School Trips",
          href: "/services/school-trips",
          body:
            "Class trips, athletic travel, and campus visits for groups in the forties, where a 56-seat coach would ride partly empty.",
        },
        {
          name: "Long-Distance Charter",
          href: "/services/long-distance-charter",
          body:
            "Regional and multi-day itineraries. When the route is long enough that an on-board restroom matters, we will recommend a motor coach instead.",
        },
        {
          name: "Wedding & Group Celebrations",
          href: "/services/wedding-transportation",
          body:
            "Guest transportation between hotels, ceremony, and reception for larger weddings, keeping a big share of the guest list on one vehicle and one schedule.",
        },
      ],
      intro:
        "A coach bus rental seats 40 to 45 passengers and covers the same ground as a full-size motor coach without paying for rows that ride empty. Credence Charter Bus rents coach buses nationwide for regional day trips, church and community travel, conference shuttles, and mid-large groups that need real coach comfort at a size matched to the actual headcount.",
      whyRent: [
        "Fits the common 40 to 45 passenger group exactly, the range where a 56-seat coach is oversized and a 32-seat mini bus is too small.",
        "Keeps the comforts that matter on a longer ride: reclining seats, climate control, Wi-Fi, power outlets, and a PA system for guides or organizers.",
        "Under-bus luggage bays carry day bags, event materials, and equipment that will not fit in the cabin of a smaller vehicle.",
        "One professional driver and one schedule replace the coordination of several vans or a caravan of private cars.",
      ],
      bestFor: [
        {
          title: "Mid-large group trips",
          body:
            "When the headcount lands in the forties, a coach bus is the efficient answer. You keep full-size coach seating and luggage capacity while paying for a vehicle sized to the group.",
        },
        {
          title: "Regional day trips and outings",
          body:
            "Coach buses suit day-long regional travel where the group leaves in the morning and returns the same evening, with comfortable seating for the drive and space for what everyone brings.",
        },
        {
          title: "Church and community travel",
          body:
            "Congregations, clubs, and community organizations use coach buses for retreats, conferences, and group outings, keeping members together with one driver and one schedule.",
        },
        {
          title: "Conference and event shuttles",
          body:
            "For repeating hotel-to-venue runs, a coach bus moves a large block of attendees per trip, reducing the number of cycles needed compared with smaller vehicles.",
        },
      ],
      choosing:
        "Choose a coach bus when your group is roughly 35 to 45 people. Above that, a motor coach seating 50 to 56 gives you the extra rows plus an on-board restroom for longer hauls. Below it, a mini bus seating 20 to 32 is easier to park and load in tight city locations. Send your passenger count and route and we will confirm which size fits.",
      planning: [
        "Give us a firm passenger count, since the choice between a coach bus and a full-size motor coach usually turns on a few seats either way.",
        "Tell us whether the trip needs an on-board restroom, which is standard on our motor coaches rather than coach buses, as that can decide the vehicle on longer routes.",
        "List each stop with its address so the driver's schedule and total mileage are accurate in the quote.",
        "Mention any venue with limited bus parking or a tight entrance so we can plan loading points in advance.",
      ],
      faqs: [
        {
          question: "How many people fit on a coach bus?",
          answer:
            "Credence coach buses seat 40 to 45 passengers. For larger groups, motor coaches seat 50 to 56; for smaller groups, mini buses seat 20 to 32.",
        },
        {
          question: "What is the difference between a coach bus and a motor coach?",
          answer:
            "Both are full-size charter buses with reclining seats and luggage bays. The motor coach is larger at 50 to 56 passengers and includes an on-board restroom, which makes it the better choice for long-distance travel.",
        },
        {
          question: "Does a coach bus rental come with a driver?",
          answer:
            "Yes. A professional driver is included with every coach bus rental, and driver time is built into your quote.",
        },
        {
          question: "Does a coach bus have Wi-Fi?",
          answer:
            "Yes. Our coach buses include Wi-Fi, reclining seats, climate control, power outlets, a PA system, and under-bus luggage bays.",
        },
        {
          question: "Can a coach bus be used for a multi-day trip?",
          answer:
            "Yes. Coach buses handle regional and multi-day itineraries. For long-distance travel where an on-board restroom matters, we may recommend a motor coach instead.",
        },
        {
          question: "How do I get a coach bus rental quote?",
          answer:
            "Send your travel dates, passenger count, pickup address, destination, and planned stops. We will match the vehicle to the trip and return a free, itemized quote.",
        },
        {
          question: "Do you serve my city?",
          answer:
            "Credence Charter Bus provides service in all 50 states. Send your pickup city, destination, and travel dates and we will confirm availability for your route.",
        },
        {
          question: "Can I book a one-way trip instead of a round trip?",
          answer:
            "Yes. One-way, round-trip, multi-stop, and multi-day itineraries are all available. Tell us which you need so the quote reflects the actual route rather than an assumed return.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Payment details are confirmed with your coordinator when you book, along with any deposit terms that apply to your reservation. These are included in writing with your itemized quote before you commit.",
        },
        {
          question: "What happens if our plans change after booking?",
          answer:
            "Contact your coordinator as soon as plans change. Adjustments to timing, stops, or passenger count are often possible depending on availability, and any change to the quote is confirmed with you in writing first.",
        },
        {
          question: "Does a coach bus have a bathroom?",
          answer:
            "Our coach buses do not include an on-board restroom. If your route is long enough that a restroom matters, we will recommend a motor coach, where it is standard.",
        },
        {
          question: "Can a coach bus handle a full day of stops?",
          answer:
            "Yes. Multi-stop day itineraries are common for this vehicle. Provide each address and the times you need to arrive so driver hours and mileage are quoted accurately.",
        },
        {
          question: "Is a coach bus wheelchair accessible?",
          answer:
            "Accessible vehicles with wheelchair lifts are available on request. Mention accessibility needs when requesting your quote so the correct vehicle is assigned.",
        },
        {
          question: "What if our group grows after booking?",
          answer:
            "Tell your coordinator as early as possible. Depending on availability we can move you to a motor coach seating 50 to 56 or add a second vehicle to the same schedule.",
        },
      ],
    },
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
    seo: {
      onBoard: [
        {
          title: "Seating and boarding",
          body:
            "Reclining forward-facing seats keep a 20 to 32 passenger group comfortable, and the lower step height makes boarding faster than a full-size coach. On a shuttle loop that repeats through an evening, quicker boarding is what keeps the schedule on time.",
        },
        {
          title: "Maneuverability",
          body:
            "A shorter wheelbase and tighter turning radius let a mini bus reach hotel porte-cocheres, venue driveways, residential streets, and campus loading zones where a 45-foot charter bus simply cannot go.",
        },
        {
          title: "Wi-Fi and climate control",
          body:
            "Wi-Fi and full climate control are standard, so the vehicle still rides like a charter bus rather than a passenger van on longer day trips.",
        },
        {
          title: "Storage",
          body:
            "Overhead and rear storage handles day bags, carry-ons, and event materials. For a group checking full-size suitcases, a coach bus or motor coach with under-bus bays is the better fit.",
        },
      ],
      occasions: [
        "Wedding guest shuttles and hotel-to-venue loops",
        "Corporate off-site meetings and team events",
        "Conference and convention shuttle service",
        "Airport transfers for mid-size groups",
        "College campus tours and recruiting visits",
        "School trips and smaller academic outings",
        "City sightseeing tours and day excursions",
        "Brewery, winery, and distillery tours",
        "Senior group outings and assisted-living trips",
        "Church group travel and youth group events",
        "Sports team travel for smaller rosters",
        "Bachelor and bachelorette party transportation",
        "Employee shuttles and park-and-ride service",
        "Family reunions and private group celebrations",
      ],
      coverage: [
        "Mini bus rental is available nationwide for local shuttles, day trips, and regional group travel.",
        "Continuous shuttle loops are quoted by total hours, so a single vehicle can run between hotels and a venue all evening.",
        "Multiple mini buses can run the same loop when one vehicle cannot cycle fast enough for the guest count.",
        "One-way, round-trip, multi-stop, and recurring contract service are all available from the same quote request.",
      ],
      alsoKnownAs: [
        "minibus rental",
        "mini coach rental",
        "shuttle bus rental",
        "25 passenger bus rental",
        "32 passenger minibus",
        "small charter bus",
        "hotel shuttle bus",
        "bus rental for 30 people",
      ],
      serviceLede:
        "A mini bus rental is the vehicle behind most shuttle work Credence runs, along with day trips and mid-size group travel.",
      services: [
        {
          name: "Event Transportation",
          href: "/services/event-transportation",
          body:
            "Mini buses are a standard shuttle vehicle. Quick boarding and a tighter turning radius let one bus run a continuous loop between hotels, parking areas, and the venue all evening.",
        },
        {
          name: "Wedding & Group Celebrations",
          href: "/services/wedding-transportation",
          body:
            "Guest shuttles between hotel blocks, the ceremony site, and the reception, reaching venue driveways and residential streets a full-size coach cannot manage.",
        },
        {
          name: "Corporate Travel",
          href: "/services/corporate-travel",
          body:
            "Off-site meetings, team events, and client visits for groups too large for vans and well short of a full coach, with Wi-Fi and reclining seats on board.",
        },
        {
          name: "Airport Transfers",
          href: "/services/airport-transfers",
          body:
            "Group airport runs where the party is 20 to 32 people, moving passengers and bags from the terminal in a single trip.",
        },
        {
          name: "School Trips",
          href: "/services/school-trips",
          body:
            "Campus tours, recruiting visits, and smaller academic trips, reaching campus loading zones and city streets that larger buses often cannot enter.",
        },
        {
          name: "City Tours",
          href: "/services/city-tours",
          body:
            "Local sightseeing and day trips, where maneuverability around city attractions matters more than long-haul seating.",
        },
      ],
      intro:
        "A mini bus rental seats 20 to 32 passengers and is the practical middle ground between a passenger van and a full-size charter bus. Credence Charter Bus rents mini buses nationwide for hotel and event shuttles, corporate day trips, campus visits, and mid-size groups that need to move around a city quickly without the footprint of a full-size coach.",
      whyRent: [
        "Boards and unloads faster than a full-size coach, which matters when a shuttle repeats the same loop several times in an evening.",
        "Maneuvers city streets, hotel entrances, and venue driveways that a full-size charter bus cannot easily reach.",
        "Seats 20 to 32 passengers in reclining forward-facing seats with climate control and Wi-Fi, so it still rides like a charter bus rather than a van.",
        "Often the most cost-effective option for mid-size groups, since you are not paying for a 56-seat vehicle to carry 25 people.",
      ],
      bestFor: [
        {
          title: "Hotel and event shuttles",
          body:
            "Mini buses are a standard shuttle vehicle for weddings, conferences, and multi-hotel events. Quick boarding and a smaller turning radius let the same vehicle run a continuous loop between hotels and the venue.",
        },
        {
          title: "Day trips and outings",
          body:
            "For a group heading out and back in a day, a mini bus provides comfortable seating and enough luggage space for day bags, without the cost or parking demands of a full coach.",
        },
        {
          title: "Mid-size corporate groups",
          body:
            "Departments and client groups use mini buses for off-site meetings, team events, and airport runs where the headcount is too large for vans but well short of a full coach.",
        },
        {
          title: "Campus visits and student groups",
          body:
            "Mini buses handle campus tours, recruiting visits, and smaller academic trips, reaching campus loading zones and city streets that full-size coaches often cannot.",
        },
      ],
      choosing:
        "Choose a mini bus when your group is roughly 20 to 32 people, when the route involves tight city streets or repeated shuttle loops, or when your venue cannot accommodate a full-size coach. If your headcount grows past the mid-thirties, a coach bus seating 40 to 45 is the next step up. If it drops below 14, a Sprinter van is usually the better and more economical fit.",
      planning: [
        "Confirm your passenger count, since a mini bus tops out at 32 and a larger group will need a coach bus or motor coach.",
        "Tell us if the vehicle will run a repeating shuttle loop, and give us the start and end times so driver hours are quoted correctly.",
        "Note luggage needs, as mini buses offer overhead and rear storage rather than the deep under-bus bays found on full-size coaches.",
        "Share venue entrances and any height or weight restrictions on parking structures along the route.",
      ],
      faqs: [
        {
          question: "How many passengers does a mini bus hold?",
          answer:
            "Credence mini buses seat 20 to 32 passengers depending on the vehicle. Larger groups move to a coach bus at 40 to 45 or a motor coach at 50 to 56.",
        },
        {
          question: "Is a mini bus cheaper than a full-size charter bus?",
          answer:
            "For mid-size groups it usually is, because you are not paying for a larger vehicle than the trip requires. Final cost still depends on dates, mileage, driver hours, and stops, so we quote each trip individually.",
        },
        {
          question: "Does a mini bus rental include a driver?",
          answer:
            "Yes. Every mini bus rental includes a professional driver.",
        },
        {
          question: "Does a mini bus have Wi-Fi and reclining seats?",
          answer:
            "Yes. Our mini buses include Wi-Fi, reclining forward-facing seats, climate control, overhead storage, and a PA system.",
        },
        {
          question: "Can a mini bus be used as a wedding or hotel shuttle?",
          answer:
            "Yes. Mini buses are one of the most common shuttle vehicles we provide, running continuous loops between hotels, ceremony sites, and reception venues.",
        },
        {
          question: "How much luggage fits on a mini bus?",
          answer:
            "Mini buses provide overhead and rear luggage space suited to day bags and carry-ons. If your group is checking full-size suitcases, a coach bus or motor coach with under-bus bays is the better choice.",
        },
        {
          question: "Do you serve my city?",
          answer:
            "Credence Charter Bus provides service in all 50 states. Send your pickup city, destination, and travel dates and we will confirm availability for your route.",
        },
        {
          question: "Can I book a one-way trip instead of a round trip?",
          answer:
            "Yes. One-way, round-trip, multi-stop, and multi-day itineraries are all available. Tell us which you need so the quote reflects the actual route rather than an assumed return.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Payment details are confirmed with your coordinator when you book, along with any deposit terms that apply to your reservation. These are included in writing with your itemized quote before you commit.",
        },
        {
          question: "What happens if our plans change after booking?",
          answer:
            "Contact your coordinator as soon as plans change. Adjustments to timing, stops, or passenger count are often possible depending on availability, and any change to the quote is confirmed with you in writing first.",
        },
        {
          question: "How many mini buses do we need for a wedding shuttle?",
          answer:
            "It depends on the guest count, the distance between hotel and venue, and how quickly the loop can cycle. Give us the guest count and both addresses and we will work out how many vehicles keep the wait acceptable.",
        },
        {
          question: "Does a mini bus have a restroom?",
          answer:
            "No. Mini buses do not include an on-board restroom. For longer routes where that matters, a motor coach is the vehicle we recommend.",
        },
        {
          question: "Can a mini bus reach a venue with a narrow driveway?",
          answer:
            "In most cases yes, which is a common reason groups choose a mini bus over a full-size coach. Send the venue address and we will check access before confirming the vehicle.",
        },
        {
          question: "Is a mini bus wheelchair accessible?",
          answer:
            "Accessible mini buses with lifts are available on request. Include accessibility requirements with your quote request so the right vehicle is assigned.",
        },
      ],
    },
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
    seo: {
      onBoard: [
        {
          title: "High-roof walk-in cabin",
          body:
            "The high-roof cabin lets passengers stand upright and walk to their seats instead of climbing across a bench. For older travelers, business groups in formal clothing, and anyone boarding at a busy airport curb, this is the practical advantage over a standard passenger van.",
        },
        {
          title: "Executive seating",
          body:
            "Leather or executive seating for 10 to 14 passengers gives a small group a premium cabin, suitable for client travel where the vehicle is part of the impression.",
        },
        {
          title: "Wi-Fi and power outlets",
          body:
            "Wi-Fi and power outlets let a team keep working between meetings or during an airport run, which is why roadshows and executive travel book this vehicle.",
        },
        {
          title: "Luggage space",
          body:
            "Dedicated luggage space keeps bags out of the aisle and out of passengers' laps. Capacity depends on how many seats are filled, so we confirm the configuration against your bag count.",
        },
      ],
      occasions: [
        "Airport transfers and hotel pickups",
        "Executive and corporate client travel",
        "Roadshows and multi-stop business days",
        "Small wedding parties and bridal transportation",
        "Family travel and multi-generational trips",
        "Winery, brewery, and distillery tours",
        "Golf outings and small sports groups",
        "Conference and convention VIP transport",
        "Concert, theater, and event transportation",
        "Campus visits and small student groups",
        "Funeral and memorial family transportation",
        "Casino trips and small private outings",
      ],
      coverage: [
        "Sprinter van rental is available nationwide for airport transfers, point-to-point trips, and full-day charters.",
        "Hourly, one-way, round-trip, and multi-stop bookings are all quoted from the same request.",
        "Several vans can run together when a group is larger than 14 but a full bus is impractical for the route.",
        "Recurring executive and shuttle transportation is available on contract for regular routes.",
      ],
      alsoKnownAs: [
        "Sprinter van rental",
        "executive van rental",
        "14 passenger van rental",
        "luxury van rental",
        "Mercedes Sprinter charter",
        "small group transportation",
        "corporate van service",
        "airport van rental",
      ],
      serviceLede:
        "A Sprinter van rental covers the small-group end of Credence's services, where a full charter bus would be more vehicle than the trip needs.",
      services: [
        {
          name: "Airport Transfers",
          href: "/services/airport-transfers",
          body:
            "The most common use for this vehicle. Passengers and luggage travel together from the terminal to the hotel or office, with the driver handling curbside loading.",
        },
        {
          name: "Corporate Travel",
          href: "/services/corporate-travel",
          body:
            "Executive teams, client visits, and roadshows use the private cabin to talk or work between meetings, with Wi-Fi and power outlets on board.",
        },
        {
          name: "Wedding & Group Celebrations",
          href: "/services/wedding-transportation",
          body:
            "Wedding parties and immediate family move between the getting-ready location, ceremony, photography stops, and reception, where a large bus would be impractical.",
        },
        {
          name: "City Tours",
          href: "/services/city-tours",
          body:
            "Small-group sightseeing that needs to reach downtown addresses and attraction entrances closed to full-size buses.",
        },
        {
          name: "Event Transportation",
          href: "/services/event-transportation",
          body:
            "VIP and small-party transport to concerts, games, and private events, arriving at the door rather than a distant bus lot.",
        },
      ],
      intro:
        "A Sprinter van rental carries 10 to 14 passengers in a tall, walk-in cabin with executive seating. Credence Charter Bus rents Sprinter vans nationwide for airport transfers, executive and client travel, small wedding parties, and family groups that want to ride together without booking a full charter bus.",
      whyRent: [
        "Keeps a small group of 10 to 14 together in one vehicle instead of splitting across multiple cars or rideshares that arrive at different times.",
        "The high-roof cabin lets passengers stand and walk to their seats, which is noticeably easier for boarding than a standard passenger van.",
        "Reaches airport curbside pickup areas, downtown addresses, and parking structures that a full-size charter bus cannot access.",
        "Executive seating, Wi-Fi, power outlets, and climate control make it suitable for client travel and working transfers.",
      ],
      bestFor: [
        {
          title: "Airport transfers",
          body:
            "Sprinter vans are a frequently requested airport vehicle for small groups. Passengers and luggage travel together from the terminal to the hotel or office in one trip, with the driver handling curbside loading.",
        },
        {
          title: "Executive and client travel",
          body:
            "For leadership teams, client visits, and roadshows, a Sprinter van offers a private cabin with comfortable seating and power, so the group can talk or work between meetings.",
        },
        {
          title: "Small wedding parties",
          body:
            "Wedding parties and immediate family use Sprinter vans for transport between the getting-ready location, ceremony, photos, and reception, where a large bus would be impractical.",
        },
        {
          title: "Family and small group outings",
          body:
            "Extended families and small groups traveling together use Sprinter vans for day trips, tours, and events, keeping everyone on one schedule with luggage on board.",
        },
      ],
      choosing:
        "Choose a Sprinter van when your group is 14 or fewer, when the route involves airports or tight urban addresses, or when you want a premium cabin for a small group. If your headcount is closer to 20 or more, a mini bus seating 20 to 32 is the next size up. For up to seven passengers with heavy luggage, a luxury SUV may be the better fit.",
      planning: [
        "Give us an exact passenger count with luggage, since a full 14 passengers plus large suitcases can exceed the space available.",
        "For airport pickups, include the airline, terminal, and flight arrival time so the driver can time the curbside meet correctly.",
        "Tell us about any parking-garage height limits at your destinations, as high-roof vans do not clear every structure.",
        "Share the full schedule for multi-stop days so wait time between stops is quoted accurately.",
      ],
      faqs: [
        {
          question: "How many passengers fit in a Sprinter van?",
          answer:
            "Credence Sprinter vans carry 10 to 14 passengers depending on the vehicle configuration. Larger groups move up to a mini bus seating 20 to 32.",
        },
        {
          question: "Does a Sprinter van rental include a driver?",
          answer:
            "Yes. Every Sprinter van rental includes a professional driver. We do not rent vehicles without a driver.",
        },
        {
          question: "Can a Sprinter van pick us up at the airport?",
          answer:
            "Yes. Airport transfers are one of the most common uses for this vehicle. Provide the airline, terminal, flight time, and passenger and luggage counts when you request a quote.",
        },
        {
          question: "Is there luggage space in a Sprinter van?",
          answer:
            "Yes. Sprinter vans include dedicated luggage space, though capacity depends on how many seats are occupied. Tell us your bag count so we can confirm the right configuration.",
        },
        {
          question: "Does a Sprinter van have Wi-Fi?",
          answer:
            "Yes. Our Sprinter vans include Wi-Fi, executive seating, a high-roof walk-in cabin, climate control, and power outlets.",
        },
        {
          question: "Is a Sprinter van cheaper than a charter bus?",
          answer:
            "For small groups it typically is, since the vehicle is sized to the group. Pricing depends on dates, mileage, driver hours, and stops, so we provide an itemized quote for your specific trip.",
        },
        {
          question: "Do you serve my city?",
          answer:
            "Credence Charter Bus provides service in all 50 states. Send your pickup city, destination, and travel dates and we will confirm availability for your route.",
        },
        {
          question: "Can I book a one-way trip instead of a round trip?",
          answer:
            "Yes. One-way, round-trip, multi-stop, and multi-day itineraries are all available. Tell us which you need so the quote reflects the actual route rather than an assumed return.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Payment details are confirmed with your coordinator when you book, along with any deposit terms that apply to your reservation. These are included in writing with your itemized quote before you commit.",
        },
        {
          question: "What happens if our plans change after booking?",
          answer:
            "Contact your coordinator as soon as plans change. Adjustments to timing, stops, or passenger count are often possible depending on availability, and any change to the quote is confirmed with you in writing first.",
        },
        {
          question: "How many suitcases fit in a Sprinter van?",
          answer:
            "Luggage capacity depends on how many of the 10 to 14 seats are occupied. A full passenger load with large checked bags may need a second vehicle or a mini bus, so tell us the passenger and bag count together.",
        },
        {
          question: "Will the driver wait if our flight is delayed?",
          answer:
            "Provide the airline and flight number with your booking so arrival timing can be tracked. Wait-time terms are confirmed with your coordinator in advance.",
        },
        {
          question: "Can a Sprinter van fit in a parking garage?",
          answer:
            "Not always. High-roof vans do not clear every parking structure. Tell us if your destination requires garage access so the route and drop-off point are planned correctly.",
        },
        {
          question: "Do you offer child seats?",
          answer:
            "Tell your coordinator about car seat requirements when you request your quote and we will confirm what can be arranged for your trip.",
        },
      ],
    },
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
    seo: {
      onBoard: [
        {
          title: "Seating and capacity",
          body:
            "Bench seating carries 28 to 60 passengers depending on the vehicle, which is the highest passenger count per dollar in our fleet. For a class, roster, or congregation moving a short distance, no other vehicle matches the cost per seat.",
        },
        {
          title: "Ventilation and safety equipment",
          body:
            "Roof hatches and ventilation keep air moving through the cabin, and high-visibility safety equipment is standard. These are purpose-built student transport vehicles operating in the configuration they were designed for.",
        },
        {
          title: "Experienced drivers",
          body:
            "School bus charters are driven by experienced, vetted drivers. For school and youth group travel, the driver is as much a part of the service as the vehicle.",
        },
        {
          title: "What it does not include",
          body:
            "School buses do not have an on-board restroom, Wi-Fi, reclining seats, or luggage bays. That is the trade for the price, and it is why we recommend a mini bus, coach bus, or motor coach for any trip longer than an hour or two.",
        },
      ],
      occasions: [
        "School field trips and educational outings",
        "Athletic events and local team transportation",
        "Summer camp shuttles and youth programs",
        "Church group events and vacation Bible school",
        "Wedding guest shuttles over short distances",
        "Park-and-ride shuttles for festivals and fairs",
        "Community events and municipal transportation",
        "Corporate campus and employee shuttles",
        "Scout troops and youth organization outings",
        "Volunteer group and service project transport",
        "Local parade and event staff transportation",
        "Emergency and overflow group movement",
      ],
      coverage: [
        "School bus rental is available nationwide, best suited to short local routes rather than long highway travel.",
        "Repeating daily or weekly shuttle loops are available on contract for schools, camps, and event operators.",
        "Multiple buses can be scheduled together when a group exceeds a single vehicle's capacity.",
        "For trips beyond an hour or two, we will recommend a mini bus, coach bus, or motor coach for passenger comfort.",
      ],
      alsoKnownAs: [
        "school bus rental",
        "yellow bus rental",
        "field trip bus",
        "student transportation",
        "activity bus rental",
        "camp bus rental",
        "cheap bus rental",
        "bus rental for 50 students",
      ],
      serviceLede:
        "A school bus rental serves the short-distance, high-capacity end of Credence's services, where cost per seat matters most.",
      services: [
        {
          name: "School Trips",
          href: "/services/school-trips",
          body:
            "Local field trips, athletic events, and district activities, carrying a full class or grade with chaperones in one familiar, predictable vehicle.",
        },
        {
          name: "Event Transportation",
          href: "/services/event-transportation",
          body:
            "Park-and-ride shuttles and short guest loops between a parking area and a nearby venue, moving a large block of people per run.",
        },
        {
          name: "Wedding & Group Celebrations",
          href: "/services/wedding-transportation",
          body:
            "Guest shuttles over short distances, where the priority is moving many guests economically rather than reclining seats.",
        },
        {
          name: "Sports Team Travel",
          href: "/services/sports-team-travel",
          body:
            "Local games and practices, carrying a full roster plus coaching staff on short runs across town.",
        },
      ],
      intro:
        "A school bus rental seats 28 to 60 passengers and is the most economical way to move a large group over shorter distances. Credence Charter Bus rents school buses nationwide for field trips, camp and church events, wedding guest shuttles, and local group transport where the priority is capacity and cost rather than long-haul amenities.",
      whyRent: [
        "The lowest cost per seat of any vehicle in our fleet for large groups traveling short, local distances.",
        "Seats 28 to 60 passengers depending on the bus, so a single vehicle can carry a class, team, or congregation in one trip.",
        "A familiar, predictable vehicle for student transport, with high-visibility safety equipment and experienced, vetted drivers.",
        "Efficient for repeating short shuttle loops where a group moves between two nearby points many times in a day.",
      ],
      bestFor: [
        {
          title: "Field trips and school events",
          body:
            "School buses are a standard vehicle for local field trips, athletic events, and district activities, carrying a full class or grade with chaperones in one vehicle.",
        },
        {
          title: "Church and camp events",
          body:
            "Congregations and summer camps use school buses for local outings and repeated shuttle runs, where capacity matters more than reclining seats.",
        },
        {
          title: "Wedding guest shuttles",
          body:
            "For guest transport between a parking area, hotel, and nearby venue, a school bus moves a large block of guests per run at a lower cost than a coach.",
        },
        {
          title: "Local group transport",
          body:
            "Community organizations and event operators use school buses for short-distance shuttles, park-and-ride operations, and local group movement.",
        },
      ],
      choosing:
        "Choose a school bus when the group is large, the distance is short, and budget is the deciding factor. Because these buses have bench seating and no restroom, Wi-Fi, or reclining seats, they are not the right choice for long-distance travel. For trips over an hour or two, a mini bus, coach bus, or motor coach will be far more comfortable and is what we would recommend instead.",
      planning: [
        "Confirm the distance and travel time, since school buses suit short local runs rather than long highway trips.",
        "Give us the passenger count including chaperones and staff, as capacity varies from 28 to 60 by vehicle.",
        "Tell us if the bus will make repeating loops, and provide the first pickup and final drop-off times.",
        "Mention any accessibility needs when you request the quote so we can advise on the right vehicle.",
      ],
      faqs: [
        {
          question: "How many students fit on a school bus?",
          answer:
            "Our school buses seat 28 to 60 passengers depending on the vehicle. Give us your headcount including chaperones and we will confirm the right size.",
        },
        {
          question: "Is a school bus the cheapest charter option?",
          answer:
            "For large groups traveling short distances it is generally the most economical vehicle we offer, because it maximizes seats at a lower cost per passenger.",
        },
        {
          question: "Do school buses have air conditioning or a restroom?",
          answer:
            "School buses have bench seating, roof hatches, and ventilation. They do not have an on-board restroom, Wi-Fi, or reclining seats. For longer trips we recommend a mini bus, coach bus, or motor coach.",
        },
        {
          question: "Does a school bus rental include a driver?",
          answer:
            "Yes. Every school bus rental includes an experienced, vetted professional driver.",
        },
        {
          question: "Can we rent a school bus for a non-school event?",
          answer:
            "Yes. School buses are frequently used for church events, camps, community outings, and wedding guest shuttles, not only for school trips.",
        },
        {
          question: "How far in advance should we book a school bus?",
          answer:
            "Book as early as possible for the school year, especially during spring field-trip season and around graduations, when demand for large-capacity vehicles peaks.",
        },
        {
          question: "Do you serve my city?",
          answer:
            "Credence Charter Bus provides service in all 50 states. Send your pickup city, destination, and travel dates and we will confirm availability for your route.",
        },
        {
          question: "Can I book a one-way trip instead of a round trip?",
          answer:
            "Yes. One-way, round-trip, multi-stop, and multi-day itineraries are all available. Tell us which you need so the quote reflects the actual route rather than an assumed return.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Payment details are confirmed with your coordinator when you book, along with any deposit terms that apply to your reservation. These are included in writing with your itemized quote before you commit.",
        },
        {
          question: "What happens if our plans change after booking?",
          answer:
            "Contact your coordinator as soon as plans change. Adjustments to timing, stops, or passenger count are often possible depending on availability, and any change to the quote is confirmed with you in writing first.",
        },
        {
          question: "Do school buses have seat belts?",
          answer:
            "Seat belt configuration varies by vehicle and state requirements. Tell your coordinator if seat belts are required for your group and we will confirm what is available for your date.",
        },
        {
          question: "How far will a school bus travel?",
          answer:
            "School buses are best suited to short local routes. For trips beyond an hour or two we recommend a mini bus, coach bus, or motor coach, where reclining seats and climate control make a real difference.",
        },
        {
          question: "Can parents or chaperones ride along?",
          answer:
            "Yes. Include chaperones and staff in your passenger count so the vehicle is sized correctly for everyone traveling.",
        },
        {
          question: "Is a school bus cheaper than a coach for a field trip?",
          answer:
            "For short local trips it is generally the most economical option, because it carries the most passengers per dollar. For longer trips the comfort difference usually outweighs the savings.",
        },
      ],
    },
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
    seo: {
      onBoard: [
        {
          title: "Perimeter seating",
          body:
            "Wraparound perimeter seating faces inward, so the group sits together and can talk across the cabin. This is the fundamental difference from a charter bus, where forward-facing rows point everyone at the seat back in front of them.",
        },
        {
          title: "Sound and lighting",
          body:
            "A premium sound system and LED accent lighting let the group set the mood for the ride. The vehicle is designed to function as a venue between stops, not only as transportation.",
        },
        {
          title: "Dance floor and bar area",
          body:
            "A dance floor and a bar area with coolers are on board. Guests bring what they plan to drink, and the coolers keep it cold through the night.",
        },
        {
          title: "Professional chauffeur",
          body:
            "A professional chauffeur drives for the entire booking, which is the practical reason most groups book a party bus rather than driving themselves between venues.",
        },
      ],
      occasions: [
        "Milestone birthdays and birthday parties",
        "Bachelor and bachelorette party transportation",
        "Wedding party and after-party transportation",
        "Prom, homecoming, and school formals",
        "Concert and music festival transportation",
        "Game day and tailgate party transportation",
        "Bar crawls and multi-venue nights out",
        "New Year's Eve and holiday celebrations",
        "Graduation parties and class celebrations",
        "Anniversary and engagement celebrations",
        "Corporate holiday parties and team nights",
        "Quinceanera and sweet sixteen transportation",
      ],
      coverage: [
        "Party bus rental is available nationwide and is typically quoted by total hours rather than distance.",
        "Multi-stop itineraries across several venues in one night are standard for this vehicle.",
        "Peak dates such as prom season, New Year's Eve, and major concert weekends book months in advance.",
        "Larger groups can book multiple vehicles traveling on the same itinerary so the party stays together.",
      ],
      alsoKnownAs: [
        "party bus rental",
        "limo bus rental",
        "party bus hire",
        "night out bus",
        "prom bus rental",
        "bachelorette party bus",
        "birthday party bus",
        "club bus rental",
      ],
      serviceLede:
        "A party bus rental serves the celebration side of Credence's work, where the ride itself is part of the event.",
      services: [
        {
          name: "Event Transportation",
          href: "/services/event-transportation",
          body:
            "Concerts, game days, and private parties, with the group traveling together, skipping event parking, and continuing the night on board between venues.",
        },
        {
          name: "Wedding & Group Celebrations",
          href: "/services/wedding-transportation",
          body:
            "Bachelor and bachelorette parties, wedding-party transport, and after-parties, with perimeter seating that keeps everyone together and facing each other.",
        },
        {
          name: "City Tours",
          href: "/services/city-tours",
          body:
            "Evening and multi-stop outings across a city, where the vehicle is a moving venue between stops rather than only transport.",
        },
      ],
      intro:
        "A party bus rental carries 14 to 40 passengers with perimeter seating, premium sound, and accent lighting, turning the ride itself into part of the night. Credence Charter Bus rents party buses nationwide for birthdays, bachelor and bachelorette parties, concerts and game days, proms, and formals, always with a professional chauffeur handling the road.",
      whyRent: [
        "Wraparound perimeter seating keeps the whole group facing each other and talking, unlike forward-facing rows on a standard charter bus.",
        "A premium sound system, LED accent lighting, dance floor, and bar area with coolers make the vehicle part of the celebration.",
        "A professional chauffeur drives, so nobody in the group has to plan around getting home safely at the end of the night.",
        "One vehicle keeps a group of 14 to 40 together between venues instead of splitting into rideshares that arrive separately.",
      ],
      bestFor: [
        {
          title: "Birthdays and celebrations",
          body:
            "Milestone birthdays and anniversaries use party buses to link dinner, a venue, and an after-party into one continuous evening with the group together throughout.",
        },
        {
          title: "Bachelor and bachelorette parties",
          body:
            "For multi-stop nights across several venues, a party bus provides transportation between each stop and a private space for the group in between.",
        },
        {
          title: "Concerts and game days",
          body:
            "Groups heading to a concert or sporting event use party buses to travel together, avoid event parking, and continue the night before and after the main event.",
        },
        {
          title: "Prom and formals",
          body:
            "Schools and parents book party buses for prom and formal transportation, keeping students together with a professional chauffeur for the full evening.",
        },
      ],
      choosing:
        "Choose a party bus when the ride is part of the occasion and the group is between 14 and 40. If you want a classic formal look for a smaller group, a stretch limousine seats up to 10. If you mainly need to move a large group between two points and the on-board experience matters less, a mini bus or coach bus will usually cost less.",
      planning: [
        "Give us the full itinerary with each venue and the times you expect to arrive and leave, since party bus bookings are usually quoted by total hours.",
        "Confirm the passenger count, as capacity ranges from 14 to 40 and perimeter seating fills differently than rows.",
        "Book well ahead for prom season, New Year's Eve, and major concert or game dates, which are the busiest nights of the year for these vehicles.",
        "Tell us about any venue with restricted late-night access or limited curb space so pickup points can be arranged in advance.",
      ],
      faqs: [
        {
          question: "How many people fit on a party bus?",
          answer:
            "Credence party buses carry 14 to 40 passengers depending on the vehicle. Tell us your group size and we will confirm which is available for your date.",
        },
        {
          question: "Does a party bus come with a driver?",
          answer:
            "Yes. Every party bus rental includes a professional chauffeur for the full booking.",
        },
        {
          question: "What is on board a party bus?",
          answer:
            "Our party buses include perimeter wraparound seating, a premium sound system, LED accent lighting, a dance floor, and a bar area with coolers.",
        },
        {
          question: "Can we make multiple stops on a party bus?",
          answer:
            "Yes. Multi-stop itineraries are common for these bookings. Provide each venue and the timing so the schedule and quote reflect the full night.",
        },
        {
          question: "How is a party bus rental priced?",
          answer:
            "Party bus rentals are typically quoted on total hours, along with mileage, date, and the itinerary. Send your plan for a free, itemized quote.",
        },
        {
          question: "How far in advance should I book a party bus?",
          answer:
            "Book early for prom season, holidays, and major event weekends. These dates fill first, and short-notice availability is limited.",
        },
        {
          question: "Do you serve my city?",
          answer:
            "Credence Charter Bus provides service in all 50 states. Send your pickup city, destination, and travel dates and we will confirm availability for your route.",
        },
        {
          question: "Can I book a one-way trip instead of a round trip?",
          answer:
            "Yes. One-way, round-trip, multi-stop, and multi-day itineraries are all available. Tell us which you need so the quote reflects the actual route rather than an assumed return.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Payment details are confirmed with your coordinator when you book, along with any deposit terms that apply to your reservation. These are included in writing with your itemized quote before you commit.",
        },
        {
          question: "What happens if our plans change after booking?",
          answer:
            "Contact your coordinator as soon as plans change. Adjustments to timing, stops, or passenger count are often possible depending on availability, and any change to the quote is confirmed with you in writing first.",
        },
        {
          question: "Can we bring our own drinks on a party bus?",
          answer:
            "The bar area includes coolers for what your group brings. Alcohol policies depend on the vehicle, your state, and the ages of everyone aboard, so confirm the details with your coordinator when booking.",
        },
        {
          question: "Is there an age requirement for renting a party bus?",
          answer:
            "Age and policy requirements vary by vehicle and location, and are confirmed with your coordinator at booking. For school events such as prom, arrangements are typically made through the school or a parent organizer.",
        },
        {
          question: "How many hours do we need to book?",
          answer:
            "Party bus rentals are usually quoted by total hours. Count from the first pickup to the final drop-off, including time parked at each venue, and we will build the quote around that schedule.",
        },
        {
          question: "Can the party bus wait at each venue?",
          answer:
            "Yes. The vehicle and chauffeur stay with your group for the booked hours, including time waiting between stops. Provide the itinerary so the schedule is quoted correctly.",
        },
      ],
    },
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
    seo: {
      onBoard: [
        {
          title: "Plush leather seating",
          body:
            "Plush leather seating for up to 10 passengers wraps the cabin, keeping a wedding party or small group together and facing each other on the way to the venue.",
        },
        {
          title: "Privacy partition",
          body:
            "A privacy partition separates the cabin from the driver, which is what makes the space feel private rather than like a car service.",
        },
        {
          title: "Beverage bar and lighting",
          body:
            "A beverage bar and ambient lighting are on board, so a toast on the way to the reception or between event stops is part of the ride.",
        },
        {
          title: "Professional chauffeur",
          body:
            "A professional chauffeur handles timing and the door at each stop. On a wedding day built around a fixed ceremony time, this is the part of the service that matters most.",
        },
      ],
      occasions: [
        "Weddings and wedding party transportation",
        "Engagement and anniversary celebrations",
        "Prom, homecoming, and school formals",
        "Milestone birthdays and special occasions",
        "VIP airport arrivals and departures",
        "Corporate executive and client transportation",
        "Theater, opera, and gala evenings",
        "Fine dining and date night transportation",
        "Quinceanera and sweet sixteen celebrations",
        "Funeral and memorial family transportation",
        "Casino and entertainment district outings",
        "Wine tours and small group excursions",
      ],
      coverage: [
        "Limousine service is available nationwide, quoted hourly or by itinerary depending on the occasion.",
        "Wedding bookings are built backward from the ceremony time so every stop lands on schedule.",
        "Saturday dates in wedding and prom season are reserved months ahead and are the first to sell out.",
        "Multiple vehicles can be scheduled together when the party is larger than a single limousine holds.",
      ],
      alsoKnownAs: [
        "limo rental",
        "stretch limousine rental",
        "wedding limo service",
        "limousine hire",
        "prom limo rental",
        "airport limo service",
        "chauffeur service",
        "luxury car service",
      ],
      serviceLede:
        "Limousine service covers the formal occasions in Credence's service range, for groups of up to 10.",
      services: [
        {
          name: "Wedding & Group Celebrations",
          href: "/services/wedding-transportation",
          body:
            "The couple and wedding party travel between the getting-ready location, ceremony, photography stops, and reception on a timeline built around the ceremony.",
        },
        {
          name: "Event Transportation",
          href: "/services/event-transportation",
          body:
            "Proms, formals, galas, and milestone evenings, with a chauffeur managing timing and the door at each venue.",
        },
        {
          name: "Airport Transfers",
          href: "/services/airport-transfers",
          body:
            "VIP arrivals where an executive or special guest is met at the terminal with luggage handled and the vehicle waiting.",
        },
      ],
      intro:
        "A stretch limousine rental carries up to 10 passengers in plush leather seating with a privacy partition, beverage bar, and ambient lighting. Credence Charter Bus provides limousine service nationwide for weddings, anniversaries, proms and formals, and VIP airport pickups, with a professional chauffeur at the door.",
      whyRent: [
        "The classic formal arrival for weddings and milestone occasions, where the vehicle is part of the photographs and the event itself.",
        "Plush leather seating, a privacy partition, beverage bar, and ambient lighting create a private space for the group between venues.",
        "A professional chauffeur manages timing and the door, which matters when a schedule is built around a ceremony or a formal start time.",
        "Right-sized for up to 10 passengers, so a wedding party or small group travels together without booking a full bus.",
      ],
      bestFor: [
        {
          title: "Weddings",
          body:
            "Limousines carry the couple and wedding party between the getting-ready location, ceremony, photography stops, and reception, on a timeline built around the ceremony.",
        },
        {
          title: "Anniversaries and date nights",
          body:
            "For milestone anniversaries and special evenings, a limousine provides a private, chauffeured ride between dinner and an event without anyone needing to drive or park.",
        },
        {
          title: "Prom and formals",
          body:
            "Students and parents book limousines for prom and formal nights, with a professional chauffeur and a fixed itinerary agreed in advance.",
        },
        {
          title: "VIP airport pickups",
          body:
            "For executives and special guests, limousine airport service provides a chauffeured arrival with luggage handled and the vehicle waiting at the terminal.",
        },
      ],
      choosing:
        "Choose a stretch limousine when the occasion calls for a formal arrival and the group is 10 or fewer. If your group is larger or you want an open social space with a dance floor and sound system, a party bus carries 14 to 40. For executive travel or airport runs with more luggage, a luxury SUV or executive sedan is often the more practical choice.",
      planning: [
        "Build the schedule around your fixed times first, such as the ceremony or event start, and work backward to the pickup time.",
        "Confirm the passenger count, since capacity is up to 10 and formal attire takes more room than everyday clothing.",
        "Share every address in order, including photography stops, which are easy to leave off an itinerary and affect timing.",
        "Book early for wedding season and prom, when limousines are reserved months ahead for Saturday dates.",
      ],
      faqs: [
        {
          question: "How many passengers fit in a stretch limousine?",
          answer:
            "Our stretch limousines seat up to 10 passengers. For larger groups, a party bus carries 14 to 40 and a mini bus seats 20 to 32.",
        },
        {
          question: "Is a chauffeur included with a limousine rental?",
          answer:
            "Yes. A professional chauffeur is included with every limousine booking.",
        },
        {
          question: "What is inside the limousine?",
          answer:
            "Our limousines include plush leather seating, a privacy partition, a beverage bar, and ambient lighting.",
        },
        {
          question: "Can we book a limousine for a wedding?",
          answer:
            "Yes. Weddings are the most common use for this vehicle. Share your ceremony and reception addresses and the full timeline so the schedule can be planned precisely.",
        },
        {
          question: "Can a limousine make multiple stops?",
          answer:
            "Yes. Multi-stop itineraries are standard for weddings and formal events. Provide each address and the times you need to arrive.",
        },
        {
          question: "How do I get a limousine quote?",
          answer:
            "Send your date, passenger count, pickup address, destinations, and the hours you need the vehicle for a free, itemized quote.",
        },
        {
          question: "Do you serve my city?",
          answer:
            "Credence Charter Bus provides service in all 50 states. Send your pickup city, destination, and travel dates and we will confirm availability for your route.",
        },
        {
          question: "Can I book a one-way trip instead of a round trip?",
          answer:
            "Yes. One-way, round-trip, multi-stop, and multi-day itineraries are all available. Tell us which you need so the quote reflects the actual route rather than an assumed return.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Payment details are confirmed with your coordinator when you book, along with any deposit terms that apply to your reservation. These are included in writing with your itemized quote before you commit.",
        },
        {
          question: "What happens if our plans change after booking?",
          answer:
            "Contact your coordinator as soon as plans change. Adjustments to timing, stops, or passenger count are often possible depending on availability, and any change to the quote is confirmed with you in writing first.",
        },
        {
          question: "How many hours should we book for a wedding?",
          answer:
            "Most wedding bookings run from the first pickup through the reception departure. Build the schedule backward from the ceremony time, include photography stops, and your coordinator will confirm the hours needed.",
        },
        {
          question: "Can the limousine wait between the ceremony and reception?",
          answer:
            "Yes. The vehicle and chauffeur stay with your booking for the hours reserved, including waiting time between stops.",
        },
        {
          question: "Is champagne or a beverage service included?",
          answer:
            "The limousine includes a beverage bar. What is stocked in it depends on the vehicle and your arrangements, so confirm with your coordinator when booking.",
        },
        {
          question: "How far in advance should we book a wedding limo?",
          answer:
            "Saturday dates in wedding season are reserved months ahead. Book as early as your date is confirmed, particularly for spring and summer weekends.",
        },
      ],
    },
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
    seo: {
      onBoard: [
        {
          title: "Premium leather seating",
          body:
            "Premium leather seating for up to 7 passengers gives executives, clients, and families a comfortable, private cabin without the footprint of a van or bus.",
        },
        {
          title: "Cargo space",
          body:
            "Generous cargo space is the main reason groups choose an SUV over a sedan. A party arriving with checked bags travels with its luggage in the same vehicle instead of splitting across two cars.",
        },
        {
          title: "Climate control and entertainment",
          body:
            "Climate control and an entertainment system keep the cabin comfortable on airport runs and longer city-to-city transfers.",
        },
        {
          title: "Professional chauffeur",
          body:
            "A professional chauffeur handles routing, parking, and luggage at the curb, so passengers step out and go straight to the terminal, meeting, or event.",
        },
      ],
      occasions: [
        "Airport transfers with checked luggage",
        "Executive and corporate client transportation",
        "Business meetings and multi-stop work days",
        "Family travel and vacation transfers",
        "Wedding guest and VIP transportation",
        "Concert, theater, and sporting event arrivals",
        "Golf outings and small group excursions",
        "Winery and brewery tours for small parties",
        "Conference and convention VIP transport",
        "Funeral and memorial family transportation",
        "Campus visits and student move-in",
        "Casino trips and entertainment outings",
      ],
      coverage: [
        "Luxury SUV service is available nationwide for point-to-point transfers, hourly bookings, and full-day charters.",
        "Airport pickups include meeting the passenger on arrival with luggage handled at the curb.",
        "Multiple SUVs can run together for a group larger than seven that still wants to avoid a bus.",
        "Recurring executive transportation is available on contract for regular routes and schedules.",
      ],
      alsoKnownAs: [
        "SUV service",
        "black car service",
        "executive SUV rental",
        "Suburban rental with driver",
        "luxury SUV transfer",
        "airport SUV service",
        "chauffeured SUV",
        "private car service",
      ],
      serviceLede:
        "Luxury SUV service covers Credence's small-party executive work, where luggage space matters as much as comfort.",
      services: [
        {
          name: "Airport Transfers",
          href: "/services/airport-transfers",
          body:
            "Small groups arriving with checked bags travel with their luggage in one vehicle, which is the main reason an SUV is chosen over a sedan.",
        },
        {
          name: "Corporate Travel",
          href: "/services/corporate-travel",
          body:
            "Executive and client transport between offices, meetings, and events, in a discreet vehicle with a professional chauffeur.",
        },
        {
          name: "Event Transportation",
          href: "/services/event-transportation",
          body:
            "Arrivals for guests and speakers at events and private functions, dropping directly at the entrance.",
        },
      ],
      intro:
        "A luxury SUV rental carries up to 7 passengers with generous cargo space, premium leather seating, and a professional chauffeur. Credence Charter Bus provides SUV service nationwide for executive transport, airport transfers with extra luggage, family travel, and client pickups where discretion and comfort matter more than capacity.",
      whyRent: [
        "Carries up to 7 passengers plus luggage, which suits airport runs where a sedan would not hold the bags.",
        "Premium leather seating, climate control, and an entertainment system provide a comfortable, private ride for executives and clients.",
        "Reaches airport curbside, downtown addresses, and parking structures that larger vehicles cannot enter.",
        "A professional chauffeur handles routing, parking, and luggage, so passengers step out and go straight to their meeting or terminal.",
      ],
      bestFor: [
        {
          title: "Executive transport",
          body:
            "Luxury SUVs are a standard choice for executive and client travel, offering a discreet, comfortable vehicle for moving between offices, meetings, and events.",
        },
        {
          title: "Airport transfers with luggage",
          body:
            "For small groups arriving with checked bags, the SUV's cargo space handles luggage that would not fit in a sedan, keeping passengers and bags in one vehicle.",
        },
        {
          title: "Family travel",
          body:
            "Families traveling together use luxury SUVs for airport runs, events, and day trips, with room for up to seven passengers and their belongings.",
        },
        {
          title: "Client pickups",
          body:
            "For meeting clients or guests on arrival, an SUV with a professional chauffeur provides a polished pickup with luggage handled at the curb.",
        },
      ],
      choosing:
        "Choose a luxury SUV when your group is up to 7 and you need cargo space alongside a premium cabin. For up to four passengers with light luggage, an executive sedan is the simpler and more economical option. If your group reaches 10 to 14, a Sprinter van provides a walk-in cabin with more seating and dedicated luggage space.",
      planning: [
        "Tell us your passenger count and the number and size of bags, since luggage is usually what decides between a sedan, an SUV, and a Sprinter van.",
        "For airport pickups, provide the airline, terminal, and flight arrival time so the chauffeur can meet you at the right point.",
        "Share the full schedule if the vehicle is needed for several stops in a day, so wait time is included in the quote.",
        "Mention any car-seat or accessibility requirements when requesting the quote.",
      ],
      faqs: [
        {
          question: "How many passengers fit in a luxury SUV?",
          answer:
            "Our luxury SUVs carry up to 7 passengers plus luggage. For larger groups, a Sprinter van carries 10 to 14.",
        },
        {
          question: "Is a chauffeur included with an SUV rental?",
          answer:
            "Yes. Every luxury SUV booking includes a professional chauffeur. We do not offer self-drive rentals.",
        },
        {
          question: "Is there room for luggage in an SUV?",
          answer:
            "Yes. Luxury SUVs offer generous cargo space, which is the main reason groups choose one over a sedan for airport transfers. Tell us your bag count so we can confirm the fit.",
        },
        {
          question: "Can an SUV pick us up from the airport?",
          answer:
            "Yes. Airport transfers are a common use for this vehicle. Include your airline, terminal, and arrival time with your quote request.",
        },
        {
          question: "SUV or executive sedan, which should I book?",
          answer:
            "Choose a sedan for up to four passengers with light luggage, and an SUV when you have up to seven passengers or need the additional cargo space.",
        },
        {
          question: "How is an SUV transfer priced?",
          answer:
            "Pricing depends on the date, distance, number of stops, and total chauffeur hours. Send your trip details for a free, itemized quote.",
        },
        {
          question: "Do you serve my city?",
          answer:
            "Credence Charter Bus provides service in all 50 states. Send your pickup city, destination, and travel dates and we will confirm availability for your route.",
        },
        {
          question: "Can I book a one-way trip instead of a round trip?",
          answer:
            "Yes. One-way, round-trip, multi-stop, and multi-day itineraries are all available. Tell us which you need so the quote reflects the actual route rather than an assumed return.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Payment details are confirmed with your coordinator when you book, along with any deposit terms that apply to your reservation. These are included in writing with your itemized quote before you commit.",
        },
        {
          question: "What happens if our plans change after booking?",
          answer:
            "Contact your coordinator as soon as plans change. Adjustments to timing, stops, or passenger count are often possible depending on availability, and any change to the quote is confirmed with you in writing first.",
        },
        {
          question: "How many bags fit in a luxury SUV?",
          answer:
            "Cargo space depends on how many of the seven seats are filled. A full passenger load with large checked bags may need a second vehicle or a Sprinter van, so give us both counts.",
        },
        {
          question: "Do you track flights for SUV airport pickups?",
          answer:
            "Provide the airline and flight number with your booking so arrival timing can be tracked and the chauffeur meets you at the right time.",
        },
        {
          question: "Can we book an SUV by the hour?",
          answer:
            "Yes. Hourly bookings are available for multi-stop business days and events, alongside point-to-point transfers.",
        },
        {
          question: "Do you provide child car seats in SUVs?",
          answer:
            "Tell your coordinator about car seat needs when requesting your quote and we will confirm what can be arranged for your trip.",
        },
      ],
    },
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
    seo: {
      onBoard: [
        {
          title: "Premium leather interior",
          body:
            "A premium leather interior seats up to 4 passengers in a quiet cabin, suitable for a traveler who wants to arrive composed rather than after driving and parking themselves.",
        },
        {
          title: "Meet-and-greet service",
          body:
            "Meet-and-greet service means the chauffeur meets the traveler on arrival rather than waiting at a distant lot. For a visiting executive or guest unfamiliar with the airport, this is the difference between a smooth arrival and a phone call from the curb.",
        },
        {
          title: "Climate control and entertainment",
          body:
            "Climate control and an entertainment system are standard, keeping the cabin comfortable across a transfer or a full day of meetings.",
        },
        {
          title: "Professional chauffeur",
          body:
            "A professional chauffeur manages traffic, timing, and parking, which matters most when a flight or a meeting time is fixed and cannot move.",
        },
      ],
      occasions: [
        "Airport pickups and departures",
        "Corporate and business meeting transportation",
        "Executive and VIP guest transportation",
        "Hotel and conference transfers",
        "Fine dining and evening event transportation",
        "Theater, concert, and sporting event arrivals",
        "Wedding transportation for the couple or parents",
        "Funeral and memorial transportation",
        "Medical appointment and hospital transfers",
        "Campus tours and admissions visits",
        "Anniversary and date night transportation",
        "Point-to-point city and intercity transfers",
      ],
      coverage: [
        "Executive sedan service is available nationwide for point-to-point transfers and hourly bookings.",
        "Airport transfers include flight monitoring against the arrival time you provide with the booking.",
        "Multiple sedans can be scheduled for a group traveling together that prefers individual vehicles.",
        "Recurring corporate transportation is available on contract for regular routes and standing schedules.",
      ],
      alsoKnownAs: [
        "executive sedan service",
        "black car service",
        "airport car service",
        "corporate car service",
        "chauffeur service",
        "private car hire",
        "town car service",
        "business sedan transfer",
      ],
      serviceLede:
        "Executive sedan service covers Credence's point-to-point work for up to four passengers.",
      services: [
        {
          name: "Airport Transfers",
          href: "/services/airport-transfers",
          body:
            "Individual travelers and pairs are met on arrival with meet-and-greet service, then transferred directly to the hotel or office.",
        },
        {
          name: "Corporate Travel",
          href: "/services/corporate-travel",
          body:
            "Executives moving between offices and meetings across a day, with a quiet, private space to prepare or take calls between stops.",
        },
        {
          name: "Event Transportation",
          href: "/services/event-transportation",
          body:
            "Dinners, theater, and formal evenings, arriving at the door without anyone needing to park or drive home.",
        },
      ],
      intro:
        "An executive sedan carries up to 4 passengers in a premium leather interior with a professional chauffeur. Credence Charter Bus provides sedan service nationwide for airport pickups, business meetings, evening events, and individual VIP travel where the priority is a punctual, polished point-to-point ride.",
      whyRent: [
        "The most economical chauffeured option for up to four passengers, sized to the trip rather than to a group.",
        "Premium leather interior, climate control, and an entertainment system for a comfortable ride between meetings or to an event.",
        "Meet-and-greet service at the airport means a traveler is met on arrival rather than searching for a pickup point.",
        "A professional chauffeur handles parking, timing, and traffic, which matters most when a meeting or flight is fixed.",
      ],
      bestFor: [
        {
          title: "Airport pickups",
          body:
            "Executive sedans are a common vehicle for individual travelers and pairs, with meet-and-greet service and a direct transfer from the terminal to the hotel or office.",
        },
        {
          title: "Business meetings",
          body:
            "For executives moving between offices and meetings across a day, a sedan provides a quiet, private space to prepare or take calls between stops.",
        },
        {
          title: "Evening events",
          body:
            "Couples and small parties use sedans for dinners, theater, and formal events, avoiding parking and arriving directly at the door.",
        },
        {
          title: "Individual VIP travel",
          body:
            "For guests, speakers, and visiting executives, sedan service provides a discreet chauffeured arrival with a driver assigned to the schedule.",
        },
      ],
      choosing:
        "Choose an executive sedan for up to four passengers with light luggage. If you have more bags or up to seven passengers, a luxury SUV is the better fit. For groups of 10 to 14, a Sprinter van keeps everyone together in one vehicle with dedicated luggage space.",
      planning: [
        "Confirm the passenger count and luggage, since four passengers with large suitcases usually need an SUV rather than a sedan.",
        "For airport pickups, provide the airline, flight number, and arrival time so meet-and-greet can be arranged.",
        "Share the full day's schedule for multi-stop business travel so chauffeur hours are quoted accurately.",
        "Give exact building addresses and entrances for downtown pickups where curb access is limited.",
      ],
      faqs: [
        {
          question: "How many passengers fit in an executive sedan?",
          answer:
            "Our executive sedans carry up to 4 passengers. For more passengers or additional luggage, a luxury SUV seats up to seven.",
        },
        {
          question: "Does a sedan booking include a chauffeur?",
          answer:
            "Yes. A professional chauffeur is included with every executive sedan booking.",
        },
        {
          question: "Do you offer airport meet-and-greet?",
          answer:
            "Yes. Meet-and-greet service is available with our sedans. Provide your airline, flight number, and arrival time when booking.",
        },
        {
          question: "How much luggage fits in a sedan?",
          answer:
            "A sedan comfortably handles luggage for up to four passengers traveling light. If you are checking multiple large suitcases, we recommend a luxury SUV.",
        },
        {
          question: "Can I book a sedan for several stops in one day?",
          answer:
            "Yes. Hourly and multi-stop bookings are available for business travel. Send the day's schedule so chauffeur time is quoted correctly.",
        },
        {
          question: "How do I book an executive sedan?",
          answer:
            "Send your date, pickup address, destination, passenger count, and timing for a free, itemized quote and availability confirmation.",
        },
        {
          question: "Do you serve my city?",
          answer:
            "Credence Charter Bus provides service in all 50 states. Send your pickup city, destination, and travel dates and we will confirm availability for your route.",
        },
        {
          question: "Can I book a one-way trip instead of a round trip?",
          answer:
            "Yes. One-way, round-trip, multi-stop, and multi-day itineraries are all available. Tell us which you need so the quote reflects the actual route rather than an assumed return.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Payment details are confirmed with your coordinator when you book, along with any deposit terms that apply to your reservation. These are included in writing with your itemized quote before you commit.",
        },
        {
          question: "What happens if our plans change after booking?",
          answer:
            "Contact your coordinator as soon as plans change. Adjustments to timing, stops, or passenger count are often possible depending on availability, and any change to the quote is confirmed with you in writing first.",
        },
        {
          question: "Where does the chauffeur meet me at the airport?",
          answer:
            "Meet-and-greet service is available, where the chauffeur meets you inside the terminal. Provide your airline, flight number, and arrival time so the pickup point is arranged in advance.",
        },
        {
          question: "Can I book a sedan by the hour?",
          answer:
            "Yes. Hourly bookings suit business days with several meetings, and point-to-point transfers are available for single trips.",
        },
        {
          question: "What if my flight is delayed?",
          answer:
            "Provide your flight number with the booking so the arrival can be tracked. Wait-time terms are confirmed with your coordinator in advance.",
        },
        {
          question: "Is a sedan or an SUV better for airport pickup?",
          answer:
            "Choose a sedan for up to four passengers traveling light. If you have several large checked bags or up to seven passengers, the SUV's cargo space is the better fit.",
        },
      ],
    },
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
