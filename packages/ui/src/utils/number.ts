export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** Rounds to the nearest `step` from `base`, without float noise (0.1 + 0.2). */
export function snapToStep(value: number, step: number, base = 0): number {
  if (step <= 0) return value;
  const decimals = Math.max(decimalPlaces(step), decimalPlaces(base));
  const snapped = Math.round((value - base) / step) * step + base;
  return Number(snapped.toFixed(decimals));
}

/** How many of `segments` are lit for `value` within [min, max]. */
export function litSegments(value: number, min: number, max: number, segments: number): number {
  if (max <= min) return 0;
  return Math.round(clamp((value - min) / (max - min), 0, 1) * segments);
}

function decimalPlaces(n: number): number {
  return (String(n).split('.')[1] ?? '').length;
}
