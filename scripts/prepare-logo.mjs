import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import sharp from "sharp"

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, "..")
const sourceFile = resolve(root, "public/brand/credence-mark.svg")
const iconFile = resolve(root, "src/app/icon.png")
const appleIconFile = resolve(root, "src/app/apple-icon.png")
const logoSquareFile = resolve(root, "public/brand/logo-square.png")

const ICON_NAVY = [27, 42, 74]
const ICON_SIZE = 512
const APPLE_ICON_SIZE = 180
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

const mark = await sharp(sourceFile, { density: RENDER_DENSITY })
  .trim()
  .png({ compressionLevel: 9 })
  .toBuffer()

const squareLogo = await squareIcon(mark, ICON_SIZE)

mkdirSync(dirname(logoSquareFile), { recursive: true })
writeFileSync(iconFile, squareLogo)
writeFileSync(appleIconFile, await squareIcon(mark, APPLE_ICON_SIZE))
/**
 * Next's icon/apple-icon file convention serves at a content-hashed route
 * (/icon?<hash>), not a stable URL, so it can't be referenced from JSON-LD.
 * This static copy in public/ is what src/lib/jsonld.tsx's `logo` field uses.
 */
writeFileSync(logoSquareFile, squareLogo)

const { width, height } = await sharp(mark).metadata()
console.log(`mark    ${width}x${height} (trimmed from ${sourceFile})`)
console.log(`icon    ${ICON_SIZE}px  src/app/icon.png`)
console.log(`apple   ${APPLE_ICON_SIZE}px  src/app/apple-icon.png`)
console.log(`square  ${ICON_SIZE}px  public/brand/logo-square.png`)
