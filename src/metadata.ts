import { colors } from "./token-groups/colors";
import { PrimitiveBase } from "./types";

export function createTokens<T extends PrimitiveBase>(tokens: T) {
  return tokens;
}

export const tokens = createTokens({ colors });

export type Tokens = typeof tokens;