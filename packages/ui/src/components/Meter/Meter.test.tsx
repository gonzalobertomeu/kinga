import { describe, expect, it } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { Meter } from './Meter';
import { Progress } from './Progress';

describe('Meter', () => {
  it('exposes meter semantics', () => {
    const html = renderToStaticMarkup(<Meter aria-label="Level" value={30} />);
    expect(html).toContain('role="meter"');
    expect(html).toContain('aria-valuenow="30"');
  });
});

describe('Progress', () => {
  it('omits aria-valuenow when indeterminate', () => {
    const html = renderToStaticMarkup(<Progress aria-label="Loading" />);
    expect(html).toContain('role="progressbar"');
    expect(html).not.toContain('aria-valuenow');
  });
});
