import { describe, expect, it } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { Knob } from './Knob';

describe('Knob', () => {
  it('exposes slider semantics with the current value', () => {
    const html = renderToStaticMarkup(<Knob label="Cutoff" defaultValue={40} min={0} max={80} />);
    expect(html).toContain('role="slider"');
    expect(html).toContain('aria-valuenow="40"');
    expect(html).toContain('aria-valuemax="80"');
    expect(html).toContain('aria-labelledby=');
  });

  it('clamps the default value into range', () => {
    const html = renderToStaticMarkup(<Knob aria-label="Gain" defaultValue={500} max={100} />);
    expect(html).toContain('aria-valuenow="100"');
  });

  it('is removed from the tab order when disabled', () => {
    const html = renderToStaticMarkup(<Knob aria-label="Gain" disabled />);
    expect(html).toContain('tabindex="-1"');
    expect(html).toContain('aria-disabled="true"');
  });
});
