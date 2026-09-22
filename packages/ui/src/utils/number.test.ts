import { describe, expect, it } from 'bun:test';
import { clamp, litSegments, snapToStep } from './number';

describe('clamp', () => {
  it('keeps values inside the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(11, 0, 10)).toBe(10);
  });
});

describe('snapToStep', () => {
  it('rounds to the nearest step', () => {
    expect(snapToStep(7, 5)).toBe(5);
    expect(snapToStep(8, 5)).toBe(10);
  });

  it('avoids floating point noise', () => {
    expect(snapToStep(0.1 + 0.2, 0.1)).toBe(0.3);
  });

  it('snaps relative to a base', () => {
    expect(snapToStep(4, 2, 1)).toBe(5);
  });
});

describe('litSegments', () => {
  it('maps a value to lit segments', () => {
    expect(litSegments(50, 0, 100, 10)).toBe(5);
    expect(litSegments(0, 0, 100, 10)).toBe(0);
    expect(litSegments(120, 0, 100, 10)).toBe(10);
  });

  it('handles an empty range', () => {
    expect(litSegments(5, 10, 10, 10)).toBe(0);
  });
});
