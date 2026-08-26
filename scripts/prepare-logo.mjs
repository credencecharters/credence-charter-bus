import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import sharp from "sharp"

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, "..")
const sourceFile = resolve(root, "public/brand/credence-mark.svg")
const iconFile = resolve(root, "src/app/icon.png")
const faviconFile = resolve(root, "src/app/favicon.ico")
const appleIconFile = resolve(root, "src/app/apple-icon.png")
const logoSquareFile = resolve(root, "public/brand/logo-square.png")

const ICON_NAVY = [27, 42, 74]
/** Google only accepts a search-results favicon whose edge is a multiple of 48px. */
const ICON_SIZE = 480
const FAVICON_SIZES = [16, 32, 48]
const APPLE_ICON_SIZE = 180
const LOGO_SQUARE_SIZE = 512
const ICON_INSET = 0.05
const RENDER_DENSITY = 150

/**
 * Navy, not the mark's own transparency: the artwork is white-and-navy line art
 * that disappears against a browser's light tab strip.
 */
async function squareIcon(mark, size) {
  const inner = Math.round(size * (1 - ICON_INSET * 2))
  const fitted = await sharp(mark)
    .resize(inner, inner, {
      fit: "inside",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer({ resolveWithObject: true })
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: {
        r: ICON_NAVY[0],
        g: ICON_NAVY[1],
        b: ICON_NAVY[2],
        alpha: 1,
      },
    },
  })
    .composite([
      {
        input: fitted.data,
        left: Math.round((size - fitted.info.width) / 2),
        top: Math.round((size - fitted.info.height) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer()
}

/** Hand-built ICO container: sharp has no .ico encoder, and PNG-in-ICO is universally read. */
function icoFile(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)
  const directory = Buffer.alloc(16 * images.length)
  let offset = header.length + directory.length
  images.forEach(({ size, data }, index) => {
    const entry = index * 16
    directory.writeUInt8(size, entry)
    directory.writeUInt8(size, entry + 1)
    directory.writeUInt16LE(1, entry + 4)
    directory.writeUInt16LE(32, entry + 6)
    directory.writeUInt32LE(data.length, entry + 8)
    directory.writeUInt32LE(offset, entry + 12)
    offset += data.length
  })
  return Buffer.concat([header, directory, ...images.map((image) => image.data)])
}

const mark = await sharp(sourceFile, { density: RENDER_DENSITY })
  .trim()
  .png({ compressionLevel: 9 })
  .toBuffer()

mkdirSync(dirname(logoSquareFile), { recursive: true })
writeFileSync(iconFile, await squareIcon(mark, ICON_SIZE))
writeFileSync(appleIconFile, await squareIcon(mark, APPLE_ICON_SIZE))
writeFileSync(
  faviconFile,
  icoFile(
    await Promise.all(
      FAVICON_SIZES.map(async (size) => ({
        size,
        data: await squareIcon(mark, size),
      }))
    )
  )
)
/**
 * Next's icon/apple-icon file convention serves at a content-hashed route
 * (/icon?<hash>), not a stable URL, so it can't be referenced from JSON-LD.
 * This static copy in public/ is what src/lib/jsonld.tsx's `logo` field uses.
 */
writeFileSync(logoSquareFile, await squareIcon(mark, LOGO_SQUARE_SIZE))

const { width, height } = await sharp(mark).metadata()
console.log(`mark    ${width}x${height} (trimmed from ${sourceFile})`)
console.log(`icon    ${ICON_SIZE}px  src/app/icon.png`)
console.log(`favicon ${FAVICON_SIZES.join("/")}px  src/app/favicon.ico`)
console.log(`apple   ${APPLE_ICON_SIZE}px  src/app/apple-icon.png`)
console.log(`square  ${LOGO_SQUARE_SIZE}px  public/brand/logo-square.png`)
