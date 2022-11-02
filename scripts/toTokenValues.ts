import fs from "fs";
import path from "path";

import type { Entry } from "../src/types";
import { Tokens } from "../src/metadata";

function createExport(
  entry: [string, { [key: string]: unknown }] | Entry<Tokens>
) {
  return `export const ${entry[0]} = ${JSON.stringify(entry[1])} as const;`
}

const outputDir = path.join(__dirname, "../build");
const outputFile = path.join(outputDir, 'index.ts');

export async function toTokenValues(tokens: Tokens) {
  if (!fs.existsSync(outputDir)) {
    await fs.promises.mkdir(outputDir);
  }

  const tokenEntries = Object.entries(tokens).map(
    (entry): Entry<Tokens> => {
      const [tokenGroupName, tokenGroup] = entry as Entry<Tokens>;
      return [tokenGroupName, tokenGroup]
    }
  );

  await fs.promises.writeFile(
    outputFile,
    [
      `export * from "../src/index";`,
      tokenEntries.map(createExport),
      createExport(['tokens', Object.fromEntries(tokenEntries)])
    ]
      .flat()
      .join("\n")
  );
}
