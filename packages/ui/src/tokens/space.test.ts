import { describe, expect, it } from 'bun:test';
import { readFileSync } from 'node:fs';
import { space } from './space';

describe('space', () => {
  it('matches the CSS custom properties in theme.css', () => {
    const css = readFileSync(new URL('./theme.css', import.meta.url), 'utf8');
    for (const [step, value] of Object.entries(space)) {
      expect(css).toContain(`--kinga-space-${step}: ${value};`);
    }
  });
});
