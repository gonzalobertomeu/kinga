export const colors = {
  bg: '#0b0d10',
  fg: '#f5f6f7',
  primary: '#5b8cff',
  primaryFg: '#0b0d10',
  border: '#2a2e35',
} as const;

export type ColorToken = keyof typeof colors;
