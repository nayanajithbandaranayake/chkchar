export function caps(phrase: string): {
  status: boolean;
  count: number;
  found: string[];
};
export function numbers(phrase: string): {
  status: boolean;
  count: number;
  found: string[];
};
export function symbols(phrase: string): {
  status: boolean;
  count: number;
  found: string[];
};
export function isEnglish(phrase: string): boolean;
export function allNums(phrase: string): boolean;
export function allSymbols(phrase: string): boolean;
export function allCaps(phrase: string): boolean;
export function fullCount(phrase: string): {
  caps: number;
  numbers: number;
  symbols: number;
};
export function sliceToChunks(phrase: string, number: number): string[];
