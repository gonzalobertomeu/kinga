import { describe, expect, it } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { Input } from '../Input';
import { Field } from './Field';

describe('Field', () => {
  it('wires label, id and hint into the control', () => {
    const html = renderToStaticMarkup(
      <Field id="email" label="Email" hint="Sign-in only">
        <Input />
      </Field>,
    );
    expect(html).toContain('for="email"');
    expect(html).toContain('id="email"');
    expect(html).toContain('aria-describedby="email-message"');
    expect(html).toContain('id="email-message"');
    expect(html).not.toContain('aria-invalid');
  });

  it('marks the control invalid and required when there is an error', () => {
    const html = renderToStaticMarkup(
      <Field id="email" label="Email" error="Invalid" required>
        <Input />
      </Field>,
    );
    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain('required=""');
  });

  it('leaves controls outside a Field untouched', () => {
    const html = renderToStaticMarkup(<Input />);
    expect(html).not.toContain('id=');
    expect(html).not.toContain('aria-');
  });
});
