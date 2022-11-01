import { tokens } from "../src/metadata";
import { toTokenValues } from "./toTokenValues";
import { toStyleSheet } from "./toStylesheet";

(async () => {
  await Promise.all([
    toTokenValues(tokens),
    toStyleSheet(tokens)
  ])
})();