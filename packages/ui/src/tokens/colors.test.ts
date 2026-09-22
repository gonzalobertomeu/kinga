import { describe, expect, it } from 'bun:test';
import { readFileSync } from 'node:fs';
import { colors, darkColors, lightColors, themes } from './colors';

const toCssVar = (token: string) =>
  `--kinga-${token.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;

describe('colors', () => {
  it('exposes the core tokens', () => {
    expect(colors.primary).toBeString();
    expect(Object.keys(colors)).toContain('bg');
  });

  it('defines the same tokens in every theme', () => {
    expect(Object.keys(darkColors).sort()).toEqual(Object.keys(lightColors).sort());
  });

  it('matches the CSS custom properties in theme.css', () => {
    const css = readFileSync(new URL('./theme.css', import.meta.url), 'utf8');
    for (const [name, palette] of Object.entries(themes)) {
      const block =
        css.match(new RegExp(`\\[data-kinga-theme="${name}"\\] \\{([^}]*)\\}`))?.[1] ?? '';
      for (const [token, value] of Object.entries(palette)) {
        expect(block).toContain(`${toCssVar(token)}: ${value};`);
      }
    }
  });
});
