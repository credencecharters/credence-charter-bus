import { type FleetCategory, vehicleTitle } from "@/data/fleet"
import { Card, CardContent } from "@/components/ui/card"

function FleetSpecs({ category }: { category: FleetCategory }) {
  const rows = [
    { label: "Vehicle type", value: vehicleTitle(category) },
    { label: "Passenger capacity", value: category.capacity },
    { label: "Driver", value: "Professional driver included" },
    { label: "Service area", value: "All 50 states" },
  ]

  return (
    <Card>
      <CardContent>
        <h2 className="font-heading text-xl font-bold text-primary">
          Specifications
        </h2>
        <dl className="mt-4 divide-y divide-border">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3"
            >
              <dt className="text-muted-foreground">{row.label}</dt>
              <dd className="font-semibold text-primary">{row.value}</dd>
            </div>
          ))}
          <div className="py-3">
            <dt className="text-muted-foreground">Features</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {category.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-md bg-secondary px-3 py-1 text-sm font-medium text-primary"
                >
                  {feature}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

export { FleetSpecs }
