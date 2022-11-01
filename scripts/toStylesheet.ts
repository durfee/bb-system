import fs from "fs";
import path from "path";

import type { PrimitiveGroup } from "../src/types";
import { Tokens } from "../src/metadata";

const cssOutputDir = path.join(__dirname, '../dist/css');
const cssOutputPath = path.join(cssOutputDir, 'styles.css');


export function getCustomProperties(tokenGroup: PrimitiveGroup) {
  return Object.entries(tokenGroup)
    .map(([token, { value }]) => `--bb-${token}:${value};`)
    .join('');
}

// We need a unique colour funciton because we also want to export the tokens 
// as a js object for react native. For css custom props though, we need to
// recursively create all the css tokens
export function getColorProperties(colors: PrimitiveGroup) {
  return Object.entries(colors)
    .map(([token, subTokens]) => {
      return Object.entries(subTokens).map(([key, value]) => `--bb-${token}-${key}:${value};`).join('')
    })
    .join('');
}

export function getStaticCustomProperties(tokens: Tokens) {
  return Object.entries(tokens)
    .map(([metagroup, tokenGroup]) => metagroup === 'colors' ? getColorProperties(tokenGroup) : getCustomProperties(tokenGroup))
    .join('');
}

export async function toStyleSheet(tokens: Tokens) {
  if (!fs.existsSync(cssOutputDir)) {
    await fs.promises.mkdir(cssOutputDir, { recursive: true });
  }

  const styles = `:root{color-scheme:light; ${getStaticCustomProperties(tokens)}}`;

  await fs.promises.writeFile(cssOutputPath, styles);
}
