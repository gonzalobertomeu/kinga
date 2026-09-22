import { describe, expect, it } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { SegmentedControl } from './SegmentedControl';

const options = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B' },
];

describe('SegmentedControl', () => {
  it('renders one radio per option sharing a name', () => {
    const html = renderToStaticMarkup(
      <SegmentedControl aria-label="Mode" name="mode" options={options} />,
    );
    expect(html.match(/type="radio"/g)).toHaveLength(2);
    expect(html.match(/name="mode"/g)).toHaveLength(2);
  });

  it('checks the controlled value', () => {
    const html = renderToStaticMarkup(
      <SegmentedControl aria-label="Mode" options={options} value="b" onChange={() => {}} />,
    );
    expect(html).toContain('checked="" value="b"');
    expect(html).not.toContain('checked="" value="a"');
  });
});
