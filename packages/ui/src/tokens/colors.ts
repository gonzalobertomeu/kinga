export const colors = {
  bg: '#0b0d10',
  fg: '#f5f6f7',
  surface: '#14171b',
  primary: '#5b8cff',
  primaryFg: '#0b0d10',
  border: '#2a2e35',
  muted: '#8a9099',
  success: '#22c55e',
  successFg: '#0b0d10',
  warning: '#eab308',
  warningFg: '#0b0d10',
  danger: '#ef4444',
  dangerFg: '#f5f6f7',
} as const;

export type ColorToken = keyof typeof colors;
