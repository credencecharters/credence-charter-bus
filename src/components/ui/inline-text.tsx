import Link from "next/link"

const inlineLinkPattern = /\[([^\]]+)\]\((\/[^)]*)\)/g

function InlineText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = []
  let cursor = 0
  for (const match of text.matchAll(inlineLinkPattern)) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index))
    nodes.push(
      <Link
        key={match.index}
        href={match[2]}
        className="font-medium text-primary underline underline-offset-4 hover:text-accent-deep"
      >
        {match[1]}
      </Link>
    )
    cursor = match.index + match[0].length
  }
  if (cursor < text.length) nodes.push(text.slice(cursor))
  return <>{nodes}</>
}

export { InlineText }
