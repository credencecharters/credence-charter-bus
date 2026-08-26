import {
  coreEntries,
  locationEntriesForShard,
  locationShardCount,
  urlsetXml,
  type SitemapEntry,
} from "@/lib/sitemap"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params

  let entries: SitemapEntry[] | null = null
  if (name === "core.xml") {
    entries = coreEntries()
  } else {
    const match = name.match(/^locations-(\d+)\.xml$/)
    if (match) {
      const shard = Number(match[1])
      if (shard < locationShardCount()) {
        entries = locationEntriesForShard(shard)
      }
    }
  }

  if (!entries) {
    return new Response("Not found", { status: 404 })
  }
  return new Response(urlsetXml(entries), {
    headers: { "Content-Type": "application/xml" },
  })
}
