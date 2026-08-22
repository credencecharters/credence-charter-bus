import { networkSummary } from "@/data/network"

const stats = [
  { value: networkSummary.company, label: "Company-owned operations hubs" },
  { value: networkSummary.partner, label: "Partner operations hubs" },
  { value: networkSummary.hubs, label: "Total hubs nationwide" },
  { value: networkSummary.states - 1, label: "States covered, plus Washington DC" },
]

function NetworkSummary() {
  return (
    <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 rounded-xl border border-border bg-card px-6 py-8 text-center shadow-sm md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 block text-sm text-muted-foreground">
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  )
}

export { NetworkSummary }
