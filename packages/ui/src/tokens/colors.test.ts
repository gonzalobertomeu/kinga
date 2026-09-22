import { describe, expect, it } from 'bun:test';
import { colors } from './colors';

describe('colors', () => {
  it('exposes the core tokens', () => {
    expect(colors.primary).toBeString();
    expect(Object.keys(colors)).toContain('bg');
  });
});
