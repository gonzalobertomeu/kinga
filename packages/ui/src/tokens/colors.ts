// Warm, low-chroma neutrals (Braun housings) with a single signal color.
// Color carries meaning only: orange = primary action, status colors = state.
export const lightColors = {
  bg: '#f2f1ed',
  fg: '#1a1a1a',
  surface: '#fbfaf7',
  control: '#e3e1db',
  sunken: '#d9d7d0',
  raised: '#f7f6f2',
  primary: '#ff5a1f',
  primaryFg: '#1a1a1a',
  border: '#d4d2cb',
  muted: '#6e6c66',
  success: '#2f7a2a',
  successFg: '#ffffff',
  warning: '#f2b705',
  warningFg: '#1a1a1a',
  danger: '#d6352b',
  dangerFg: '#ffffff',
} as const;

export type ColorToken = keyof typeof lightColors;

export const darkColors = {
  bg: '#161615',
  fg: '#ecebe6',
  surface: '#1f1f1d',
  control: '#2e2e2b',
  sunken: '#232321',
  raised: '#3d3d39',
  primary: '#ff5a1f',
  primaryFg: '#161615',
  border: '#3a3a36',
  muted: '#9a988f',
  success: '#4caf45',
  successFg: '#161615',
  warning: '#f2b705',
  warningFg: '#161615',
  danger: '#ef4b3f',
  dangerFg: '#161615',
} as const satisfies Record<ColorToken, string>;

export const themes = { light: lightColors, dark: darkColors } as const;

export type ThemeName = keyof typeof themes;

/** Default (light) palette. */
export const colors = lightColors;
