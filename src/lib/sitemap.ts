import { siteConfig } from "@/config/site"
import { allBlogPostsSorted, blogStates } from "@/data/blogs"
import { fleetCategories } from "@/data/fleet"
import { cities, isIndexableCity, states } from "@/data/locations"
import { services } from "@/data/services"

export const LOCATION_URLS_PER_SITEMAP = 50000

/**
 * Last date the template-driven pages (core routes, state and city pages) changed
 * enough to be worth a recrawl. Bump by hand when they do. A build timestamp here
 * would move every URL on every deploy, which is what makes Google discard lastmod.
 */
export const CONTENT_REVISION = "2026-08-23"

export type SitemapEntry = { path: string; lastmod: string }

const indexableCities = cities.filter(isIndexableCity)

function revised(path: string): SitemapEntry {
  return { path, lastmod: CONTENT_REVISION }
}

export function coreEntries(): SitemapEntry[] {
  return [
    ...[
      "/",
      "/fleet",
      ...fleetCategories.map((category) => `/fleet/${category.slug}`),
      "/services",
      ...services.map((service) => `/services/${service.slug}`),
      "/about",
      "/how-to-book",
      "/drivers",
      "/affiliates",
      "/contact",
      "/faq",
      "/reviews",
      "/quote",
      "/privacy",
      "/terms",
      "/refund",
      "/blogs",
      ...blogStates().map((state) => `/blogs/state/${state.slug}`),
    ].map(revised),
    ...allBlogPostsSorted().map((post) => ({
      path: `/blogs/${post.slug}`,
      lastmod: post.updated ?? post.date,
    })),
    ...["/locations", ...states.map((state) => `/locations/${state.slug}`)].map(
      revised
    ),
  ]
}

export function locationShardCount() {
  return Math.max(1, Math.ceil(indexableCities.length / LOCATION_URLS_PER_SITEMAP))
}

export function locationEntriesForShard(shard: number): SitemapEntry[] {
  const start = shard * LOCATION_URLS_PER_SITEMAP
  return indexableCities
    .slice(start, start + LOCATION_URLS_PER_SITEMAP)
    .map((city) => revised(`/locations/${city.stateSlug}/${city.slug}`))
}

export function urlsetXml(entries: SitemapEntry[]) {
  const urls = entries
    .map(
      ({ path, lastmod }) =>
        `  <url><loc>${siteConfig.url}${path}</loc><lastmod>${lastmod}</lastmod></url>`
    )
    .join("\n")
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export function sitemapIndexXml() {
  const children: SitemapEntry[] = [
    {
      path: "/sitemaps/core.xml",
      lastmod: coreEntries().reduce(
        (latest, entry) => (entry.lastmod > latest ? entry.lastmod : latest),
        CONTENT_REVISION
      ),
    },
    ...Array.from({ length: locationShardCount() }, (_, shard) =>
      revised(`/sitemaps/locations-${shard}.xml`)
    ),
  ]
  const entries = children
    .map(
      ({ path, lastmod }) =>
        `  <sitemap><loc>${siteConfig.url}${path}</loc><lastmod>${lastmod}</lastmod></sitemap>`
    )
    .join("\n")
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`
}
