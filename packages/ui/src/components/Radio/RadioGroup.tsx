import { type FieldsetHTMLAttributes, type ReactNode, useId, useMemo } from 'react';
import { Label } from '../Label';
import styles from './Radio.module.css';
import { RadioGroupContext } from './RadioGroupContext';

export type RadioGroupProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  label: ReactNode;
  /** Shared `name` for the Radios inside. Generated when omitted. */
  name?: string;
  direction?: 'vertical' | 'horizontal';
};

export function RadioGroup({
  label,
  name,
  direction = 'vertical',
  className,
  children,
  ...props
}: RadioGroupProps) {
  const generatedName = useId();
  const context = useMemo(() => ({ name: name ?? generatedName }), [name, generatedName]);
  const classes = className ? `${styles.group} ${className}` : styles.group;
  const optionClasses =
    direction === 'horizontal' ? `${styles.options} ${styles.horizontal}` : styles.options;

  return (
    <fieldset className={classes} {...props}>
      <Label as="legend" className={styles.legend}>
        {label}
      </Label>
      <RadioGroupContext.Provider value={context}>
        <div className={optionClasses}>{children}</div>
      </RadioGroupContext.Provider>
    </fieldset>
  );
}
